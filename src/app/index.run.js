(function() {
  'use strict';

  angular
    .module('demonpmbower')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
