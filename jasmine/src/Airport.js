var Airport = function() {
  this.terminal = []
  this.CAPACITY = 20
}

Airport.prototype.landPlane = function (plane) {
  if (this.terminal.length >= this.CAPACITY) {
      throw 'Airport is full'
  };
  this.terminal.push(plane);
};

// Airport.prototype.terminal = function () {
//   return this.terminal
// };

Airport.prototype.takeOff = function (plane) {
  if (!this.terminal.includes(plane)) {
    throw 'Plane not in airport'
  };
  this.terminal.pop(plane);
};
