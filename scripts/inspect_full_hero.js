const https = require('https');
const fs = require('fs');

https.get('https://arafat-portfolio20.vercel.app/_next/static/immutable/chunks/0k6b67al01i2p.js', res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    const i = d.indexOf('id:"hero"');
    if (i !== -1) {
      fs.writeFileSync('scripts/arafat_hero_dump.txt', d.substring(i - 1200, i + 3500));
      console.log('Saved arafat_hero_dump.txt');
    } else {
      console.log('Not found');
    }
  });
});
