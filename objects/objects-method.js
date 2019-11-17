let restaurant = {
    name: 'District',
    guestCapacity: 75,
    guestCount: 0,
    // method inside object
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    // methods seatParty(value)
    // removeParty(value)
    seatParty: function (value) {
        this.guestCount += value
    },
    removeParty: function (value) {
        this.guestCount -= value
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))
