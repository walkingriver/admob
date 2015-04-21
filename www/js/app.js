// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
(function () {
    angular.module('starter', ['ionic', 'ngCordova'])
        .controller('HomeController', ['$scope', '$cordovaDevice', HomeController])
        .run(startup)
        .config(config);

    function HomeController($scope, $cordovaDevice) {
        var vm = this;

        document.addEventListener('deviceready', function () {
            if ($cordovaDevice) {
                vm.cordova = $cordovaDevice.getCordova();
                vm.model = $cordovaDevice.getModel();
                vm.platform = $cordovaDevice.getPlatform();
                vm.uuid = $cordovaDevice.getUUID();
                vm.version = $cordovaDevice.getVersion();
                $scope.$apply();
            } else {
                alert('No device support!');
            }
        });
    }

    function startup($ionicPlatform) {
        $ionicPlatform.ready(function ($cordovaDevice) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }

            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    }

    function config($stateProvider) {
        console.log('config!');

        $stateProvider.state('index', {
            url: '',
            templateUrl: 'templates/home.html',
            controller: 'HomeController as vm'
        });
    }
})();
