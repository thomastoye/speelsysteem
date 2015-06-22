/*global define */


define(['angular'], function (angular) {
    angular.module('speelApp.services', ['ngResource'])
        .factory('Child', function ($resource) {
            return $resource('/api/child/:id', null, {
                'update': { method: 'PUT' }
            });
        });

});