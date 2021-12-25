var form = document.getElementById('form');

var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItem);


function addItem(e) {
    e.preventDefault();


    // get input value
    var newItem = document.getElementById('addInput').value;

    if (trim(newItem) != '') {
        // create new li elemnt
        var li = document.createElement('li');
        // add class
        li.className = 'list-group-item';
        // add text to node with input value
        li.appendChild(document.createTextNode(newItem));

        // create delet button ele
        var deletebtn = document.createElement('button');
        deletebtn.className = 'btn btn-sm btn-danger float-end delete';
        deletebtn.appendChild(document.createTextNode('X'));
        li.appendChild(deletebtn);

        itemList.appendChild(li);
    }


}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {

        if (confirm('Are your Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }

    }
}

function filterItem(e) {
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach((item) => {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })

}