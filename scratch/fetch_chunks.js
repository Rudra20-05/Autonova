const fs = require('fs');
const https = require('https');
const path = require('path');

const chunkUrls = [
  'https://tweakcn.com/_next/static/chunks/8290a1c1e0786e77.js',
  'https://tweakcn.com/_next/static/chunks/d3a6bd5de84ea006.js',
  'https://tweakcn.com/_next/static/chunks/15ecc5db33c0fd88.js',
  'https://tweakcn.com/_next/static/chunks/3fd0aa86e7174c02.js',
  'https://tweakcn.com/_next/static/chunks/04c33173f4a0574b.js',
  'https://tweakcn.com/_next/static/chunks/f7b88ae114b8771d.js',
  'https://tweakcn.com/_next/static/chunks/19aa6b67974df6dd.js',
  'https://tweakcn.com/_next/static/chunks/49edce9de9851601.js',
  'https://tweakcn.com/_next/static/chunks/84974f24b30421b9.js',
  'https://tweakcn.com/_next/static/chunks/e78ab966e2f4675e.js',
  'https://tweakcn.com/_next/static/chunks/2f7a3a58442fbff8.js',
  'https://tweakcn.com/_next/static/chunks/4836bef5facb213b.js',
  'https://tweakcn.com/_next/static/chunks/c50e20f0ee469f95.js',
  'https://tweakcn.com/_next/static/chunks/6a172c210755e08f.js',
  'https://tweakcn.com/_next/static/chunks/20cc7c907362eebd.js',
  'https://tweakcn.com/_next/static/chunks/5545214bb47f4c5b.js',
  'https://tweakcn.com/_next/static/chunks/a9e07a1a966df9d4.js',
  'https://tweakcn.com/_next/static/chunks/6e392cf5aca0a13a.js',
  'https://tweakcn.com/_next/static/chunks/e3295e34fc9141ff.js',
  'https://tweakcn.com/_next/static/chunks/e1ea638a4d5f697a.js',
  'https://tweakcn.com/_next/static/chunks/a3a722e5556c0309.js',
  'https://tweakcn.com/_next/static/chunks/492e3f6ae65fafbd.js',
  'https://tweakcn.com/_next/static/chunks/95035873985300c0.js',
  'https://tweakcn.com/_next/static/chunks/75edc0c3ec9633ec.js',
  'https://tweakcn.com/_next/static/chunks/83006bd0704eb056.js',
  'https://tweakcn.com/_next/static/chunks/a42defd06495d9da.js',
  'https://tweakcn.com/_next/static/chunks/c760485570305039.js',
  'https://tweakcn.com/_next/static/chunks/7675c02ce7ed0a29.js',
  'https://tweakcn.com/_next/static/chunks/b7519f9d32d4f9b1.js',
  'https://tweakcn.com/_next/static/chunks/1a9573986a5c38f9.js',
  'https://tweakcn.com/_next/static/chunks/404d1120fbd01527.js',
  'https://tweakcn.com/_next/static/chunks/ff44f13f54bdda72.js',
  'https://tweakcn.com/_next/static/chunks/3697575c5f5bd620.js',
  'https://tweakcn.com/_next/static/chunks/624be352a0f14df1.js',
  'https://tweakcn.com/_next/static/chunks/6508877913c09f6d.js',
  'https://tweakcn.com/_next/static/chunks/c287937c785116f3.js',
  'https://tweakcn.com/_next/static/chunks/3f4d8a60f1a0e10d.js',
  'https://tweakcn.com/_next/static/chunks/f45dca5f96ab7cd1.js',
  'https://tweakcn.com/_next/static/chunks/6edf4c729f2b2da5.js',
  'https://tweakcn.com/_next/static/chunks/3635d6c107a94d00.js',
  'https://tweakcn.com/_next/static/chunks/ebba8f296a82b5d8.js',
  'https://tweakcn.com/_next/static/chunks/d9a113a1f866f277.js'
];

function download(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
      res.on('error', (err) => reject(err));
    });
  });
}

async function run() {
  console.log('Fetching chunks...');
  for (const url of chunkUrls) {
    try {
      const code = await download(url);
      if (code.toLowerCase().includes('vercel') && code.includes('background')) {
        console.log('Found vercel and background in:', url);
        // Let's find index
        const index = code.toLowerCase().indexOf('vercel');
        console.log('Snippet:', code.substring(index - 200, index + 3000));
      }
    } catch (e) {
      console.error('Failed to download:', url, e.message);
    }
  }
  console.log('Done!');
}

run();
