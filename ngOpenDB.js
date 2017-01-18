/*
    Developer: Pankaj Bisht,
    Date: 31-dec-2016,
    ngOpenDB is a angular js module or utitlity to manage local, session, cookie in browser.
*/

var ngOpenDB = angular.module("ngOpenDB", []);

ngOpenDB.factory('Storage', function() {
   var factory = {};

   factory.Operation = function (storage) {
        return {
            is: function (key) {
                return this.get(key).length;
            },
            get: function (key) {
                return JSON.parse(storage.getItem(key));
            },
            set: function (key, value) {
                return storage.setItem(key, JSON.stringify(value));
            }
        };
    };

   return factory;
});


ngOpenDB.service('Main', function(Storage){
    this.local = Storage.Operation(localStorage);
    this.session = Storage.Operation(sessionStorage);
});
