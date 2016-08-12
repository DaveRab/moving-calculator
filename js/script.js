//Dynamic Table Script
var tableItems = [];

function submitEntry() {
  var item = getItemData();
  tableItems.push(item);
  updateTable();
}

//clears #tableInfo innerHTML and redraws table with updated list.
function updateTable(){
  var t = document.getElementById('tableInfo');
  t.innerHTML = '';
  for (var i = 0; i <= tableItems.length; i++) {
    t.innerHTML += "<tr> <td>" + tableItems[i].name +
    "</td> <td>" + tableItems[i].width +
    "</td> <td>" + tableItems[i].height +
    "</td> <td>" + tableItems[i].depth +
    "</td> <td>" + tableItems[i].qty +
    "</td> <td>" + tableItems[i].cuft + "</td> <td> <span id=\"" + [i] + "\" class=\"remove\">X</span></td></tr>  ";
  }
  //working on remove feature
  var buttons = document.getElementsByClassName('remove');
   for (var i=0; i < buttons.length; i++) {
       buttons[i].addEventListener('click', remove);
   };

}



//gets form input values and returns an object with form input values
function getItemData(){
  var name = document.getElementById('name').value
    , width = document.getElementById('width').value
    , height = document.getElementById('height').value
    , depth = document.getElementById('depth').value
    , qty = document.getElementById('qty').value;
    return {
      name: name,
      width: width,
      height: height,
      depth: depth,
      qty: qty,
      cuft: Math.round(((width/12) * (height/12) * (depth/12)) * qty)
    }

    //TODO Implement DRY'er version of above code
    /*var itemAttr = ['name','width','height','depth','qty'];
    var obj = {};
    for (var i = 0; i <= itemAttr.length; i++) {
      obj[i] = document.getElementById(itemAttr[i]).value;
    }
    return obj;*/
}


//TODO Write delete function
//Needs to be able to grab item associated with current row and remove it from array
//then redraw the new table.


function remove() {
    var id = this.getAttribute('id');
    console.log(id);
    tableItems.splice(id, 1);
    updateTable();
}
