const form = document.querySelector('form');
const product=document.querySelector('#product');
const quantity=document.querySelector('#qty') ;             
const groceryList =document.querySelector('#list');
form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const newList =document.createElement('li');
    newList.innerText=`${quantity.value} ${product.value}`;
    groceryList.appendChild(newList);
    product.value='';
    quantity.value='';
});