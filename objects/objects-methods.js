//  Method is an object property whose value is a function

let restaurant = {
  name: 'CFC',
  guestCapacity: 35,
  guestCount: 0,
  checkAvailability: function (partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount
    return partySize <= seatsLeft
  },
  seatParty: function (partySize) {
    this.guestCount = this.guestCount + partySize
  },
  removeParty: function (partySize) {
    this.guestCount = this.guestCount - partySize
  },
}

restaurant.seatParty(33)
console.log(restaurant.checkAvailability(3))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(3))
