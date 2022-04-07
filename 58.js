// WRITE YOUR CODE IN HERE:
// create a variable with the document location to insert the buttons | 
// create a variable to make a button |
// declare a variable to create a button within a loop 
// append the button within the loop 
// loop iterates 100 x |
// assign inner text for button 
const bttnLocation = document.querySelector('#container');
const newBttn = document.createElement('button');
for (let i=0; i<100; i++) {
  const newBttn = document.createElement('button');
  newBttn.innerText='sup';
  bttnLocation.appendChild(newBttn);
}