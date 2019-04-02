
var map = document.getElementById("mapgen");

function createMap(numberGrids) {
    for (var i = 0; i < numberGrids; i++) {
      var gridDiv = document.createElement("div");
      gridDiv.id = i;
      gridDiv.classList.add("grid");
      map.appendChild(gridDiv)
    }
}
createMap(100);