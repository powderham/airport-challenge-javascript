var Airport = function() {
  this.terminal = []
  this.CAPACITY = 20
  this.weather = new Weather();
}

Airport.prototype.landPlane = function (plane) {
  if (this.terminal.length >= this.CAPACITY) {
      throw 'Airport is full'
  };
  if (this.terminal.includes(plane)) {
      throw 'Plane is already in the airport'
  };
  if (this.weather.stormyWeather === true) {
      throw 'Cannot land during stormy weather'
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
