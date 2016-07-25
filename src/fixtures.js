const Item = require('./models/item');
const Promotion = require('./models/promotion');
function loadAllItems() {
  return [
    
  ];
}

function loadPromotions() {
  return [
    new Promotion('BUY_TWO_GET_ONE_FREE', ['ITEM000000', 'ITEM000001', 'ITEM000005'])
  ];
}

exports.loadAllItems = loadAllItems;
exports.loadPromotions = loadPromotions;
