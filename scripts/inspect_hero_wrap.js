const https = require('https');

https.get('https://arafat-portfolio20.vercel.app/_next/static/immutable/chunks/0k6b67al01i2p.js', (res) => {
  let d = '';
  res.on('data', (chunk) => (d += chunk));
  res.on('end', () => {
    const i = d.indexOf('hero-image-wrap');
    if (i !== -1) {
      console.log('--- FOUND HERO IMAGE WRAP ---');
      console.log(d.substring(i - 100, i + 2500));
    } else {
      console.log('NOT FOUND');
    }
  });
});
