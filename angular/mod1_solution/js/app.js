(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){

    $scope.items = "";
    $scope.message ="";

    $scope.displayMessage = function(){
        var results = $scope.items.split(',')
        var netResults = [];
        for(var i=0;i<results.length; i++){
            if (results[i].trim() !== ''){
                netResults.push(results[i].trim())
            }
        }
        if(netResults.length === 0){
            $scope.message = "Please enter data first";
        }   
        if(netResults.length >=1 && netResults.length <=3) {
            $scope.message = "Enjoy!";
        }
        if(netResults.length > 3){
            $scope.message = "Too much!"
        }
        
    }

 


}

})();
