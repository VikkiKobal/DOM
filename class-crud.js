class AuctionItems {
    constructor(name, startDate, endDate, startPrice, endPrice) {
        this._id = Math.floor(Math.random() * 100);
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.startPrice = startPrice;
        this.endPrice = endPrice;
    }

    get id() {
        return this._id;
    }

    toString() {
        return `Name: ${this.name}, id: ${this.id}, start price: ${this.startPrice}, end price: ${this.endPrice}`;
    }
}

class Auction {
    constructor() {
        this.items = [];
    }

    add(lot) {
        if (!(lot instanceof AuctionItems))
            throw `${lot} is not an instance of AuctionItems class`;
        if (this.items.some(i => i.id == lot.id)) {
            throw `An item with id ${lot.id} already exists`;
        }
        this.items.push(lot);
    }

    getById(id) {
        return this.items.find(item => item.id == id);
    }

    getByName(name) {
        return this.items.find(item => item.name == name);
    }

    getByDateAndPrice(date, maxPrice) {
        return this.items.filter(item => item.startDate == date && item.startPrice <= maxPrice);
    }

    update(id, updatedItem) {
        let index = this.items.findIndex(item => item.id == id);
        if (index !== -1) {
            this.items[index] = updatedItem;
        }
    }

    remove(id) {
        let index = this.items.findIndex(item => item.id == id);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
}
