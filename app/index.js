'use strict';

var yeoman = require('yeoman-generator');
var files = [
  'editorconfig',
  'gitattributes',
  'gitignore',
  'jshintrc'
];

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);

    files.forEach(function (file) {
      this.option(file, {
        type: Boolean,
        desc: 'Create .' + file + ' file',
        defaults: true
      });
    }, this);
  },

  sayHi: function () {
    // Have Yeoman greet the user.
    if (!this.options['skip-messages']) {
      this.log(require('yosay')('Welcome to the Yeoman Common generator!'));
      this.log('Copying requested files\n');
    }
  },

  save: function () {
    var options = {};
    files.forEach(function (file) {
      options[file] = this.options[file];
    }, this);

    this.config.set(options);
  },

  writeFiles: function () {
    files.forEach(function (file) {
      if (this.options[file]) {
        this.copy(file, '.' + file);
      }
    }, this);
  }
});
