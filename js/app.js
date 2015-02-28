(function(){
	var app = angular.module("peepsApp", ['directives']);

	app.controller("PeepController", ['$http', function(http){
		var peepsCtrl = this;
		peepsCtrl.peeps = [];

		http.get('./data.json').success(function(data){
			peepsCtrl.peeps = data;
		});
	}]);

})();