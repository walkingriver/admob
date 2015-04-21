# AdMob 
The application will be used to demonstrate both banner and interstitial (full-page) ads in a simple cross-device 
project using the [Ionic Framework](http://ionicframework.com/). 
Suggestions and Pull Requests are welcome.

## Quick Start

1. Register with Google AdMob and create at least one of each type of ad. 
1. Record your Ad unit ID for each.
1. Clone this repository.
1. Run `npm install && bower install` to get all necessary depenencies.
1. Restore the plugins with `ionic state restore`.
1. Add a platform. `ionic platform add ios` or `ionic platform add android`.
1. Edit www/js/app.js (lines 18-19) with your Ad Unit IDs.
1. Save all
1. Run the project on your device or emulator `ionic run ios` or `ionic run android`

## Prerequisites
To build and run this demo, you must already have installed:

 * npm
 * bower
 * Ionic Framework 1.0rc+
 * Cordova 3.7+
 * At least one platform (iOS or Android):
     * Android SDK or
     * Xcode 6.x
 
## Primary Goals
When complete the application should meet the following goals and objectives:

 * Run on Android and iPhone.
 * Display banner ads from Google AdMob.
 * Display interstitial (full-page) ads from Google AdMob.
 * Make use of the ngCordova plugins.

## Secondary Goals
This app was put together in an afternoon, with little to no regard to good project structure. Some of the enhancements
I would like to see are:

 * Pull the Ad unit ID values from a configuration file.
 * Automatically support ads for iOS and Android. Right now it only supports a single platform,
 whichever your Ad unit ID targets.
 * Conform to [John Papa's Angular Style Guide](https://github.com/johnpapa/angular-styleguide).
 
