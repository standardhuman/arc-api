'use strict';

const Nodal = require('nodal');

class CreateArcs extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016092219454475;
  }

  up() {

    return [
      this.createTable("arcs", [{"name":"user_id","type":"int"},{"name":"activity_name","type":"string"},{"name":"unit_name","type":"string"},{"name":"unit_qty","type":"int"},{"name":"value","type":"int"}])
    ];

  }

  down() {

    return [
      this.dropTable("arcs")
    ];

  }

}

module.exports = CreateArcs;
