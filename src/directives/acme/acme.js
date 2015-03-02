(function () {

  'use strict';

  angular.module('li.customer.directives.acme', [
    // If you don't need the template for this directive delete this line
    'templates-li.customer'
  ])

  /**
   * @ngdoc directive
   * @name li.customer.directives:acme
   * @author alex.wu
   *
   * @restrict AE
   *
   * @description
   * Add description here
   *
   */
  .directive('liCustomerAcme', function () {
    return {
      restrict: 'AE',
      templateUrl: 'acme/acme.tpl.html'
    };
  });

}());
