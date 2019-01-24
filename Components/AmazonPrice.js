const rp = require('request-promise');

const getAsinFromLink = (link) => {
    let pos = link.search('/dp/');
    console.log(pos);
    if(pos == -1) {
        pos = link.search('/product/');
        pos += 9;
    }
    else pos += 4;
    let asin = "";
    while(pos < link.length && asin.length < 10) asin += link[pos], pos++;
    console.log(asin);
    return asin;
}

const amazonPrice = async (ASIN) => {
    const ASINs = [ ASIN ];
    const options = {
        uri: 'https://api.backpackbang.com/api/v1/items/' + ASIN,
        json: true
      };
    try {
        const item = await rp(options);
        return item;
    }
    catch(err) {
        return undefined
    }
}

module.exports = {
    getAsinFromLink,
    amazonPrice
}