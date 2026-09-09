const fs = require('fs');

const txt = fs.readFileSync('C:/Users/ShazzedShuvo/.gemini/antigravity-ide/brain/8e439746-ab07-47bd-b2ba-4c5032896b8e/.system_generated/steps/255/content.md', 'utf8');

const projIdx = txt.indexOf('id="projects"');
if (projIdx !== -1) {
  console.log('--- PROJECTS SECTION ---');
  console.log(txt.substring(projIdx, projIdx + 3000));
}

const gallIdx = txt.indexOf('id="gallery"');
if (gallIdx !== -1) {
  console.log('--- GALLERY SECTION ---');
  console.log(txt.substring(gallIdx, gallIdx + 3000));
}
