var myProjects = angular.module('projects', []);

myProjects.controller('ProjectsCtrl', ['$scope', function ($scope) {
  $scope.projects = [
    {'title': 'German Strong Verbs',
	 'short': 'sgv',
	 'time': '2012',
     'overview': "This was first experiment in the world of iOS application creation. I started as a total novice, but came to learn XCode, objective-C, interface builder / story board, Gimp, and all the various tasks of actually releasing an app to the Apple App Store.",
	 'detail': "When you start to learn a new language, like German, you start to get comfortable with the rules and conjugations… and then you hit ‘exceptions’.  One of the most frustrating parts of learning a new language is the exceptions!  They defy the previously learned rules at their will with seemingly no pattern! Ahh!  Strong German Verbs provides a friendly, straight forward reference for over 150 of the commonly used irregular (strong) verbs.",
	 'headers': ["Over 150 irregular verbs!", "All cases and tenses!", "Search feature for fast verb finding!"],
	 'image': ["img/gsv/iphone_ss1.png", "img/gsv/iphone_ss2.png", "img/gsv/iphone_ss3.png"],
	 'link': "https://itunes.apple.com/app/german-strong-verbs/id598672329?mt=8&ign-mpt=uo%3D2"
	 },
    {'title': 'Math Dash',
	 'short': 'md',
	 'time': '2015',
     'overview': "A game to awaken your brain by solving basic math problems as quickly as possible.", 
	 'details': "blah blah blah stuff"
	 }
  ];
  
  $scope.jobs = [
	{'company': 'bwin.party',
	 'website': 'http://www.bwinparty.com/',
	 'location': 'Veinna, Austria',
	 'roles': [{'title': 'Business Analyst', 'startdate': 'September 2013', 'enddate': 'current', 'details': 'Creating technical requirements based on business / customer desires.  Serve as connection between business and software development.  Coordinate and prioritize development backlog.'}]
	 },
	{'company': 'Cummins Inc.',
	 'website': 'http://www.cummins.com/',
	 'location': 'Columbus IN, USA',
	 'roles': [	{'title': 'Project Manager', 'startdate': 'February 2012', 'enddate': 'August 2013', 'details': 'Managed a cross functional team through the new product development process for a new engine platform with a NPV of greater than $50 million USD.'}, 
				{'title': 'Customer Integration Engineer', 'startdate': 'February 2011', 'enddate': 'February 2012', 'details': 'Managed mechanical development work on engine components interacting with customer’s vehicle.  Includes designing changes to components using CAD and working with suppliers to resolve issues during development.'}, 
				{'title': 'Competitive Intelligence Manager & Market Analyst', 'startdate': 'August 2008', 'enddate': 'February 2011', 'details': 'Monitored competitor actions and analyze potential impact to company and market.  Local expert of automotive marketplace for engines less than 7 liters.  Analyzed market data to identify market gaps and sales opportunities.'}]
	 },
	{'company': 'Central Bank',
	 'website': 'http://www.centralbank.com/', 
	 'location': 'Lexington KY, USA',
	 'roles': [	{'title': 'MBA Intern - Consultant', 'startdate': 'October 2007', 'enddate': 'April 2008', 'details': 'Part of a MBA student team that completed projects assigned from executive board on NPD, Supply chain, and M&A.  I was responsible to lead the supply chain project.'}]
	 },
	{'company': 'Lexmark International',
	 'website': 'http://www.lexmark.com/',
	 'location': 'Lexington KY, USA',
	 'roles': [	{'title': 'Hardware Engineering Student Intern', 'startdate': 'March 2007', 'enddate': 'July 2007', 'details': 'Performed design engineering and mechanical development engineering tasks on hardware components for new laser printer program.'}]
	 },
	{'company': 'GE Consumer & Industrial',
	 'website': 'http://www.geconsumerandindustrial.com/',
	 'location': 'Louisville KY, USA',
	 'roles': [	{'title': 'Engineering Co-op', 'startdate': 'August 2004', 'enddate': 'June 2005', 'details': 'Completed three rotations in the areas of Supply Chain Management, New Product Introduction, and Innovations.'}]
	 }
  ];
  
  $scope.schools = [
    {'university': 'University of Kentucky – Gatton College of Business & Economics',
	 'website': 'http://gatton.uky.edu/MBA/',
	 'location': 'Lexington KY, USA',
	 'startdate': 'July 2007',
	 'enddate': 'July 2008',
     'degree': 'Master of Business Administration (MBA)',
	 'gpa': 3.9
	 },
    {'university': 'University of Kentucky – College of Engineering',
	 'website': 'https://www.engr.uky.edu/',
	 'location': 'Lexington KY, USA',
	 'startdate': 'September 2002',
	 'enddate': 'May 2007',
     'degree': 'Bachelor of Science in Mechanical Engineering',
	 'gpa': 3.6
	 },
	 {'university': 'Danish Institute for Study Abroad (DIS)',
	 'website': 'http://www.disabroad.org/study-abroad-summer/',
	 'location': 'Copenhagen, Denmark',
	 'startdate': '13 June 2008',
	 'enddate': '3 July 2008',
     'degree': 'European Business Strategy',
	 'gpa': ''
	 },
	 {'university': 'Wirtschaftsuniversität Wien - International Summer University',
	 'website': 'http://www.wu.ac.at/io/incoming/isuwuin/en/',
	 'location': 'Vienna, Austria',
	 'startdate': '7 July 2008',
	 'enddate': '25 July 2008',
     'degree': 'Intercultural Management, Marketing & Corporate Governance',
	 'gpa': ''
	 }
  ];
  
}]);

myProjects.directive('tabs',function() {
	return {
      restrict: 'E',
      transclude: true,
      scope: {},
      controller: function($scope, $element) {
        var panes = $scope.panes = [];
 
        $scope.select = function(pane) {
          angular.forEach(panes, function(pane) {
            pane.selected = false;
          });
          pane.selected = true;
        }
 
        this.addPane = function(pane) {
          if (panes.length == 0) $scope.select(pane);
          panes.push(pane);
        }
      },
      template:
        '<div class="tabbable">' +
          '<ul class="nav nav-tabs">' +
            '<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">'+
              '<a href="" ng-click="select(pane)">{{pane.title}}</a>' +
            '</li>' +
          '</ul>' +
          '<div class="tab-content" ng-transclude></div>' +
        '</div>',
      replace: true
    };
  });
 
myProjects.directive('pane', function() {
    return {
      require: '^tabs',
      restrict: 'E',
      transclude: true,
      scope: { title: '@' },
      link: function(scope, element, attrs, tabsCtrl) {
        tabsCtrl.addPane(scope);
      },
      template:
        '<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' +
        '</div>',
      replace: true
    };
  });
  
 myProjects.config(function($routeProvider) {
	$routeProvider
		.when('/', {
                templateUrl : 'partials/overview.html',
                controller  : 'ProjectsCtrl'
		})

            // route for the sgv page
        .when('/sgv', {
                templateUrl : 'partials/sgv.html',
                controller  : 'ProjectsCtrl'
        })

            // route for the MD page
        .when('/mathdash', {
                templateUrl : 'partials/mathdash.html',
                controller  : 'ProjectsCtrl'
        });
});