'use strict';

angular.module('engManasvi.version', [
  'engManasvi.version.interpolate-filter',
  'engManasvi.version.version-directive'
])

.value('version', '0.1');
