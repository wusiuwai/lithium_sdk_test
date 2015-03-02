(function () {

  'use strict';

  angular.module('li.community.directives.message-reply-button', [
    'templates-li.community',
    'li.common.services.localization-manager',
    'li.community.services.authentication-manager',
    'li.common.services.rest-manager',
    'li.common.services.alert-manager',
    'li.common.services.url-manager'
  ])

  .controller('liCommunityMessageReplyButtonController', [
    '$scope', '$location', '$filter', 'authenticationManager', 'alertManager', 'urlManager', 'restManager',
    function ($scope, $location, $filter, authenticationManager, alertManager, urlManager, restManager) {

      /**
       * @ngdoc method
       * @name messageReplyButton#reply
       *
       * @description
       * Sets the URL location to reply page
       *
       */
      $scope.reply = function () {
        authenticationManager.getCurrentUser().then(function (loggedInUser) {
          if (loggedInUser.emailConfirmationRequired) {
            alertManager.warning = $filter('translate')('li.community.message-reply-button.text.verify-email');
            return;
          } else {
            var tapestryContext = restManager.getTapestryContext();
            urlManager.navigateToUrl(tapestryContext + '/forums/replypage/message-uid/' + $scope.message.id);
          }
        });
      };

      $scope.buttonText = 'li.community.message-reply-button.text.' + $scope.message.conversation.style + '-title';
      authenticationManager.getCurrentUser().then(function (loggedInUser) {
        $scope.showReplyButton = $scope.message.conversation.style !== 'qanda' || $scope.message.author.id !== loggedInUser.id;
      });
    }
  ])

  /**
   * @module community
   * @ngdoc directive
   * @name messageReplyButton
   *
   * @requires community.authenticationManager
   * @requires common.alertManager
   * @requires common.localizationManager
   * @requires common.urlManager
   *
   * @restrict AE
   * @image message-reply-button.png
   *
   * @param {object} message The message that is being replied to.
   *
   * @description
   * Renders the reply button for message on scope
   */
  .directive('liCommunityMessageReplyButton', function () {
    return {
      restrict: 'AE',
      scope: {
        message: '='
      },
      templateUrl: 'message-reply-button/message-reply-button.tpl.html',
      controller: 'liCommunityMessageReplyButtonController'
    };
  });

}());
