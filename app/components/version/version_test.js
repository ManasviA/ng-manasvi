'use strict';

describe('engManasvi.version module', function () {
    beforeEach(module('engManasvi.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
