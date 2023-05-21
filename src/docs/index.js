
const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const orders = require('./orders');

module.exports = {
    ...basicInfo,
    //...servers,
    ...components,
    ...tags,
    ...orders
};