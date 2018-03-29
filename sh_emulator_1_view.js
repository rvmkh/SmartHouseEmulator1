"use strict";

/** Draw Buttons**/
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

/**OnClick Buttons**/
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

/** TVset **/
























//
