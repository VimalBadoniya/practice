// add new item into ul element (li element should be created)
var itemList = document.getElementById('list') ;  

// take input of new item from the form element
var form = document.getElementById('form');  

//when text is typed and submit button is clicked then add a item
form.addEventListener('submit' , addItem); //when form is submitted  , call addItem function

// when delete button is clicked , delete the item 
itemList.addEventListener('click' , deleteItem) ; 

function addItem(e){
    e.preventDefault();  //it is just to prevent the default behavior of form element
    var newItem = document.getElementById('add-item').value ; //take the text value which is to be added in the list .       if we don't add value , we are targetting element only , not its value
    
    // when form is submitted , a li element is to be created with the text and append it to the ul element

    var listItem = document.createElement('li');   //create li element
    listItem.id = 'new-Item' ; 
    var listItemValue = document.createTextNode(newItem);  //text of li element will be the text entered by the user
    listItem.appendChild(listItemValue);  // add text to li element
    itemList.appendChild(listItem);   // add newly created li element to the list

    //item can be added to the list but the delete button is not included
    // we will create delete button also

    var deleteBtn = document.createElement('button');  // delete button is created
    deleteBtn.className = 'remove'
    var btnText = document.createTextNode('X');   //button text should be X
    deleteBtn.appendChild(btnText) ;  //add text to button

    //now append this button to newly created li element so that text and button both get added
    listItem.appendChild(deleteBtn);
}



function deleteItem(e){
//event listener will call this function whenever user clicks on the itemlist ,  so we have to specify that when click happens on X text then only call this function, so we will add if statement using the class name of delete button
if(e.target.classList.contains('remove')) {
    if(confirm('Are you sure to delete this item')){  //confirmation before delete
        var li = e.target.parentElement ;    // parent of li means we are targetting ul element
        itemList.removeChild(li);   // delete child of ul
    }
}

}
