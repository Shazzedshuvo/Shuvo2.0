const https = require('https');
const fs = require('fs');
const path = require('path');

const galleryImages = [
  '3rd mocup.png',
  '4th mocup.png',
  '6th mocup.png',
  '7th mocup.png',
  '8th mocup.png',
  '9th mocup.png',
  '10th mocup.png',
  '11.png',
  '14.png',
  '15.jpg'
];

const targetDir = path.join(__dirname, '..', 'public', 'gellary');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function downloadImage(fileName) {
  return new Promise((resolve, reject) => {
    const encodedName = encodeURIComponent(fileName);
    const url = `https://arafat-portfolio20.vercel.app/gellary/${encodedName}`;
    const dest = path.join(targetDir, fileName);

    console.log('Downloading:', url);
    const file = fs.createWriteStream(dest);

    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        console.error(`Failed ${fileName}: status ${res.statusCode}`);
        file.close();
        fs.unlinkSync(dest);
        return resolve(false);
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          console.log(`Saved: ${fileName}`);
          resolve(true);
        });
      });
    }).on('error', (err) => {
      console.error(`Error downloading ${fileName}:`, err);
      file.close();
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      resolve(false);
    });
  });
}

async function run() {
  for (const img of galleryImages) {
    await downloadImage(img);
  }
  console.log('All downloads completed!');
}

run();
