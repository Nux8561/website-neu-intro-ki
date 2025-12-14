#!/usr/bin/env python3
"""
Icon Curator - Hilft dabei, die wichtigsten Icons aus den extrahierten SVGs zu finden
"""

import os
from pathlib import Path
from collections import Counter
import re

def analyze_svg_content(svg_path):
    """Analysiert SVG-Inhalt, um zu bestimmen, ob es ein wichtiges Icon ist"""
    try:
        with open(svg_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Suche nach wichtigen Keywords
        keywords = [
            'workflow', 'automate', 'ai', 'data', 'connect', 'deploy',
            'chart', 'graph', 'report', 'pipeline', 'insight', 'analytics',
            'arrow', 'check', 'plus', 'minus', 'close', 'menu', 'search',
            'user', 'team', 'company', 'deal', 'revenue', 'growth'
        ]
        
        content_lower = content.lower()
        matches = sum(1 for keyword in keywords if keyword in content_lower)
        
        # Prüfe auf häufige Icon-Patterns
        has_path = '<path' in content
        has_circle = '<circle' in content
        has_rect = '<rect' in content
        has_polygon = '<polygon' in content
        
        # Komplexität (mehr Elemente = wahrscheinlich wichtigeres Icon)
        element_count = content.count('<path') + content.count('<circle') + content.count('<rect')
        
        return {
            'keyword_matches': matches,
            'has_path': has_path,
            'element_count': element_count,
            'size': len(content),
            'score': matches * 2 + element_count
        }
    except Exception as e:
        return {'score': 0, 'error': str(e)}

def curate_icons(svgs_dir, output_file='important_icons.txt'):
    """Kuratiert Icons und erstellt eine Liste der wichtigsten"""
    
    svgs_path = Path(svgs_dir)
    if not svgs_path.exists():
        print(f"✗ Ordner nicht gefunden: {svgs_dir}")
        return
    
    print(f"📊 Analysiere SVGs in: {svgs_path}\n")
    
    svg_files = list(svgs_path.glob("*.svg"))
    print(f"Gefunden: {len(svg_files)} SVG-Dateien\n")
    
    # Analysiere alle SVGs
    results = []
    for svg_file in svg_files:
        analysis = analyze_svg_content(svg_file)
        results.append({
            'file': svg_file.name,
            'path': str(svg_file),
            **analysis
        })
    
    # Sortiere nach Score
    results.sort(key=lambda x: x.get('score', 0), reverse=True)
    
    # Top 50 wichtigste Icons
    top_icons = results[:50]
    
    # Schreibe Ergebnis
    output_path = svgs_path.parent / output_file
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write("# Wichtigste Icons (Top 50)\n")
        f.write("# Basierend auf Keyword-Matches und Komplexität\n\n")
        
        for i, icon in enumerate(top_icons, 1):
            f.write(f"{i}. {icon['file']}\n")
            f.write(f"   Score: {icon.get('score', 0)}\n")
            f.write(f"   Keywords: {icon.get('keyword_matches', 0)}\n")
            f.write(f"   Elements: {icon.get('element_count', 0)}\n")
            f.write(f"   Path: {icon['path']}\n\n")
    
    print(f"✅ Top 50 Icons gespeichert in: {output_path}\n")
    print("Top 10 Icons:")
    for i, icon in enumerate(top_icons[:10], 1):
        print(f"  {i}. {icon['file']} (Score: {icon.get('score', 0)})")
    
    # Erstelle auch eine einfache Liste für Copy-Paste
    simple_list_path = svgs_path.parent / 'icons_to_copy.txt'
    with open(simple_list_path, 'w', encoding='utf-8') as f:
        f.write("# Diese Icons nach /public/icons/ kopieren:\n\n")
        for icon in top_icons[:20]:  # Top 20
            f.write(f"{icon['file']}\n")
    
    print(f"\n✅ Einfache Liste (Top 20) gespeichert in: {simple_list_path}")

if __name__ == "__main__":
    # Pfad zu den extrahierten SVGs
    svgs_dir = r"c:\Users\lsper\OneDrive - Dominik Scherwinsky\Desktop\extracted_assets\svgs"
    
    if not os.path.exists(svgs_dir):
        # Versuche aktuelles Verzeichnis
        current_dir = Path.cwd()
        extracted_dir = current_dir.parent / "extracted_assets" / "svgs"
        if extracted_dir.exists():
            svgs_dir = str(extracted_dir)
        else:
            print("⚠ Bitte passe den Pfad zu extracted_assets/svgs an!")
            exit(1)
    
    curate_icons(svgs_dir)

