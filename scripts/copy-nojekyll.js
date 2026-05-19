const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')
const src = path.join(root, '.nojekyll')
const destDir = path.join(root, 'out')
const dest = path.join(destDir, '.nojekyll')

if (!fs.existsSync(src)) {
  throw new Error('.nojekyll not found in project root')
}
if (!fs.existsSync(destDir)) {
  throw new Error('Export output folder not found: out')
}
fs.copyFileSync(src, dest)
console.log('Copied .nojekyll to out/.nojekyll')
