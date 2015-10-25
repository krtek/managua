'use strict';

/**
 * @ngdoc function
 * @name managuaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the managuaApp
 */
angular.module('managuaApp')
  .controller('MainCtrl', function ($scope, $timeout) {
    moment.locale('cs');

    var tick = function() {
      var departure = moment("201511130855", "YYYYMMDDHHmm");
      var now = moment();

      if (departure.isBefore(now)) {
        $scope.display = false;
          return;
      }

      $scope.display = true;

      $scope.days = departure.diff(now, 'days');
      now.add($scope.days, 'days');
      $scope.hours = departure.diff(now, 'hours');

      if ($scope.hours < 10) {
        $scope.hours = '0' + $scope.hours;
      }
      now.add($scope.hours, 'hours');
      $scope.minutes = departure.diff(now, 'minutes');

      if ($scope.minutes < 10) {
        $scope.minutes = '0' + $scope.minutes;
      }
      now.add($scope.minutes, 'minutes');

      $scope.seconds = departure.diff(now, 'seconds');
      if ($scope.seconds < 10) {
        $scope.seconds = '0' + $scope.seconds;
      }
      now.add($scope.seconds, 'seconds');

      $scope.millis = departure.diff(now, 'millis');
      if ($scope.millis < 100) {
        $scope.millis = '0' + $scope.millis;
      }

      $timeout(tick, 100);
    };

    tick();
  });
