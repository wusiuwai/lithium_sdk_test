(function () {

  'use strict';

  describe('li-community-message-post-time', function () {
    var $rootScope, $compile;

    beforeEach(function () {
      module('li.community.directives.message-post-time');

      inject(function (_$rootScope_, _$compile_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
      });
    });

    it('should render post time of message', inject(function ($sce) {
      var element;

      $rootScope.message = {
        id: 10,
        post_time: $sce.trustAsHtml('2013-09-12T15:24:33.461-07:00')
      };
      element = $compile('<div><li:community-message-post-time message="message"></li:community-message-post-time></div>')($rootScope);
      $rootScope.$digest();

      expect(element.find('.li-message-post-time').length).toEqual(1);
      expect(element.find('.li-message-post-time').html().trim()).toEqual('<li:common-date date="message.post_time"></li:common-date>');
    }));

  });

})();
