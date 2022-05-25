const { getItem } = require ('./getItem');
const { getItems } = require ('./getItems');
const { getItemsByKey } = require ('./getItemsByKey');

const { removeItem } = require ('./removeItem');
const { removeItems } = require ('./removeItems');
const { removeItemsByKey } = require ('./removeItemsByKey');

const { setItem } = require ('./setItem');


module.exports = { 
  getItem, 
  getItems, 
  getItemsByKey,
  removeItem, 
  removeItems, 
  removeItemsByKey, 
  setItem 
};