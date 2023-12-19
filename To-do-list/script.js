function addToList() {
  let inputValue = document.getElementById('inputItem').value;
  let list = document.getElementById('listItems');
  let newItem = document.createElement('li');
  newItem.textContent = inputValue;
  list.appendChild(newItem);
  document.getElementById('inputItem').value = '';
}

function clearList() {
  let list = document.getElementById('listItems');
  while (list.firstChild) {
      list.removeChild(list.firstChild);
  }
}