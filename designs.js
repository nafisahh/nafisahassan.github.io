// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    var width = document.getElementById("inputWeight").value;
    var height = document.getElementById("inputHeight").value;
    var picker = document.getElementById("sizePicker")
    
    const table = document.getElementById("pixelCanvas");
    
    while (table.childNodes.length) {
        table.removeChild(table.childNodes[0]);
      }

    for(var i = 0; i < height; i++){
        
    
    //create TR
    var row = document.createElement("TR");
    row.setAttribute("id", "myTr");
   //add TR to table
    table.appendChild(row);
 
    for(var j = 0; j < width; j++){
        //create TD and put text "cell"
    var cell = document.createElement("TD");
    cell.addEventListener("click",function(){
        var color = document.getElementById("colorPicker").value;
        this.style.backgroundColor = color;});
       
    //add TD to TR
    row.appendChild(cell);
    
    }
     
    }
 
} 

    

    

    
 
    


