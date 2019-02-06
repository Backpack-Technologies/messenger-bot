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

const priceSeparator = (price) => {
    price = price.toString();
    let ret = "";
    let cnt = 0;
    let flg = 0;
    for(let i=price.length-1; i>=0; i--) {
        if(cnt == 3 && !flg) {
            flg = 1;
            cnt = 0;
            ret = "," + ret;
        }
        if(cnt == 2 && flg) {
            ret = "," + ret;
            cnt = 0;
        }
        ret = price[i] + ret;
        cnt++;
    }
    return ret;
}

module.exports = {
    getAsinFromLink,
    amazonPrice,
    priceSeparator
}