// Select color input
// Select size input



// When size is submitted by the user, call makeGrid()


// Your code goes here!
function makeGrid() {
    
    const rows = document.getElementById("inputHeight").value;
    const cols = document.getElementById("inputWidth").value;
    const pixelCanvas = document.getElementById("pixelCanvas");

    var tableHeaderRowCount = 0;
    var rowCount = pixelCanvas.rows.length;
    for (var i = tableHeaderRowCount; i < rowCount; i++) {
        pixelCanvas.deleteRow(tableHeaderRowCount);
    }

    for(let i = 0; i < rows; i++) {
        const row = pixelCanvas.insertRow(-1);
        for(let j = 0; j < cols; j++){
            var cell = row.insertCell(-1);
            cell.addEventListener('click', function(event){
                colorPicker = document.getElementById("colorPicker").value;
                var source = event.target || event.srcElement;
                var currentcolor = source.style.backgroundColor;
                if(currentcolor !== ""){
                    colorPicker= "";
                }
                source.style.backgroundColor = colorPicker;
                //alert(colorPicker);
            });
            
        }
    }
}


