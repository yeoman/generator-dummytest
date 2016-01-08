'use strict';

var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments);

    this.option('apppy', {
      type: Boolean,
      desc: 'Want some Apppy?',
      defaults: true
    });
  },

  askFor: function () {
    this.log(this.options.apppy.toString());
  }
});
