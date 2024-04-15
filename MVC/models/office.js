// models/Office.js

class Office {
    constructor(address, squareFootage, capacity, access, price) {
        this.address = address;
        this.squareFootage = squareFootage;
        this.capacity = capacity;
        this.access = access;
        this.price = price;
    }
}

module.exports = Office;
