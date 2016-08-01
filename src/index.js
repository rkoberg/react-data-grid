
const canUseDOM = !!(
  (typeof window !== 'undefined' &&
  window.document && window.document.createElement)
);

if (!canUseDOM)
  window = {
    addEventListener: function addEventListener(){},
    attachEvent: function attachEvent(){},
    innerHeight: 0,
    innerWidth: 0,
    removeEventListener: function attachEvent(){},
    event: null,
  };

const Grid = require('./ReactDataGrid');
const Row  = require('./Row');
const Cell = require('./Cell');

module.exports = Grid;
module.exports.Row = Row;
module.exports.Cell = Cell;
