'use strict';

const Nodal = require('nodal');

class Arc extends Nodal.Model {}

Arc.setDatabase(Nodal.require('db/main.js'));
Arc.setSchema(Nodal.my.Schema.models.Arc);

module.exports = Arc;
