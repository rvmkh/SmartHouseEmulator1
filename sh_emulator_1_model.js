"use strict";

/**************************** Devices Parent *******************************************/

function PowerSwitch(devname) {
  this._devname = devname;
  this._state = false;
}
PowerSwitch.prototype.getdevname = function() {
  return devname;
}
PowerSwitch.prototype.setdevname = function() {
  this._devname = devname;
}
PowerSwitch.prototype.on = function() {
  this._state = true;
}
PowerSwitch.prototype.off = function() {
  this._state = false;
}
PowerSwitch.prototype.status = function() {
  console.log("Device name: " + this._devname);
  console.log("Power state: " + this._state + "\n\n");
}

/**************************** New Devices Model *******************************************/

function NewDevice(devname) {
  PowerSwitch.call(this, devname);
  this._k = 0;
  this._devarr = [];
}
NewDevice.prototype = Object.create(PowerSwitch.prototype);
NewDevice.prototype.constructor = NewDevice;
NewDevice.prototype.create = function() {
  this._devarr[this._k] = new PowerSwitch(devname);
  this._k++;
}
NewDevice.prototype.remove = function() {
  this._devarr.splice(this._devarr.length-1);                                   // delete last dev in the dev-arr
}








//
