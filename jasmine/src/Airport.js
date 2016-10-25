var Airport = function() {
  this.terminal = []
}

Airport.prototype.landPlane = function (plane) {
  this.terminal.push(plane)
};

Airport.prototype.terminal = function () {
  return this.terminal
};

Airport.prototype.takeOff = function (plane) {
  this.terminal.pop(plane)
};
