'use strict';

describe('myApp.video module', function() {

  beforeEach(module('myApp.video'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var videoCtrl = $controller('VideoCtrl');
      expect(videoCtrl).toBeDefined();
    }));

  });
});