const https = require('https');

https.get('https://arafat-portfolio20.vercel.app/_next/static/immutable/chunks/0k6b67al01i2p.js', (res) => {
  let d = '';
  res.on('data', (chunk) => (d += chunk));
  res.on('end', () => {
    const i = d.indexOf('id:"hero"');
    if (i !== -1) {
      console.log('--- FOUND HERO JSX ---');
      console.log(d.substring(i - 50, i + 3500));
    } else {
      console.log('NOT FOUND');
    }
  });
});
