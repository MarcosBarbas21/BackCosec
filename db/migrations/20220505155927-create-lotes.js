'use strict';

const { LoteSchema, LOTE_TABLE } = require('./../models/lote.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.updateTable(LOTE_TABLE, LoteSchema);
  },
};
