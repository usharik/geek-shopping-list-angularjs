let ShoppingListApp = angular.module('ShoppingListApp', []);

ShoppingListApp.controller('ShoppingListController', function ($scope, $http) {

    $http.get("api/v1/item/all")
        .then(resp => {
                $scope.shoppingItemList = resp.data;
            },
            resp => {
                console.error(resp);
            });

    $scope.name = '';

    $scope.create = function (name) {

        $http.post("api/v1/item", {'name': name})
            .then(resp => {
                    $scope.shoppingItemList.push(resp.data);
                },
                resp => {
                    console.error(resp);
                });

        $scope.name = '';
    }

    $scope.delete = function (item) {
        $http.delete("api/v1/item/" + item.id)
            .then(resp => {
                    let ix = $scope.shoppingItemList.map(item => item.id).indexOf(item.id);
                    $scope.shoppingItemList.splice(ix, 1);
                },
                resp => {
                    console.error(resp);
                });
    }

})