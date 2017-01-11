var app = angular.module('app', []) // creating the angular module so I can eventually pull things out of it
app.factory('productFactory', ['$http', function($http) { // Creating factory
    var factory = {};
    var products = [];
    factory.index = function(callback){
        callback(products);
    }
    factory.create = function(product, callback){
        if(product.price && Number(parseFloat(product.price))==product.price){
            products.push(product);
            callback(products);
        }
    }
    factory.delete = function(id, callback){
        products.splice(id,1);
        callback(products);
    }
    return factory;
}]);

app.controller('productController', ['$scope', 'productFactory'])
