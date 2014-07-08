'use strict';

var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);

    this.option('controller', {
      type: Boolean,
      desc: 'Want some Controller?',
      defaults: true
    });
  },

  wantController: function () {
    this.log(this.options.controller.toString());
  }
});
