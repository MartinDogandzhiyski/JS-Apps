class WineSelection {
    constructor(space) {
        this.space = space;
        this.winesArr = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (Number(this.space) == this.winesArr.length) {
            throw new Error('Not enough space in the cellar.');
        }

        this.winesArr.push({
            wineName,
            wineType,
            price,
            paid: false
        });
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }

    payWineBottle(wineName, price) {
        for (let wine of this.winesArr) {
            if (wine.wineName == wineName) {
                if (wine.paid === true) {
                    throw new Error(`${wineName} has already been paid.`)
                }else {
                    wine.paid = true;
                    this.bill += Number(price);
                    return `You bought a ${wineName} for a ${price}$.`
                }
            }
        }
        throw new Error(`${wineName} is not in the cellar.`);
    }

    openBottle(wineName) {
        for (let wine of this.winesArr) {
            if (wine.wineName == wineName) {
                if (!wine.paid) {
                    throw new Error(`${wineName} need to be paid before open the bottle.`)
                } else {
                    const index = this.winesArr.indexOf(wine);
                    this.winesArr.slice(index, 1);
                    return `You drank a bottle of ${wineName}.`
                }
            }
        }
        throw new Error("The wine, you're looking for, is not found.");
    }

    cellarRevision(wineType) {
        if (wineType) {
            for (let wine of this.winesArr) {
                if (wine.wineType == wineType) {
                    let paid = '';
                    if (wine.paid) {
                        paid = 'Has Paid'
                    }else {
                        paid = 'Not Paid';
                    }
                    return `${wine.wineName} > ${wineType} - ${paid}.`
                    
                }
            }
        }
        if (this.winesArr.length > 0){
        this.winesArr.sort((a, b) => 
            a.wineName.localeCompare(b.wineName));

        const result = this.winesArr.map(c => `${c.wineName} > ${c.wineType} - ${c.paid ? "Has Paid" : "Not Paid"}.`)
        result.unshift(`You paid ${this.bill}$ for the wine.`)
        result.unshift(`You have space for ${ this.space - this.winesArr.length } bottles more.`)
        return result.join('\n');
        }
        throw new Error(`There is no ${wineType} in the cellar.`)

}
}


const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());









