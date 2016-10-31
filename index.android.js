/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

var React = require('react-native');
var {AppRegistry} = React;

var Routers = require('./src/router.android');

AppRegistry.registerComponent('RaindropReactNative', () => Routers);
