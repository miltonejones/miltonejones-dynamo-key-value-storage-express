var express = require('express');

const  { 
  getItem, 
  getItems, 
  getItemsByKey,
  removeItem, 
  removeItems, 
  removeItemsByKey, 
  setItem 
} = require ('../methods')

var router = express.Router();



// ----------------------------------------------------------------------/
// get methods
// ----------------------------------------------------------------------/

/* getItems. */
router.get('/', function(req, res, next) {
  (async () => {
    const items = await getItems();
    res.json(items);
  })();
});

/* getItemsByKey. */
router.get('/:auth_key', function(req, res, next) {
  (async () => {
    const items = await getItemsByKey(req.params.auth_key);
    res.json(items);
  })();
});

/* getItem. */
router.get('/:auth_key/:data_key', function(req, res, next) {
  (async () => {
    const item = await getItem(req.params.auth_key, req.params.data_key);
    res.json(item);
  })();
});

// ----------------------------------------------------------------------/
// delete methods
// ----------------------------------------------------------------------/


/* removeItems. */
router.delete('/', function(req, res, next) {
  (async () => {
    await removeItems();
    res.json({message: 'DELETE SUCCESSFUL'});
  })();
});

/* removeItemsByKey. */
router.delete('/:auth_key', function(req, res, next) {
  (async () => {
    await removeItemsByKey(req.params.auth_key);
    res.json({message: 'DELETE SUCCESSFUL'});
  })();
});

/* removeItem. */
router.delete('/:auth_key/:data_key', function(req, res, next) {
  (async () => {
    await removeItem(req.params.auth_key, req.params.data_key);
    res.json({message: 'DELETE SUCCESSFUL'});
  })();
});


// ----------------------------------------------------------------------/
// post methods
// ----------------------------------------------------------------------/
/* setItem. */
router.post('/', function(req, res, next) {
  (async () => {
    await setItem(req.body);
    res.json({message: 'SUCCESS'});
  })();
});


module.exports = router;
