/*
    Developer: Pankaj Bisht,
    Date: 31-dec-2016,
    ngOpenDB is a angular js module or utitlity to manage local, session, cookie in browser.
*/

var ngOpenDB = angular.module("ngOpenDB", []);

ngOpenDB.factory('Storage', function() {
   var factory = {};

   factory.Operation = function (storage) {
       var get, set, has, remove, clean, parse, string, setJSON, getJSON,
       trim, count, trim, key, setMore, removeMore, getMore, counter, resetCounter,
       keys, getVLStartWith, getOBStartWith, entire;

       get = function (key) {
           return storage.getItem(key);
       };

       set = function (key, value) {
           storage.setItem(key, value);
       };

       has = function (key) {
           return !!storage.getItem(key);
       };

       remove = function (key) {
           return storage.removeItem(key);
       };

       clean = function () {
           storage.clear();
       };

       parse = function (obj) {
           return JSON.parse(obj);
       };

       string = function (obj) {
           return JSON.stringify(obj);
       };

       setJSON = function (key, obj) {
           this.set(key, this.string(obj));
       };

       getJSON = function (key) {
           return this.parse(this.get(key));
       };

       trim = function (key) {
           return this.get(key).replace(/(^\s*)|(\s*$)/g, "");;
       };

       count = function () {
           return storage.length;
       };

       key = function (i) {
           return storage.key(i);
       };

       setMore = function (obj) {
           var len = Object.keys(obj).length, i = 0, keys = Object.keys(obj),
                   child = MyError;

           child.isValid(obj, "object");

           while (len--) {
               this.set(keys[i], obj[keys[i]]);
               i++;
           }

           return true;
       };

       removeMore = function (coll) {
           var len = coll.length, i = 0, arr = [],
               child = MyError;


           child.isValid(coll, "array");

           while(len--) {
               this.remove(coll[i]);
               i++;
           }

           return true;
       };

       getMore = function (coll) {
           var len = coll.length, i = 0, arr = [],
               child = MyError;

           child.isValid(coll, "array");

           while(len--) {
               arr.push(this.get(coll[i]));
               i++;
           }

           return arr;
       };

       counter = function () {
           var get = parseInt(this.get("counter"));
           var val = get ? get : 0;

           this.set("counter", ++val);
           return parseInt(this.get("counter"));
       };

       resetCounter = function () {
           this.remove("counter");
       };

       keys = function () {
           var len = storage.length, arr = [];

           for (var i = 0; i < len; i++) {
               arr.push(storage.key(i));
           };

           return arr;
       };

       getVLStartWith = function (str, start, end) {
           var len = this.count(), i = 0, arr = [];

           while (len--) {

               var key = this.key(i); //here

               if (key.substring(start, end) === str) {
                   arr.push(this.get(key)); //here
               }

               i++;
           }

           return arr;
       };

       getOBStartWith = function (str, start, end) {
           var len = this.count(), i = 0, obj = {};

           while (len--) {

               var key = this.key(i); //here

               if (key.substring(start, end) === str) {
                   obj[key] = key;
                   obj[key] = this.get(key); //here
               }

               i++;
           }

           return obj;
       };

       entire = function (str, start, end) {
           var len = this.count(), i = 0, obj = {};

           while (len--) {

               var key = this.key(i); //here

               obj[key] = key;
               obj[key] = this.get(key); //here
               i++;
           }

           return obj;
       };

       return {
           get: get,
           set: set,
           has: has,
           remove: remove,
           clean: clean,
           parse: parse,
           string: string,
           setJSON: setJSON,
           getJSON: getJSON,
           count: count,
           trim: trim,
           key: key,
           setMore: setMore,
           removeMore: removeMore,
           getMore: getMore,
           counter: counter,
           resetCounter: resetCounter,
           keys: keys,
           getVLStartWith: getVLStartWith,
           getOBStartWith: getOBStartWith,
           entire: entire
       };
    };

   return factory;
});


ngOpenDB.service('Main', function(Storage){
    this.local = Storage.Operation(localStorage);
    this.session = Storage.Operation(sessionStorage);
});
