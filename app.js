

const form= document.querySelector(".add")

const addInput = document.querySelector(".add input")

const listToDo = document.querySelector(".todos");

// console.log(listToDo);

// console.log(addInput.value)


// Add To do Functionality
form.addEventListener("submit", function(e){
    e.preventDefault();
    this.reset();
})




addInput.addEventListener("keypress", function(e){
    // console.log(e.key);

    if(e.key === "Enter")
    {
        // This means that user wants to add this to-do
        // console.log("Enter pressed")



        const newLi = document.createElement("li");

        const newText = this.value;

        newLi.innerHTML = `<span>${newText}</span> <i class="far fa-trash-alt delete" ></i>`;

        newLi.classList.add("list-group-item","d-flex","justify-content-between","align-items-center")
        // console.log(newLi);

        listToDo.appendChild(newLi);
    }
});



// Delete functionality Done
document.body.addEventListener( 'click', function ( event ) {
    //console.log(event.target);
    // if( event.target.classList == 'btnSubmit' ) {
    //   someFunc();
    // };

    // If delete button is pressed
    if (event.target.classList.contains("delete")){
        // console.log("Delete pressed");

        const deleteBtn = event.target;
        
        const li = deleteBtn.parentElement;

        // console.log(li);

        // li.remove();

        // To support all browsers

        const ul = li.parentElement;

        ul.removeChild(li);
    }
  } );


//   Search Functionality


const searchForm= document.querySelector(".search")

searchForm.addEventListener("submit", function(e){
    e.preventDefault();
})


// Input tag

const searchInput = document.querySelector("#search")

searchInput.addEventListener('input', function(e){
    // console.log(this.value);

    const currInput = this.value.toLowerCase();

    // console.log(currInput);

    // console.log(listToDo.children);

    const currToDo = listToDo.children;

    for(let li of currToDo){
        // console.log(li);

        const ToDo = li.textContent.trim();
        // console.log(ToDo);

        if(ToDo.toLowerCase().includes(currInput)){
            li.classList.remove("filtered") 
        }else{
            li.classList.add("filtered")
        }
    }
})