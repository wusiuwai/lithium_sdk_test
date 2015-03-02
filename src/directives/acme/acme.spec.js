(function () {

  'use strict';

  describe('li-customer-acme', function () {
    var $rootScope, $compile;

    beforeEach(function () {
      module(
        'li.customer.directives.acme'
      );

      /*
      Uncomment this to mock factories.
      You may delete this comment block if you do not need to create mocks here.

      module(function ($provide) {
        $provide.factory('myFactory', function () {
          return {
            myFactoryMethod: function () {
              return 'my factory method called';
            }
          };
        });
      });
      */

      inject(function (_$rootScope_, _$compile_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
      });
    });

    it('should render content', function () {
      var element, content;

      element = $compile('<li:customer-acme></li:customer-acme>')($rootScope);
      $rootScope.$digest();
      content = element.find('.li-customer-acme');

      expect(content.text().trim()).toEqual('acme');
    });
  });

})();
