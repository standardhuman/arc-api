'use strict';

const Nodal = require('nodal');

class IndexController extends Nodal.Controller {

  get() {

    this.respond({message: 'Welcome to your Nodal Project'});

  }

  post() {

    this.respond({message: 'Posted'});

  }

}

module.exports = IndexController;
