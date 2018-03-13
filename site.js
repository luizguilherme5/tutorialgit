var memory_array = ["memoryGameFiles/img0.jpg","memoryGameFiles/img0.jpg","memoryGameFiles/img1.jpg","memoryGameFiles/img1.jpg",
"memoryGameFiles/img2.jpg","memoryGameFiles/img2.jpg","memoryGameFiles/img3.jpg","memoryGameFiles/img3.jpg",
"memoryGameFiles/img4.jpg", "memoryGameFiles/img4.jpg","memoryGameFiles/img5.jpg","memoryGameFiles/img5.jpg"];
var memory_values = [];

function showVar (){
  return memory_array[5];
}

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

  var output = '';

  memory_array.memory_tile_shuffle();
  for (var i = 0; i < memory_array.length; i++) {
    output += '<div id="tile_\''+i+'\'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
  }
/*  output += '<div id = "tile1" onclick="memoryFlipTile(this)"> </div>';
  output += '<div id = "teste2"> memory_array[2]</div>';
  output += '<div id = "teste3"> memory_array[2]</div>';*/

  document.getElementById('game').innerHTML = output;
}

function memoryFlipTile(aux,val){

  if (memory_values.length < 2) {
      aux.style.background = 'url('+val+') no-repeat';
  } else {
    document.write('innerHTML');
  }

}
