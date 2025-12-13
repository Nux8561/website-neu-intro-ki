const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Replacement mappings
const replacements = [
  // Backgrounds
  ['bg-white(?![/])', 'bg-background'],
  ['bg-\\[#0B0C0E\\]/5', 'bg-surface'],
  ['bg-\\[#0B0C0E\\]/10', 'bg-surface-elevated'],
  ['bg-\\[#0B0C0E\\]/2', 'bg-surface'],
  ['bg-\\[#0B0C0E\\](?![/])', 'bg-text-primary'],
  ['from-\\[#0B0C0E\\]/5', 'from-surface'],
  
  // Text colors
  ['text-\\[#0B0C0E\\]/80', 'text-text-secondary'],
  ['text-\\[#0B0C0E\\]/70', 'text-text-secondary'],
  ['text-\\[#0B0C0E\\]/60', 'text-text-muted'],
  ['text-\\[#0B0C0E\\]/50', 'text-text-muted'],
  ['text-\\[#0B0C0E\\](?![/])', 'text-text-primary'],
  
  // Borders
  ['border-\\[#0B0C0E\\]/20', 'border-border-active'],
  ['border-\\[#0B0C0E\\]/10', 'border-border-subtle'],
  
  // Hover states
  ['hover:bg-\\[#0B0C0E\\]/90', 'hover:bg-text-primary/90'],
  ['hover:bg-\\[#0B0C0E\\]/10', 'hover:bg-white/10'],
  ['hover:bg-\\[#0B0C0E\\]/5', 'hover:bg-white/5'],
  ['hover:text-\\[#0B0C0E\\]', 'hover:text-text-primary'],
  ['hover:border-\\[#0B0C0E\\]/20', 'hover:border-border-active'],
  
  // Focus states
  ['focus:border-\\[#0B0C0E\\]/20', 'focus:border-border-active'],
  ['focus:bg-\\[#0B0C0E\\]/10', 'focus:bg-white/10'],
  
  // Placeholders
  ['placeholder:text-\\[#0B0C0E\\]/50', 'placeholder:text-text-muted'],
];

// Find all TSX files in sections, ui, crm, research folders
const files = [
  ...glob.sync('components/sections/**/*.tsx'),
  ...glob.sync('components/ui/**/*.tsx'),
  ...glob.sync('components/crm/**/*.tsx'),
  ...glob.sync('components/research/**/*.tsx'),
  ...glob.sync('components/templates/**/*.tsx'),
];

console.log(`Found ${files.length} files to process`);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;
  
  replacements.forEach(([pattern, replacement]) => {
    const regex = new RegExp(pattern, 'g');
    if (regex.test(content)) {
      content = content.replace(new RegExp(pattern, 'g'), replacement);
      modified = true;
    }
  });
  
  if (modified) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated: ${file}`);
  }
});

console.log('Done!');

