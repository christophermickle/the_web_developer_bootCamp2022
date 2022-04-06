// WRITE YOUR CODE IN HERE:
// Save all li elements to a variable 
// iterate over the variable and toggle the highlight class

const list = document.querySelectorAll('li');
for (let li of list) {
    li.classList.toggle('highlight');
}