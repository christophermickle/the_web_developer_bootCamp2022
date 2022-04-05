const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:


// neeed a variable to catch all of the spans into an array
// need to loop over the array in colors and over the variable for the spans 
// need to assign each of the spans to be the content of each value within the array using an index  
// edit the style>colors attribute for spans and update with the colors array

// Meet the criteria step by step --> 
const spanCatchAll=document.querySelectorAll('span');
for (let i=0; i<colors.length; i++) {
     spanCatchAll[i].style.color = colors[i];
}