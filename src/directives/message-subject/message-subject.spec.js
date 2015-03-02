(function () {

  'use strict';

  describe('li-community-message-subject', function () {
    var $rootScope, $compile;

    beforeEach(function () {
      module('li.community.directives.message-subject');
      module('li.common.mocks');

      inject(function (_$rootScope_, _$compile_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
      });
    });

    it('should render subject of message', inject(function ($sce) {
      var element;

      $rootScope.message = {
        id: 10,
        subject: $sce.trustAsHtml('This is message Subject.'),
        conversation: {
          style: 'forum'
        }
      };
      element = $compile(
        '<div><li:community-message-subject message="message"></li:community-message-subject></div>'
      )($rootScope);
      $rootScope.$digest();

      expect(element.find('.li-community-message-subject').text().trim())
        .toEqual('li.community.message-subject.text.forum-prefix\n  This is message Subject.');
    }));

  });

})();
