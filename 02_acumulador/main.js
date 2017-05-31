class AcumuladorCtrl {
       
    $onInit () {
        this.incremento = 10;
        this.total = this.incremento;
    }
    sumar (){
        this.total += parseInt($scope.incremento)
    }
    restar (){
        this.total -= parseInt($scope.incremento)
    }
}



angular.module("acumulador", [])
.controller("AcumuladorCtrl", ['$scope', function($scope){
    $scope.incremento = 10;
    $scope.total = $scope.incremento;

	$scope.sumar = function(){;
			$scope.total += parseInt($scope.incremento);
	}
	$scope.restar = function(){
			$scope.total -= parseInt($scope.incremento);
	}			
}])



