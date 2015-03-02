(function () {

  'use strict';

  describe('li-community-message-reply-button', function () {
    var $rootScope, $compile, $q;

    beforeEach(function () {
      module('li.community.directives.message-reply-button');
      module('li.common.mocks');

      module(function ($provide) {
        $provide.factory('urlManager', function () {
          return {
            navigateToUrl: function (url) {
            }
          };
        });
        $provide.factory('alertmanager', function () {
          return {
            warning: ''
          };
        });
        $provide.factory('authenticationManager', function () {
          var emailConfirmationRequired = false;
          var userId = -1;
          return {
            getCurrentUser: function () {
              var deferred = $q.defer();
              deferred.resolve({
                id: userId,
                emailConfirmationRequired: emailConfirmationRequired
              });
              return deferred.promise;
            },
            setUserId: function (_userId_) {
              userId = _userId_;
            },
            setEmailConfirmationRequired: function (_emailConfirmationRequired_) {
              emailConfirmationRequired = _emailConfirmationRequired_;
            }
          };
        });
      });

      inject(function (_$rootScope_, _$compile_, _$q_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        $q = _$q_;
      });
    });

    it('should render reply button for forum', function () {
      var element;

      $rootScope.message = {
        id: 10,
        conversation: {
          style: 'forum'
        }
      };
      element = $compile('<div><li:community-message-reply-button message="message"></li:community-message-reply-button></div>')($rootScope);
      $rootScope.$digest();

      expect(element.find('.li-message-reply-button').html().trim()).toEqual(
        '<button li-common-button="" option="\'primary\'" block="true" ng-click="reply()" class="ng-binding">li.community.message-reply-button.text.forum-title</button>');
    });

    it('should render reply button for qand a when user is not logged in', function () {
      var element;

      $rootScope.message = {
        id: 10,
        conversation: {
          style: 'qanda'
        },
        author: {
          id: 7
        }
      };
      element = $compile('<div><li:community-message-reply-button message="message"></li:community-message-reply-button></div>')($rootScope);
      $rootScope.$digest();

      expect(element.find('.li-message-reply-button').length).toEqual(1);
    });

    it('should render reply button for qand a when user is logged in is not author of qanda topic', inject(function (authenticationManager) {
      var element;

      authenticationManager.setUserId(77);
      $rootScope.message = {
        id: 10,
        conversation: {
          style: 'qanda'
        },
        author: {
          id: 7
        }
      };
      element = $compile('<div><li:community-message-reply-button message="message"></li:community-message-reply-button></div>')($rootScope);
      $rootScope.$digest();

      expect(element.find('.li-message-reply-button').length).toEqual(1);
    }));

    it('should not render reply button for qand a when user is logged in is author of question', inject(function (authenticationManager) {
      var element;

      authenticationManager.setUserId(7);
      $rootScope.message = {
        id: 10,
        conversation: {
          style: 'qanda'
        },
        author: {
          id: 7
        }
      };
      element = $compile('<div><li:community-message-reply-button message="message"></li:community-message-reply-button></div>')($rootScope);
      $rootScope.$digest();

      expect(element.find('.li-message-reply-button').length).toEqual(0);
    }));

    it('should navigate to reply page when button is clicked and user does not need to verify email', inject(function (urlManager) {
      var element;

      $rootScope.message = {
        id: 10,
        conversation: {
          style: 'qanda'
        },
        author: {
          id: 7
        }
      };

      element = $compile('<div><li:community-message-reply-button message="message"></li:community-message-reply-button></div>')($rootScope);
      $rootScope.$digest();

      spyOn(urlManager, 'navigateToUrl');

      element.find('button').click();

      expect(urlManager.navigateToUrl).toHaveBeenCalledWith('/t5/forums/replypage/message-uid/10');
    }));

    it('should not navigate to reply page when button is clicked and user needs to verify email', inject(function (authenticationManager, alertManager) {
      var element;

      authenticationManager.setEmailConfirmationRequired(true);
      $rootScope.message = {
        id: 10,
        conversation: {
          style: 'qanda'
        },
        author: {
          id: 7
        }
      };

      element = $compile('<div><li:community-message-reply-button message="message"></li:community-message-reply-button></div>')($rootScope);
      $rootScope.$digest();

      element.find('button').click();

      expect(alertManager.warning).toBe('li.community.message-reply-button.text.verify-email');
    }));
  });

})();
