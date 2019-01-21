const rp = require('request-promise');

const backpackSearch = async (query) => {
    query = encodeURI(query);
    console.log(query);
    let items = await rp('https://api.backpackbang.com/api/v1/search?query=' + query);
    items = JSON.parse(items);
    return items.items;
}

module.exports = {
    backpackSearch
}