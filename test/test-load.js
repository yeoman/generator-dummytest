'use strict';

var assert = require('assert');

describe('dummytest generator', function () {
  it('can be imported without blowing up', function () {
    assert(require('../app') !== undefined);
    assert(require('../controller') !== undefined);
  });
});
