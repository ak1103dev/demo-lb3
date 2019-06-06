'use strict';

module.exports = function(Appuser) {
  Appuser.prototype.getFullName = async function(prefix) {
    try {
      return 'name';
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
