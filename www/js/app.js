// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
(function () {
    angular.module('starter', ['ionic', 'ngCordova'])
        .controller('HomeController', ['$scope', '$window', '$cordovaDevice', '$cordovaGoogleAds', HomeController])
        .run(startup)
        .config(config);

    function HomeController($scope, $window, $cordovaDevice, $cordovaGoogleAds) {
        var vm = this;
        vm.deviceSupport = '';
        vm.adSupport = '';
        vm.showFullAd = showFullAd;

        var admobid = {
            banner: 'YOUR BANNER AD ID HERE',
            interstitial: 'YOUR INTERSTITIAL AD ID HERE'
        };

        document.addEventListener('deviceready', function () {
            if ($cordovaDevice) {
                vm.cordova = $cordovaDevice.getCordova();
                vm.model = $cordovaDevice.getModel();
                vm.platform = $cordovaDevice.getPlatform();
                vm.version = $cordovaDevice.getVersion();
            } else {
                vm.deviceSupport = 'No device support!';
            }

            if ($cordovaGoogleAds) {
                setupAds();
            } else {
                vm.adSupport = 'No ad support';
            }

            $scope.$apply();
        });

        function setupAds() {
            vm.adSupport = 'Ads are supported';

            try {
                $cordovaGoogleAds.createBanner({
                    adId: admobid.banner,
                    position: $window.AdMob.AD_POSITION.BOTTOM_CENTER,
                    isTesting: false,
                    autoShow: true
                });

                $cordovaGoogleAds.prepareInterstitial({
                    adId: admobid.interstitial,
                    isTesting: false,
                    autoShow: false
                });
            } catch (e) {
                alert(e);
            }
        }

        function showFullAd() {
            try {
                if (vm.adSupport) {
                    $cordovaGoogleAds.showInterstitial()
                        .then(function () {
                            $cordovaGoogleAds.prepareInterstitial({
                                adId: admobid.interstitial,
                                autoShow: false
                            });
                        });
                } else {
                    alert('No Ads!');
                }
            } catch (e) {
                alert(e);
            }
        }
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
