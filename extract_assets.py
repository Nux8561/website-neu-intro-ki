#!/usr/bin/env python3
"""
Asset Extractor für Attio HTML-Datei
Extrahiert alle Bilder, SVGs und andere Assets aus der HTML-Datei
"""

import os
import re
import base64
import urllib.request
import urllib.parse
from pathlib import Path
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

def ensure_dir(path):
    """Erstellt Verzeichnis falls es nicht existiert"""
    os.makedirs(path, exist_ok=True)

def download_image(url, save_path):
    """Lädt ein Bild von einer URL herunter"""
    try:
        urllib.request.urlretrieve(url, save_path)
        print(f"✓ Heruntergeladen: {save_path}")
        return True
    except Exception as e:
        print(f"✗ Fehler beim Herunterladen von {url}: {e}")
        return False

def save_base64_image(data, save_path):
    """Speichert ein Base64-kodiertes Bild"""
    try:
        # Entferne Data-URL-Präfix (z.B. "data:image/png;base64,")
        header, encoded = data.split(',', 1)
        image_data = base64.b64decode(encoded)
        
        with open(save_path, 'wb') as f:
            f.write(image_data)
        print(f"✓ Base64-Bild gespeichert: {save_path}")
        return True
    except Exception as e:
        print(f"✗ Fehler beim Speichern von Base64-Bild: {e}")
        return False

def extract_assets(html_file_path):
    """Hauptfunktion zum Extrahieren von Assets"""
    
    # Pfade setzen
    html_path = Path(html_file_path)
    if not html_path.exists():
        print(f"✗ Datei nicht gefunden: {html_file_path}")
        return
    
    base_dir = html_path.parent
    output_dir = base_dir / "extracted_assets"
    images_dir = output_dir / "images"
    svgs_dir = output_dir / "svgs"
    
    ensure_dir(images_dir)
    ensure_dir(svgs_dir)
    
    print(f"📖 Lese HTML-Datei: {html_path}")
    
    # HTML-Datei lesen
    with open(html_path, 'r', encoding='utf-8', errors='ignore') as f:
        html_content = f.read()
    
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # 1. Alle <img> Tags finden
    print("\n🖼️  Extrahiere Bilder...")
    img_count = 0
    for img in soup.find_all('img'):
        src = img.get('src') or img.get('data-src')
        if not src:
            continue
        
        img_count += 1
        
        # Base64-Bilder
        if src.startswith('data:image'):
            ext = 'png'  # Default
            if 'jpeg' in src or 'jpg' in src:
                ext = 'jpg'
            elif 'svg' in src:
                ext = 'svg'
            elif 'gif' in src:
                ext = 'gif'
            
            filename = f"base64_image_{img_count}.{ext}"
            save_path = images_dir / filename
            save_base64_image(src, save_path)
            continue
        
        # Relative Pfade (lokale Dateien)
        if src.startswith('./') or not src.startswith('http'):
            # Versuche, die Datei im gleichen Verzeichnis oder im _files Ordner zu finden
            if src.startswith('./'):
                src = src[2:]  # Entferne ./
            
            local_path = base_dir / src
            if local_path.exists():
                filename = Path(src).name
                save_path = images_dir / filename
                try:
                    import shutil
                    shutil.copy2(local_path, save_path)
                    print(f"✓ Kopiert: {filename}")
                except Exception as e:
                    print(f"✗ Fehler beim Kopieren: {e}")
            else:
                print(f"⚠ Lokale Datei nicht gefunden: {src}")
            continue
        
        # URLs
        parsed_url = urlparse(src)
        filename = os.path.basename(parsed_url.path) or f"image_{img_count}.jpg"
        save_path = images_dir / filename
        download_image(src, save_path)
    
    # 2. Alle inline <svg> Tags finden
    print("\n🎨 Extrahiere inline SVGs...")
    svg_count = 0
    for svg in soup.find_all('svg'):
        svg_count += 1
        
        # Versuche, einen sinnvollen Namen zu finden
        svg_id = svg.get('id') or svg.get('class') or svg.get('aria-label')
        if svg_id:
            if isinstance(svg_id, list):
                svg_id = '_'.join(svg_id[:3])  # Max 3 Klassen
            # Kürze sehr lange Namen (Windows Limit: 260 Zeichen)
            svg_id = str(svg_id)[:100]  # Max 100 Zeichen
            filename = f"svg_{svg_id}_{svg_count}.svg"
        else:
            filename = f"svg_{svg_count}.svg"
        
        # Bereinige Dateinamen und kürze falls nötig
        filename = re.sub(r'[^\w\-_\.]', '_', filename)
        # Windows-Pfad-Limit: Max 255 Zeichen für Dateinamen
        if len(filename) > 200:
            name_part = filename.rsplit('.', 1)[0]
            ext = filename.rsplit('.', 1)[1] if '.' in filename else 'svg'
            filename = name_part[:190] + f"_{svg_count}.{ext}"
        
        save_path = svgs_dir / filename
        
        # SVG als String speichern
        try:
            with open(save_path, 'w', encoding='utf-8') as f:
                f.write(str(svg))
            print(f"✓ SVG gespeichert: {filename}")
        except Exception as e:
            print(f"✗ Fehler beim Speichern von SVG: {e}")
    
    # 3. Suche nach CSS-Background-Images
    print("\n🎨 Extrahiere CSS Background-Images...")
    bg_count = 0
    for style_tag in soup.find_all('style'):
        style_content = style_tag.string or ''
        
        # Suche nach url(...) Patterns
        url_pattern = r'url\(["\']?([^"\']+)["\']?\)'
        matches = re.findall(url_pattern, style_content)
        
        for match in matches:
            if match.startswith('data:'):
                # Base64
                bg_count += 1
                ext = 'png'
                if 'jpeg' in match or 'jpg' in match:
                    ext = 'jpg'
                filename = f"css_bg_{bg_count}.{ext}"
                save_path = images_dir / filename
                save_base64_image(match, save_path)
            elif match.startswith('http') or match.startswith('//'):
                # URL
                bg_count += 1
                parsed_url = urlparse(match)
                filename = os.path.basename(parsed_url.path) or f"css_bg_{bg_count}.jpg"
                save_path = images_dir / filename
                download_image(match, save_path)
    
    print(f"\n✅ Fertig!")
    print(f"📁 Assets gespeichert in: {output_dir}")
    print(f"   - Bilder: {images_dir}")
    print(f"   - SVGs: {svgs_dir}")

if __name__ == "__main__":
    # Pfad zur HTML-Datei
    html_file = r"c:\Users\lsper\OneDrive - Dominik Scherwinsky\Desktop\Attio_ The next gen of CRM.html"
    
    # Alternativ: Nutze aktuelles Verzeichnis
    if not os.path.exists(html_file):
        # Suche nach HTML-Datei im aktuellen Verzeichnis
        current_dir = Path.cwd()
        html_files = list(current_dir.glob("*.html"))
        if html_files:
            html_file = str(html_files[0])
            print(f"📂 Verwende gefundene HTML-Datei: {html_file}")
        else:
            print("⚠ Bitte passe den Pfad zur HTML-Datei in extract_assets.py an!")
            exit(1)
    
    extract_assets(html_file)

