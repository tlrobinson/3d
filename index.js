var createViewer = require("stl-obj-viewer");
var objContent = require("raw!./Model.obj");

var viewer = createViewer(document.querySelector('#one'));
viewer.readObj(objContent);
