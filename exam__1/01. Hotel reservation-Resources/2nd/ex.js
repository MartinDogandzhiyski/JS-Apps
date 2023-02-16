class OnlineShop {
    constructor(space) {
        this.space = space;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (this.space >= Number(spaceRequired)) {
            this.products.push({
                product,
                quantity
            });

            this.space -= Number(spaceRequired);
            return `The ${product} has been successfully delivered in the warehouse.`
        } else {
            throw new Error("Not enough space in the warehouse.");
        }
    }

    quantityCheck(product, minimalQuantity) {
        const hasProduct = true;
        if (Number(minimalQuantity) <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }
        for (let productt of this.products){
            if (productt.product === product) {
                if (productt.quantity >= Number(minimalQuantity)){
                    return `You have enough from product ${product}.`;
                }else {
                    const difference = minimalQuantity - productt.quantity;
                    productt.quantity = Number(minimalQuantity);
                    return `You added ${difference} more from the ${product} products.`
                }

            }
        }
        throw new Error(`There is no ${product} in the warehouse.`)
        
        
    }

    sellProduct(product) {
        for (let productt of this.products){
            if (productt.product === product){
            productt.quantity -= 1;
            this.sales.push({
                product: 1
            });
            return `The ${product} has been successfully sold.`
            }
        }
        throw new Error(`There is no ${product} in the warehouse.`)
    }

    revision() {
        if (this.sales.length == 0) {
            throw new Error("There are no sales today!");
        }
        
        const result = this.products.map(c => `${c.product}-${c.quantity} more left`);
        result.unshift("Products in the warehouse:");
        result.unshift(`You sold ${this.sales.length} products today!`);
        return result.join('\n')
    }
}



const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());


 



