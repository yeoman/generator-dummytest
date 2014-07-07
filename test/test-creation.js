'use strict';
var join = require('path').join;

var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('common', function () {
  var files = [
    'editorconfig',
    'gitattributes',
    'gitignore',
    'jshintrc'
  ];

  beforeEach(function (done) {
    helpers.testDirectory(join(__dirname, 'tmp'), done);
  });

  it('creates expected default files', function (done) {
    helpers.run(join(__dirname, '../app')).withOptions({'skip-messages': true})
    .on('end', function () {
      assert.file(files.map(function (file) {
        return '.' + file;
      }));
      done();
    });
  });

  it('creates no files', function (done) {
    helpers.run(join(__dirname, '../app')).withOptions({
      'skip-messages': true,
      editorconfig: false,
      gitattributes: false,
      gitignore: false,
      jshintrc: false
    })
    .on('end', function () {
      assert.noFile(files.map(function (file) {
        return '.' + file;
      }));
      done();
    });
  });

  it('creates selected files', function (done) {
    helpers.run(join(__dirname, '../app')).withOptions({
      'skip-messages': true,
      editorconfig: true,
      gitattributes: false,
      gitignore: true,
      jshintrc: false
    })
    .on('end', function () {
      assert.file([
        '.editorconfig',
        '.gitignore'
      ]);
      assert.noFile([
          '.gitattributes',
          '.jshintrc'
        ]);
      done();
    });
  });

  files.forEach(function (file) {
    it('creates ' + file + ' file only', function (done) {
      var options = {
        'skip-messages': true,
        editorconfig: false,
        gitattributes: false,
        gitignore: false,
        jshintrc: false
      };
      options[file] = true;

      helpers.run(join(__dirname, '../app')).withOptions(options)
      .on('end', function () {
        assert.file('.' + file);
        assert.noFile(files.map(function (assertFile) {
          if (assertFile !== file) {
            return '.' + assertFile;
          }
          return false;
        }));
        done();
      });
    });

  });
});
