(function () {

  'use strict';

  angular.module('li.community.directives.message-post-time', [
    'templates-li.community'
  ])

  /**
   * @module community
   * @ngdoc directive
   * @name messagePostTime
   *
   * @restrict AE
   * @image message-post-time.png
   *
   * @param {object} message The message for which the kudo count will be displayed.
   *
   * @description
   * Renders the post time for message on scope.
   */
  .directive('liCommunityMessagePostTime', function () {
    return {
      restrict: 'AE',
      scope: {
        message: '='
      },
      templateUrl: 'message-post-time/message-post-time.tpl.html'
    };
  });

}());
