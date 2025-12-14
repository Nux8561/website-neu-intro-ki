#!/usr/bin/env python3
"""
Animation Analyzer für Attio HTML-Datei
Analysiert CSS Transitions, Keyframes und Animation-Parameter
"""

import re
from pathlib import Path
from bs4 import BeautifulSoup
from collections import Counter

def analyze_animations(html_file_path):
    """Analysiert Animationen in der HTML-Datei"""
    
    html_path = Path(html_file_path)
    if not html_path.exists():
        print(f"✗ Datei nicht gefunden: {html_file_path}")
        return
    
    print(f"📖 Analysiere HTML-Datei: {html_path}\n")
    
    with open(html_path, 'r', encoding='utf-8', errors='ignore') as f:
        html_content = f.read()
    
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Sammle alle CSS-Regeln
    all_css = []
    
    # 1. Inline Styles
    for tag in soup.find_all(style=True):
        all_css.append(tag.get('style', ''))
    
    # 2. <style> Tags
    for style_tag in soup.find_all('style'):
        all_css.append(style_tag.string or '')
    
    # 3. Klassen-Namen (für Tailwind-Analyse)
    all_classes = []
    for tag in soup.find_all(class_=True):
        classes = tag.get('class', [])
        if isinstance(classes, list):
            all_classes.extend(classes)
        else:
            all_classes.append(classes)
    
    css_text = ' '.join(all_css)
    
    # Analysiere Transitions
    print("=" * 60)
    print("📊 TRANSITION-ANALYSE")
    print("=" * 60)
    
    # Suche nach transition: ... Patterns
    transition_pattern = r'transition[:\s]+([^;]+)'
    transitions = re.findall(transition_pattern, css_text, re.IGNORECASE)
    
    durations = []
    timing_functions = []
    
    for trans in transitions:
        # Duration
        dur_match = re.search(r'(\d+(?:\.\d+)?)\s*(?:ms|s)', trans)
        if dur_match:
            val = float(dur_match.group(1))
            unit = dur_match.group(0)[-2:]
            if unit == 's':
                val = val * 1000
            durations.append(int(val))
        
        # Timing Function
        timing_match = re.search(r'(?:ease|linear|ease-in|ease-out|ease-in-out|cubic-bezier\([^)]+\))', trans)
        if timing_match:
            timing_functions.append(timing_match.group(0))
    
    if durations:
        print(f"\n⏱️  DURATIONS gefunden:")
        dur_counter = Counter(durations)
        for dur, count in dur_counter.most_common(10):
            print(f"   {dur}ms ({count}x)")
    
    if timing_functions:
        print(f"\n🎯 TIMING FUNCTIONS gefunden:")
        tf_counter = Counter(timing_functions)
        for tf, count in tf_counter.most_common(10):
            print(f"   {tf} ({count}x)")
    
    # Analysiere Keyframes
    print("\n" + "=" * 60)
    print("🎬 KEYFRAME-ANALYSE")
    print("=" * 60)
    
    keyframe_pattern = r'@keyframes\s+(\w+)\s*\{([^}]+)\}'
    keyframes = re.findall(keyframe_pattern, css_text, re.IGNORECASE)
    
    if keyframes:
        print(f"\n🎭 KEYFRAMES gefunden:")
        for name, content in keyframes[:10]:  # Erste 10
            print(f"\n   @keyframes {name}")
            # Vereinfachte Ausgabe
            steps = re.findall(r'(from|to|\d+%)\s*\{([^}]+)\}', content)
            for step, props in steps[:3]:  # Erste 3 Steps
                print(f"      {step}: {props[:50]}...")
    
    # Analysiere Tailwind-Klassen
    print("\n" + "=" * 60)
    print("🎨 TAILWIND-KLASSEN-ANALYSE")
    print("=" * 60)
    
    tailwind_patterns = {
        'duration': r'duration-(\d+)',
        'ease': r'ease-(\w+)',
        'delay': r'delay-(\d+)',
        'transition': r'transition-(\w+)',
    }
    
    classes_text = ' '.join(all_classes)
    
    for pattern_name, pattern in tailwind_patterns.items():
        matches = re.findall(pattern, classes_text)
        if matches:
            counter = Counter(matches)
            print(f"\n   {pattern_name}:")
            for match, count in counter.most_common(5):
                print(f"      {pattern_name}-{match} ({count}x)")
    
    # Analysiere Hover-Effekte
    print("\n" + "=" * 60)
    print("🖱️  HOVER-EFFEKTE")
    print("=" * 60)
    
    hover_pattern = r':hover\s*\{([^}]+)\}'
    hovers = re.findall(hover_pattern, css_text, re.IGNORECASE)
    
    hover_props = []
    for hover in hovers:
        # Suche nach transform, scale, opacity, etc.
        if 'transform' in hover or 'scale' in hover:
            hover_props.append('transform/scale')
        if 'opacity' in hover:
            hover_props.append('opacity')
        if 'shadow' in hover:
            hover_props.append('shadow')
        if 'background' in hover:
            hover_props.append('background')
    
    if hover_props:
        counter = Counter(hover_props)
        print("\n   Häufigste Hover-Änderungen:")
        for prop, count in counter.most_common():
            print(f"      {prop} ({count}x)")
    
    # Generiere Konfigurations-Vorschläge
    print("\n" + "=" * 60)
    print("💡 KONFIGURATIONS-VORSCHLÄGE")
    print("=" * 60)
    
    # Meistgenutzte Duration
    most_common_duration = dur_counter.most_common(1)[0][0] if durations else 200
    
    # Meistgenutzte Timing Function
    most_common_timing = tf_counter.most_common(1)[0][0] if timing_functions else "ease-in-out"
    
    print("\n📝 Tailwind Config Extension:")
    print("```javascript")
    print("theme: {")
    print("  extend: {")
    print(f"    transitionDuration: {{")
    print(f"      'attio': '{most_common_duration}ms',")
    print("    },")
    
    # Parse cubic-bezier falls vorhanden
    cubic_match = re.search(r'cubic-bezier\(([^)]+)\)', most_common_timing)
    if cubic_match:
        bezier = cubic_match.group(1)
        print(f"    transitionTimingFunction: {{")
        print(f"      'attio-ease': 'cubic-bezier({bezier})',")
        print("    },")
    else:
        print(f"    transitionTimingFunction: {{")
        print(f"      'attio-ease': '{most_common_timing}',")
        print("    },")
    
    print("  }")
    print("}")
    print("```")
    
    print("\n📝 Framer Motion Config:")
    print("```javascript")
    print("// Basierend auf Attio-Analyse")
    print("export const attioTransition = {")
    print("  type: 'spring',")
    print("  stiffness: 400,")
    print("  damping: 17,")
    print("  mass: 1")
    print("};")
    print("")
    print("export const attioHover = {")
    print("  scale: 1.01,")
    print("  transition: attioTransition")
    print("};")
    print("")
    print("export const attioTap = {")
    print("  scale: 0.98,")
    print("  transition: attioTransition")
    print("};")
    print("```")
    
    print("\n✅ Analyse abgeschlossen!")

if __name__ == "__main__":
    html_file = r"c:\Users\lsper\OneDrive - Dominik Scherwinsky\Desktop\Attio_ The next gen of CRM.html"
    
    if not Path(html_file).exists():
        current_dir = Path.cwd()
        html_files = list(current_dir.glob("*.html"))
        if html_files:
            html_file = str(html_files[0])
        else:
            print("⚠ Bitte passe den Pfad zur HTML-Datei an!")
            exit(1)
    
    analyze_animations(html_file)

