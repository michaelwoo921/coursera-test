(
    function(){
        'use strict';
        var shoppingList = [
            {
              name: "Milk",
              quantity: "2"
            },
            {
              name: "Donuts",
              quantity: "200"
            },
            {
              name: "Cookies",
              quantity: "300"
            },
            {
              name: "Chocolate",
              quantity: "5"
            },
            {
                name: "Bagels",
                quantity: "10"
            }
          ];

        angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

        ToBuyController.$inject = ['ShoppingListCheckOffService']
        function ToBuyController(ShoppingListCheckOffService){
            var buyList = this;
            buyList.items = ShoppingListCheckOffService.getBuyItems();
            buyList.checkOffItem = function(itemIndex){
                ShoppingListCheckOffService.removeItem(itemIndex);
            }

        }

        AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
        function AlreadyBoughtController(ShoppingListCheckOffService){
            var boughtList =  this;
            boughtList.items = ShoppingListCheckOffService.getBoughtItems();
        }


        function ShoppingListCheckOffService(){
            var service  =  this;

            var buyItems = shoppingList;
            var boughtItems = [];


              service.getBuyItems = function(){
                  return buyItems;
              }
              service.getBoughtItems = function(){
                  return boughtItems;
              }

              service.removeItem = function (itemIndex) {
                var removedItem = buyItems.splice(itemIndex, 1);
                boughtItems.push(removedItem[0]);
                
              };




        }

        
    }

)()
