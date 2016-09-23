'use strict';

const Nodal = require('nodal');
const Arc = Nodal.require('app/models/arc.js');

class V1ArcsController extends Nodal.Controller {

  index() {

    Arc.query()
      .where(this.params.query)
      .end((err, models) => {

        this.respond(err || models);

      });

  }

  show() {

    Arc.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {

    Arc.create(this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  update() {

    Arc.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  destroy() {

    Arc.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

}

module.exports = V1ArcsController;

console.log(V1ArcsController);
