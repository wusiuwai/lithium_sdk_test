(function () {

  'use strict';

  angular.module('li.community.directives.message-subject', [
    'templates-li.community',
    'li.common.services.localization-manager'
  ])

  /**
   * @module community
   * @ngdoc directive
   * @name messageSubject
   *
   * @restrict AE
   * @image message-subject.png
   *
   * @param {object} message The message for which the subject is rendered.
   *
   * @description
   * Renders the subject for message on scope
   */
  .directive('liCommunityMessageSubject', function () {
    return {
      restrict: 'AE',
      scope: {
        message: '='
      },
      templateUrl: 'message-subject/message-subject.tpl.html',
      link: function ($scope, $element) {
        $scope.conversationStylePrefix = 'li.community.message-subject.text.' + $scope.message.conversation.style + '-prefix';
      }
    };
  });

}());
