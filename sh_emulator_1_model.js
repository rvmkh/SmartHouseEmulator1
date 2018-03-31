"use strict";

/**************************** Devices Parent *******************************************/

function PowerSwitch(devname) {
  this._devname = devname;
  this._state = false;
}
PowerSwitch.prototype.on = function() {
  this._state = true;
}
PowerSwitch.prototype.off = function() {
  this._state = false;
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

/**************************** TVset Model *******************************************/

function TVset() {
  PowerSwitch.call(this);
  this._chnl1 = "http://sputniktv.in.ua/inter.html";
  this._chnl2 = "http://sputniktv.in.ua/k1-tv.html";
  this._chnl3 = "http://sputniktv.in.ua/ictv.html";
  this._chlist = [];
}
TVset.prototype = Object.create(PowerSwitch.prototype);
TVset.prototype.constructor = TVset;
TVset.prototype.sleep = function() {
    setTimeout(
      function(){
        console.log("\nTV slept after 3 sec...\n");
        document.getElementById("TVset1").style.backgroundColor = "lightgray";
      },
      3000
    );
}
TVset.prototype.getchnlist = function() {
  this._chlist[0] = this._chnl1;
  this._chlist[1] = this._chnl2;
  this._chlist[2] = this._chnl3;
  return this._chlist;
}

/**************************** Condey Model *******************************************/

function Condey(temper) {
  PowerSwitch.call(this);
  this._temper = temper;
}
Condey.prototype = Object.create(PowerSwitch.prototype);
Condey.prototype.constructor = Condey;
Condey.prototype.settemper = function() {
  return this._temper;
}








//
