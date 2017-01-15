var totalPrice = this.price;
dpd.items.get({id: {$ne: this.price}, creator: me && me.id}, function(products) {
    products.forEach(function(product) {
        totalPrice += product.price
    })
    if(totalPrice > 1000) {
        error('price', 'Max total price 1000!');
    }
})