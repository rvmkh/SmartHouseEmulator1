"use strict";

/** Draw TVset **/
var tvset1 = new TVset();

var table = document.createElement("table");
table.id = "TVset1";
table.style.backgroundColor = "lightgray";
table.align = "justify";
table.innerHTML = "<b>&nbsp&nbsp&nbsp&nbspTVset1&nbsp&nbsp&nbsp&nbsp</b>";
table.style.width = "500px";
table.style.height = "250px";
table.style.border = "thick solid #0000FF";
document.body.appendChild(table);

var parentElem = document.getElementById(table.id);
var row = document.createElement("row");
row.id = "myrow";
parentElem.appendChild(row);

parentElem = document.getElementById(row.id);
var cell = document.createElement("cell");
cell.id = "mycell";
parentElem.appendChild(cell);

parentElem = document.getElementById(cell.id);
var tvonoff = document.createElement("input");
tvonoff.id = "tvonoff";
tvonoff.type = "submit";
tvonoff.value = "On / Off";
parentElem.appendChild(tvonoff);

parentElem = document.getElementById(cell.id);
var sleepbut = document.createElement("input");
sleepbut.id = "mysleep";
sleepbut.type = "submit";
sleepbut.value = "Sleep after 3 sec";
parentElem.appendChild(sleepbut);

parentElem = document.getElementById(cell.id);
var chnlistbut = document.createElement("input");
chnlistbut.id = "chnlist";
chnlistbut.type = "submit";
chnlistbut.value = "Channel List";
parentElem.appendChild(chnlistbut);

document.getElementById("tvonoff").onclick = function() {
  if ( tvset1._state === true ) {
     tvset1.off();
     table.style.backgroundColor = "lightgray";
  }
  else if ( tvset1._state === false ) {
     tvset1.on();
     table.style.backgroundColor = "lightgreen";
  }
}

document.getElementById("mysleep").onclick = function() {
  if ( tvset1._state === false ) {
    alert("Please, turn On TVset first ...");
  }
  else {
    if( tvset1.sleep() === true ){
      setTimeout(
        function(){
          console.log("\nTV slept after 3 sec...\n");
          document.getElementById("TVset1").style.backgroundColor = "lightgray";
        },
        3000
      );
    }
  }
}

document.getElementById("chnlist").onclick = function() {
  if ( tvset1._state === false ) {
    alert("Please, turn On TVset first ...");
  }
  else {
    var chnlist = tvset1.getchnlist();
    for ( var i=0; i<chnlist.length; i++ ) {
      console.log(i + "\t" + chnlist[i]);
      var tvcell = document.getElementById("mycell");
      tvcell.innerHTML = tvcell.innerHTML + "<br><br>" + i + "&nbsp" + chnlist[i];
    }
  }
}

/** Draw Condey **/

var divcondey = document.createElement("div");
divcondey.id = "divcondey";
divcondey.align = "justify";
divcondey.innerHTML = "<b>&nbsp&nbsp&nbsp&nbspConditioner1&nbsp&nbsp&nbsp&nbsp</b>";
divcondey.style.width = "490px";
divcondey.style.height = "40px";
divcondey.style.border = "thick solid #0000FF";
divcondey.style.backgroundColor = "lightgray";
document.body.appendChild(divcondey);

parentElem = document.getElementById("divcondey");
var condeyonoff = document.createElement("input");
condeyonoff.id = "condeyonoff";
condeyonoff.type = "submit";
condeyonoff.value = "On / Off";
parentElem.appendChild(condeyonoff);

parentElem = document.getElementById("divcondey");
var mytemper = document.createElement("input");
mytemper.id = "mytemper";
mytemper.type = "submit";
mytemper.value = "Set temperature";
parentElem.appendChild(mytemper);

var condey1 = new Condey();
document.getElementById("condeyonoff").onclick = function() {
  if ( condey1._state === true ) {
     condey1.off();
     divcondey.style.backgroundColor = "lightgray";
  }
  else if ( condey1._state === false ) {
     condey1.on();
     divcondey.style.backgroundColor = "lightgreen";
  }
}

document.getElementById("mytemper").onclick = function() {
  if ( condey1._state === false ) {
    alert("Please, turn On Conditioner first ...");
  }
  else {
    var t = prompt("Enter the Temperature: ","-273 *C");
    var condey2 = new Condey(t);
    var backtemper = condey2.settemper();
    divcondey.innerHTML = divcondey.innerHTML + backtemper;
  }
}

/** Draw New Dev Buttons**/

var divbuts = document.createElement("div");                                    // DIV for Add/Delete butts
divbuts.id = "divbuts";
divbuts.style.width = "300px";
divbuts.style.height = "50px";
divbuts.style.backgroundColor = "lightgray";
divbuts.align = "justify";
divbuts.style.border = "thick solid #0000FF";
document.body.appendChild(divbuts);

var addbut = document.createElement("input");                                   // Add-butt
addbut.type = "submit";
addbut.id = "addbut";
addbut.style.width = "100px";
addbut.style.height = "50px";
addbut.value = "Add new Dev";
document.getElementById("divbuts").appendChild(addbut);

var delbut = document.createElement("input");                                   // Delete-butt
delbut.type = "submit";
delbut.id = "delbut";
delbut.style.width = "100px";
delbut.style.height = "50px";
delbut.value = "Delete Device";
document.getElementById("divbuts").appendChild(delbut);

var clearbut = document.createElement("input");                                   // Clear-butt
clearbut.type = "submit";
clearbut.id = "clearbut";
clearbut.style.width = "100px";
clearbut.style.height = "50px";
clearbut.value = "Clear Devices";
document.getElementById("divbuts").appendChild(clearbut);

function drawcommondiv() {
  var commondiv = document.createElement("div");                                  // Draw common DIV
  commondiv.id = "commondiv";
  document.body.appendChild(commondiv);
}
drawcommondiv();

/**New Devs OnClick Buttons**/
var devname;
var newdev = new NewDevice(devname);                                            // New exemplar of Class NewDevice

/** New Dev Cr**/
document.getElementById("addbut").onclick = function() {                        // Addbut onclick
  devname = prompt("Enter the name for new Dev","Lamp");                        // Get new dev name from user
  newdev.create(devname);                                                       // Create new different Devises
  var divnewdev = document.createElement("div");                                // Draw new dev
  divnewdev.id = devname;
  divnewdev.style.width = "100px";
  divnewdev.style.height = "50px";
  divnewdev.style.backgroundColor = "lightgray";
  divnewdev.style.border = "thick solid green";
  document.getElementById("commondiv").appendChild(divnewdev);
  divnewdev.textContent = devname + " (is clickable)";
  divnewdev.onclick = function() {                                              // ON/OFF Devices
    if ( newdev._state === true ) {
       newdev.off();
       divnewdev.style.backgroundColor = "lightgray";
    }
    else if ( newdev._state === false ) {
       newdev.on();
       divnewdev.style.backgroundColor = "yellow";
    }
  }
}

/** Dev Del**/
var comdiv = document.getElementById("commondiv");
document.getElementById("delbut").onclick = function() {                        // Addbut onclick
  newdev.remove();                                                              // launch method remove
  try {
    comdiv.removeChild(comdiv.lastChild);                                       // Erase DIV for deleted Device
  }
  catch(error) {
    alert("Looks like all devices were deleted ...");
  }
}
document.getElementById("clearbut").onclick = function() {                      // Clear onclick
  try{
    document.body.removeChild(comdiv);                                          // delete common-div from body
  }
  catch(error) {
    alert("Looks like all devices were deleted ...");
  }
  drawcommondiv();                                                              // Restore empty common-div
}







//
