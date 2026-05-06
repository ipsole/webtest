const fs = require('fs');
const path = require('path');
const glob = require('glob');
const cheerio = require('cheerio');

const files = glob.sync('legacy_html/**/index.html').filter(f => f !== 'legacy_html/index.html');

console.log(`Found ${files.length} pages to migrate.`);

files.slice(0, 1).forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const $ = cheerio.load(content);
    let mainHtml = $('main').html();
    console.log("File:", file);
    console.log("Main HTML length:", mainHtml ? mainHtml.length : 0);
});
