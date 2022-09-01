const inventorylist = [];

function add(item) {
  inventorylist.forEach((element) => {
    if (element === item) {
      console.log("the item has already been added");
      inventorylist.pop();
    }
  });
  if (inventorylist.length <= 10) {
    inventorylist.push(item);
  } else {
    console.log("the list if full");
  }
}

function remove(item) {
  var i = inventorylist.indexOf(item);

  if (i !== -1) {
    inventorylist.splice(i, 1);
  }
}

function getList() {
  if (inventorylist.length <= 0) {
    console.log("Sin Elementos");
  } else {
    inventorylist.forEach((item) => {console.log(`${item}`);});
  }
}
