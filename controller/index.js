'use strict';

var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments);

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
