var memory_array = ["memoryGameFiles/img0.jpg","memoryGameFiles/img0.jpg","memoryGameFiles/img1.jpg","memoryGameFiles/img1.jpg",
"memoryGameFiles/img2.jpg","memoryGameFiles/img2.jpg","memoryGameFiles/img3.jpg","memoryGameFiles/img3.jpg",
"memoryGameFiles/img4.jpg", "memoryGameFiles/img4.jpg","memoryGameFiles/img5.jpg","memoryGameFiles/img5.jpg"];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;

Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

function newBoard(){

  var output = '<h2> The LOTR Memory Game </h2>';

  memory_array.memory_tile_shuffle();
  for (var i = 0; i < memory_array.length; i++) {
    output += '<div id="tile_\''+i+'\'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
  }

  document.getElementById('game').innerHTML = output;
}

function memoryFlipTile(aux,val){

  if (memory_values.length < 2) {
    aux.style.background = 'url('+val+') no-repeat';
    aux.style.backgroundSize = "200px 200px";

    if (memory_values.length == 0) {
      memory_values.push(val);
      memory_tile_ids.push(aux.id);
    } else if (memory_values.length == 1) {
      memory_values.push(val);
      memory_tile_ids.push(aux.id);
      if (memory_values[0] == memory_values[1]) {
        tiles_flipped += 2;

        var ex1 = document.getElementById(memory_tile_ids[0]);
        var ex2 = document.getElementById(memory_tile_ids[1]);

        ex1.onclick = "#";
        ex2.onclick = "#";

        memory_values = [];
        memory_tile_ids = [];

        if (tiles_flipped == memory_array.length) {
          alert("Parabéns!");
          document.getElementById('game').innerHTML = "";
          tiles_flipped = 0;
          newBoard();
        }

      }else{
        setTimeout(flip2Back,700);
      }
    }

  }

}

function flip2Back(){
  var tile1 = document.getElementById(memory_tile_ids[0]);
  var tile2 = document.getElementById(memory_tile_ids[1]);

  tile1.style.background = 'url(memoryGameFiles/lotrbg.jpg)';
  tile1.style.backgroundSize = "200px 200px";

  tile2.style.background = 'url(memoryGameFiles/lotrbg.jpg)';
  tile2.style.backgroundSize = "200px 200px";

  memory_values = [];
  memory_tile_ids = [];
}

function hideCards(){

}
