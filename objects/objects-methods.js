//  Method is an object property whose value is a function

let restaurant = {
  name: 'CFC',
  guestCapacity: 35,
  guestCount: 0,
  checkAvailability(partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount
    return partySize <= seatsLeft
  },
  seatParty(partySize) {
    this.guestCount = this.guestCount + partySize
  },
  removeParty(partySize) {
    this.guestCount = this.guestCount - partySize
  },
}

restaurant.seatParty(33)
console.log(restaurant.checkAvailability(3))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(3))
