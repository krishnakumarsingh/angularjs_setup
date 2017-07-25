
/* @ngInject */
function Router($stateProvider, $urlRouterProvider) {
   $urlRouterProvider.otherwise("/");
    var header = {
      templateUrl: "<h1>Header</h1>",
      controller: "HeaderCtrl as header"

    }
     var footer = {
      template: "<h1>Footer</h1>",
      controller: "FooterCtrl as footer"

    }
   $stateProvider
       .state('home', {
           url: "/",
           views: {
                header: header,
                content: {
                   controller : "HomeCtrl as home",
                   template: "<h1>Home</h1>"
                },
                footer: footer
            }
       })
       .state('shop', {
           url: "/shop",
           views: {
                header: header,
                content: {
                   controller : "ShopCtrl as shop",
                   template: "<h1>Shop</h1>"
                },
                footer: footer
            }
       });
}

Router.$inject = ['$stateProvider', '$urlRouterProvider'];

export { Router }
