var todoapp = angular.module("toDoApp");
todoapp.controller("ToDoController", function($scope, fetchData){
    console.log(12313);
    $scope.linesColors = ['#00ff00', '#ff0000'];
    $scope.isShow = false;
    $scope.chartData ={};


    var dialogConfig = {
        autoOpen:false,
        title:"dialog title",
        width:800,
        minHeight:400,
        dialogClass:"noTitleStuff"
    };


    $scope.showDialog = function(){
        var $dialogElement = $("#projectDialog");
        $dialogElement.dialog(dialogConfig);
        $dialogElement.dialog('open');
        $scope.isShow = true;
    };



    $scope.generateChart = function (data){
        return new Morris.Line({
            element: 'myfirstchart',
            data: data,
            resize: true,
            //lineColors:linesColors,
            xkey: 'year',
            ykeys: ['value1', 'value2'],
            labels: ['time1', 'time2']
        });
    };
    $scope.showChart = function(){
        fetchData($scope.generateChart);
    };

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