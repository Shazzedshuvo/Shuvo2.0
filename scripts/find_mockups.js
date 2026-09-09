const https = require('https');

https.get('https://arafat-portfolio20.vercel.app/_next/static/immutable/chunks/0k6b67al01i2p.js', (res) => {
  let d = '';
  res.on('data', (chunk) => (d += chunk));
  res.on('end', () => {
    let idx = 0;
    while ((idx = d.indexOf('mockupType', idx + 1)) !== -1) {
      console.log('--- FOUND MOCKUP TYPE AT', idx);
      console.log(d.substring(idx - 100, idx + 800));
    }
  });
});
