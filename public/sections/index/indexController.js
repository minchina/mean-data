var todoapp = angular.module("toDoApp");
todoapp.controller("IndexController", function($scope, $log, $state, application){
    var vm = this;
    vm.staticText = "HOME PAGE";
    vm.id=1;
    vm.application = application;

    $log.warn("broker id is:" + vm.application());

});

todoapp.factory('fetchData',['$window', '$http', function($scope, $http){
    return function(generateChart){
        $http.post('/api/comparison', {msg:123}).
            then(function(response) {

                generateChart(response.data);

            }, function(response) {
                console.log(response);
                return "";
            });
    }
}]);