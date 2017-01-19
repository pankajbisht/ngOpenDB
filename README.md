# What is ngOpenDB ?
ngOpenDB is a angular js module or utitlity to manage local, session, cookie in browser.

# Browser Support
The numbers in the table specify the first browser version that fully supports Local Storage.

Chrome – 4.0

Ie – 8.0

Mozila firefox – 3.5

Safari – 4.0

Opera – 11.5

#Use of local and session storage with simple example

  <!DOCTYPE html>

  <html lang="en">

  <head>

    <title>ngOpenDB</title>

    <style>

        p {

            color: red;

        }

       .span {

            color: green;

        }

    </style>

</head>

<body  ng-app="test" ng-controller="mycontroller">

    <p>{{ msg }}</p>    

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>

    <script src="app/scripts/services/ngOpenDB.js"></script>

    <script>


           var app = angular.module("test", ["ngOpenDB"]);

           app.controller("mycontroller", ["$scope", "Main", function($scope, $db) {
                // Working is a methode to find your browser support localstorage or session storage if supported then you

                will get true and otherwise false

                $db.session.set("msg", "Welcome to ngOpenDB");

                $scope.msg = $db.session.get("msg");

                console.log($db.local.has("myList"));  // true means you can work on it
            }]);


    </script>

</body>

</html>
