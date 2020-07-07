const characterList = require('../data/html/page_0.json');
const cheerio = require('cheerio');

characterList.forEach(character => {
  const $ = cheerio.load(character.wikiHTML);
  const stats = $('.power-circle__wrapper').text();
  console.log(`character: ${stats}`);
})