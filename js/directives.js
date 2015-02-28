/*
Directives
==========
peep-main
bio
stats
friends
wall
peep-info
peep-nav
message-form
*/

(function(){
	var app = angular.module('directives', []);

	app.directive("peepMain", function(){
		return{
			restrict: "E",
			templateUrl: 'html/peep-main.html'
		}
	});

	app.directive("peepInfo", function(){
		return{
			restrict: 'E',
			templateUrl: 'html/peep-info.html',
			controller: function(){
				this.panel = 0;
				this.setActive = function(setPanel){
					this.panel = setPanel;
				};
				this.isActive = function(panel){
					return panel === this.panel;
				};
			},
			controllerAs: 'panelCtrl'
		};
	});

	app.directive("peepNav", function(){
		return{
			restrict: 'E',
			templateUrl: 'html/peep-nav.html'
		};
	});
	app.directive("bio", function(){
		return{
			restrict: "E",
			templateUrl: 'html/bio.html'
		}
	});

	app.directive("stats", function(){
		return{
			restrict: "E",
			templateUrl: 'html/stats.html'
		}
	});

	app.directive("friends", function(){
		return{
			restrict: "E",
			templateUrl: 'html/friends.html'
		}
	});

	app.directive("wall", function(){
		return{
			restrict: "E",
			templateUrl: 'html/wall.html'
		}
	});

	app.directive("messageForm", function(){
		return{
			restrict: 'E',
			templateUrl: 'html/message-form.html',
			controller: function(){
				this.msg = {};
				this.newMessage = function(form, peep){
					form.$setPristine();
					if (!peep.messages) peep.messages = [];
					peep.messages.push(this.msg);
					this.msg = {};
				}
			},
			controllerAs: 'messageCtrl'
		}
	});
})();