(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "";
  $scope.msg = "";
  $scope.display = function(){
    if($scope.name.length==0)
    {$scope.msg="Please enter data first";
  }
  else{
    var item= $scope.name.split(' ');
    if (item.length<4) {
      $scope.msg = "Enjoy!"
    } else {
      $scope.msg="Too much!"
    }
  }
  }
}

})();
