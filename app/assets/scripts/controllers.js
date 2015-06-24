/*global define */

define(function () {
    var controllers = {};

    controllers.MainCtrl = function ($scope, $mdToast, Child) {
        $scope.children = Child.query();
    };

    controllers.ChildDetailsCtrl = function ($scope, $stateParams, $mdToast, $state, Child) {
        $scope.actionName = "Opslaan";

        $scope.save = function () {
            Child.update($scope.selectedChild, function () {
                $mdToast.show($mdToast.simple().content("Kind opgeslagen"));
                $state.go('child.details', { id: $scope.selectedChild.id });
            }, function () {
                $mdToast.show($mdToast.simple().content("Kon kind niet opslaan"));
            });
        };
        $scope.selectedChild = Child.get({id: $stateParams.id});
    };

    controllers.ChildListCtrl = function ($scope, $state, Child) {
        $scope.children = Child.query();

        $scope.create = function() {
            $state.go('child.new');
        };

        $scope.refresh = function() {
            $scope.children = Child.query();
        };
    };

    controllers.NewChildCtrl = function ($scope, $mdToast, $state, Child) {
        $scope.actionName = "Aanmaken";
        $scope.selectedChild = {};
        $scope.save = function () {
            Child.save($scope.selectedChild, function () {
                $mdToast.show($mdToast.simple().content("Kind aangemaakt"));
                $scope.refresh();
                $state.go('child');
            }, function () {
                $mdToast.show($mdToast.simple().content("Kon kind niet aanmaken"));
            });
        };
    };

    controllers.VolunteerDetailsCtrl = function ($scope, $stateParams, $mdToast, $state, Volunteer) {
        $scope.actionName = "Opslaan";

        $scope.save = function () {
            Volunteer.update($scope.selectedVolunteer, function () {
                $mdToast.show($mdToast.simple().content("Animator opgeslagen"));
                $state.go('volunteer.details', { id: $scope.selectedVolunteer.id });
            }, function () {
                $mdToast.show($mdToast.simple().content("Kon animator niet opslaan"));
            });
        };
        $scope.selectedVolunteer = Volunteer.get({id: $stateParams.id});
    };

    controllers.VolunteerListCtrl = function ($scope, $state, Volunteer) {
        $scope.volunteers = Volunteer.query();

        $scope.create = function() {
            $state.go('volunteer.new');
        };

        $scope.refresh = function() {
            $scope.volunteers = Volunteer.query();
        };
    };

    controllers.NewVolunteerCtrl = function ($scope, $mdToast, $state, Volunteer) {
        $scope.actionName = "Aanmaken";
        $scope.selectedVolunteer = {};
        $scope.save = function () {
            Volunteer.save($scope.selectedVolunteer, function () {
                $mdToast.show($mdToast.simple().content("Animator aangemaakt"));
                $state.go('volunteer');
            }, function () {
                $mdToast.show($mdToast.simple().content("Kon animator niet aanmaken"));
            });
        };
    };

    controllers.HomeCtrl = function ($scope) {

    };

    return controllers;
});
