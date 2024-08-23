const fs = require('fs');
const path = require('path');

const srcPath = path.join(
  __dirname,
  'node_modules',
  'stencil-library',
  'commit-info.json'
);

const destPath = path.join(__dirname, 'src/assets/lib-commit-info.json');

fs.copyFileSync(srcPath, destPath);
console.log(
  'Component library commit info copied to src/assets/lib-commit-info.json'
);
