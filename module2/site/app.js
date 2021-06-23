(function(){
  angular.module("myApp", [])
  .controller("ToBuyShoppingController", ToBuyShoppingController)
  .controller("AlreadyBoughtController", AlreadyBoughtController)
  .service("ShoppingListService", ShoppingListService)

  // ToBuyShoppingController.$inject= ['ShoppingListService'];
  // function ToBuyShoppingController(ShopppingListService){
  //   var shoppingList = this;
  //   shoppingList.items = ShoppingListService.buyListItems();
  //   shoppingList.buyItem= function(index){
  //     ShoppingListService.buyItem(index);
  //
  //   }
  //
  // }

  ToBuyShoppingController.$inject = ['ShoppingListService'];
  function ToBuyShoppingController(ShoppingListService){
    var shoppingList = this;
    shoppingList.items = ShoppingListService.buyListItems();
    shoppingList.buyItem = function(index){
      ShoppingListService.buyItem(index);
    }
  }

  AlreadyBoughtController.$inject=['ShoppingListService']
  function AlreadyBoughtController(ShoppingListService){
    var toBought = this;
    toBought.items = ShoppingListService.alreadyBoughtItem();
  }

  function ShoppingListService(){
    var service = this;
    var buyList = [
    {name: "apple", quantity: 10},
    {name: "mango", quantity: 15},
    {name: "banana", quantity: 20},
    {name: "orange", quantity: 40},
    {name: "guava", quantity: 15},
    {name: "litchi", quantity: 25}
    ]
    var alreadyBought =[];


    service.buyItem = function(index){
      var items = buyList[index];
      alreadyBought.push(items);
      buyList.splice(index,1);
    }

  service.buyListItems = function(){
    return buyList;
  }


  service.alreadyBoughtItem= function(){

      return alreadyBought;
  }


  }


})()
