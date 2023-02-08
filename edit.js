var productId = JSON.parse(window.localStorage.getItem("productId")) || [];
console.log(productId);
var products = JSON.parse(window.localStorage.getItem("products")) || [];
var edit = products.find((obj) => productId == obj.productId);
console.log(edit);

function onEdit() {
  document.getElementById("productId").value = edit.productId;
  document.getElementById("productName").value = edit.productName;
  //document.getElementById("image").value = edit.productId;
  document.getElementById("price").value = edit.price;
  document.getElementById("description").value = edit.description;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.productId;
  selectedRow.cells[1].innerHTML = formData.productName;
  selectedRow.cells[2].innerHTML = formData.image;
  selectedRow.cells[3].innerHTML = formData.price;
  selectedRow.cells[4].innerHTML = formData.description;
}
onEdit();
//   `<button onClick="onEdit(this)">Edit</button>'

function onFormSubmit(){
   console.log(products.remove(edit.productId));
}