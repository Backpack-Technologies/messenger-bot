const rp = require('request-promise');

const getAsinFromLink = (link) => {
    let pos = link.search('/dp/');
    if(pos == -1) {
        pos = link.search('/product/');
        pos += 9;
    }
    else pos += 4;
    let asin = "";
    while(pos < link.length && asin.length < 10) asin += link[pos], pos++;
    return asin;
}

const amazonPrice = async (ASIN) => {
    const ASINs = [ ASIN ];
    const options = {
        uri: 'https://api.backpackbang.com/api/v1/items/' + ASIN,
        json: true
      };
    const item = await rp(options);
    return item;
}

module.exports = {
    getAsinFromLink,
    amazonPrice
}