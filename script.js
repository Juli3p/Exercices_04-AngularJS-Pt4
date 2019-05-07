var carApp = angular.module('carApp', []);
carApp.controller('carCtrl', function ($http, $scope) {
        // On récupếre le fichier voiture.json
        $http.get('voiture.json')
                .then(function (reponse) {
                    $scope.marques = reponse.data;
                });
});
