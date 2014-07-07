# generator-common [![Build Status](https://secure.travis-ci.org/eddiemonge/generator-common.png?branch=master)](https://travis-ci.org/eddiemonge/generator-common)

A Yeoman composable generator to scaffold out default app files for other generators

## Usage

In the generator that would like to use this one, add the following code in a method that is in `yeoman.generators.Base.extend`:

```javascript
  this.composeWith('common', {
    options: {}
  });
```

Using options:

```javascript
  this.composeWith('common', {
    options: {
      'skip-messages': true,
      jshintrc: false,
      gitignore: false,
      editorconfig: true,
      gitattributes: true
    }
  });
```

### Example generator:

```javascript
var yeoman = require('yeoman-generator');
module.exports = yeoman.generators.Base.extend({
  setupRoot: function () {
    this.composeWith('common', {
      options: {
        'skip-messages': true,
        jshintrc: false,
        gitignore: false,
        editorconfig: true,
        gitattributes: true
      }
    });
  },

  doOtherThings: function () {
    this.copy('app');
  }
});

```

## Options

### skip-messages
Default: false
Display the usage messages. Set to false for quieter output

---

### editorconfig
Default: true

Set to true to create a .editorconfig file or false to skip it

### gitattributes
Default: true

Set to true to create a .gitattributes file or false to skip it

### gitignore
Default: true

Set to true to create a .gitignore file or false to skip it

### jshintrc
Default: true

Set to true to create a .jshintrc file or false to skip it
