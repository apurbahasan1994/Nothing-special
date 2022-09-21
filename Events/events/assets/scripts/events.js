const button=document.querySelector('button');



button.addEventListener('click',(e)=>{
    console.log("The child is triggering");
});

//bubling phase
// document.querySelector('div').addEventListener('click',(e)=>{
//     console.log('the parent is triggering');
// });

//capturing  phase
document.querySelector('div').addEventListener('click',(e)=>{
    console.log('the parent is triggering');
},true);


// event delegation


// one approach is listen event to every li elements
// const listItems=document.querySelectorAll('li');
// listItems.forEach(item=>{
//     item.addEventListener('click',(e)=>{
//         e.target.classList.toggle('red');
//     });
// });

// delegation pattern instead listen to entire list 
// we have added the event listener to the next hogher 
// element instead of each child 
//  with the help of the event propagation now
// the child also trigger the click events 
const lis =document.querySelector('ul');
lis.addEventListener('click',(e)=>{

    //e.target is the element where we actually clicked
    // currentTarget is the actual element where we actually 
    // added our listeners 
    e.target.classList.toggle('red');
})

