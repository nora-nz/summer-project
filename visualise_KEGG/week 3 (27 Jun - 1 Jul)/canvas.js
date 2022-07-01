var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d'); 

c.canvas.width = window.innerWidth;
c.canvas.height = window.innerHeight;

import { hsa05415 } from "./hsa05415json.js";
import { hsa05415rel } from "./hsa05415relationsJSON.js";
import { d3Data } from "./d3datajson.js";

// c.fillStyle = "rgba(255, 0, 0, 0.5"
// c.fillRect(100, 100, 100, 100); //(x, y, w, h)
// c.fillStyle = "rgba(0, 0, 255, 0.5"
// c.fillRect(400, 100, 100, 100);

// //Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.strokeStyle = "#fa34a3"
// c.stroke();

// //Arc/Circle
// // c.beginPath();
// // c.arc(300, 300, 30, 0, Math.PI * 2, false);
// // c.strokeStyle = "blue";
// // c.stroke();

// for (var i = 0; i < 3; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = "blue";
//     c.stroke();
// }

// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, innerWidth, innerHeight);
//     c.beginPath();
//     c.arc(x, y, radius, 0, Math.PI * 2, false);
//     c.strokeStyle = "blue";
//     c.stroke();

//     if (x + radius > innerWidth || x - radius < 0) {
//         dx = -dx;
//     }
//     x += dx;
//     if (y + radius > innerHeight || y - radius < 0) {
//         dy = -dy;
//     }
//     y += dy;
// }

// animate();


const myArray = hsa05415;

myArray.forEach(item => {
    
    
    if (item.type == "compound") {
        c.fillStyle = "rgba(400, 100, 100, 100)";     
    } else if (item.type == "map") {
        c.fillStyle = "green";
    } else if (item.type == "gene") {
        c.fillStyle = "rgba(100, 100, 400, 100)";
    } else {
        c.fillStyle = "black"
    }
    c.font = "16px sans-serif";
    const text = c.measureText(item.name);
    
    c.strokeRect(item.x/1.25 -3, item.y/1.25 - 18, text.width + 6, 25);
    c.fillText(item.name, item.x/1.25, item.y/1.25);
});

//drawing arrows
const relationshipArray = hsa05415rel;

relationshipArray.forEach(item => {
    
    c.beginPath();
    canvas_arrow(c, item.start_x/1.25, item.start_y/1.25, item.end_x/1.25, item.end_y/1.25);
    c.stroke();
})
// c.beginPath();
// canvas_arrow(c, 10, 30, 200, 150);
// canvas_arrow(c, 100, 200, 400, 50);
// canvas_arrow(c, 200, 30, 10, 150);
// canvas_arrow(c, 400, 200, 100, 50);
// c.stroke();

// const reactionsData = window.reactionsData;
// const reactionsArray = reactionsData.data;

// reactionsArray.forEach(item => {
//     c.beginPath();
//     canvas_arrow(c, item.substrate_x/1.25, item.substrate_y/1.25, item.product_x/1.25, item.product_y/1.25);
//     c.strokeStyle = "#fa34a3"
//     c.stroke();
// })

function canvas_arrow(context, fromx, fromy, tox, toy) {
  var headlen = 10; // length of head in pixels
  var dx = tox - fromx;
  var dy = toy - fromy;
  var angle = Math.atan2(dy, dx);
  context.moveTo(fromx, fromy);
  context.lineTo(tox, toy);
  context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
  context.moveTo(tox, toy);
  context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
}

// c.forEachObject(function (obj) {
//     if (obj === options.target) return;
//     if (options.target.isContainedWithinObject(obj)||options.target.intersectsWithObject(obj)||obj.isContainedWithinObject(options.target)) {
//         var distx = ((obj.left + obj.width)/2) - ((options.target.left + options.target.width)/2);
//         var disty = ((obj.top + obj.height)/2) - ((options.target.top + options.target.height)/2);                  

//         if (distx > 0){
//             options.target.left = obj.left - options.target.width;
//         } else {
//             options.target.left = obj.left + obj.width;
//         }
// }})


 
