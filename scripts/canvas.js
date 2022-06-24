var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d'); 

c.canvas.width = window.innerWidth;
c.canvas.height = window.innerHeight;


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


const data = window.myData;
const myArray = data.data;

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
    c.fillRect(item.x/1.25, item.y/1.25, 10, 10);
    c.font = "16px sans-serif";
    c.fillText(item.name, item.x/1.25, item.y/1.25);
});

//drawing arrows
const relationshipData = window.myRelationshipData;
const relationshipArray = relationshipData.data;


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

const reactionsData = window.reactionsData;
const reactionsArray = reactionsData.data;

reactionsArray.forEach(item => {
    c.beginPath();
    canvas_arrow(c, item.substrate_x/1.25, item.substrate_y/1.25, item.product_x/1.25, item.product_y/1.25);
    c.strokeStyle = "#fa34a3"
    c.stroke();
})

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