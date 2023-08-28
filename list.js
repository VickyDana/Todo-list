let items = "item"

let array = JSON.parse(localStorage.getItem('task'))?JSON.parse(localStorage.getItem('task')):[]

function addTask () {
    let title = document.getElementById("tittle");
    let description = document.getElementById("description");
    let date = document.getElementById("date");


    if (!title || !description || !date) {
        alert("All fields are required");
        return;
    }

    let task = {id : 0, title : title.value, description: description.value, date: date.value};
    task.id = array.length
    // console.log(task)
    array.unshift(task)
    localStorage.setItem("task", JSON.stringify (array));
    

    alert("saved successfully")


    // console.log(array)
   
}


let loadData = () => {
    let display = document.querySelector("tbody");
    display.innerHTML = ""; // Clear the contents of the display element

    if (array != null) {
        array = JSON.parse(localStorage.getItem("task"));
        array.forEach((data, i) => { 
        
       // let dataElement = document.createElement("tr")
        display.innerHTML += `
        <tr>
        <td>${i + 1}</td> 
            <td>${data.title}</td> 
            <td>${data.description}</td> 
            <td>${data.date}</td> 
            <td> 
            <svg class="eye"  onclick="viewTask(this, ${i})"  data-bs-toggle="modal"  data-bs-target="#exampleModal"     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"></path><path d="M12 3.5c3.432 0 6.124 1.534 8.054 3.241 1.926 1.703 3.132 3.61 3.616 4.46a1.6 1.6 0 0 1 0 1.598c-.484.85-1.69 2.757-3.616 4.461-1.929 1.706-4.622 3.24-8.054 3.24-3.432 0-6.124-1.534-8.054-3.24C2.02 15.558.814 13.65.33 12.8a1.6 1.6 0 0 1 0-1.598c.484-.85 1.69-2.757 3.616-4.462C5.875 5.034 8.568 3.5 12 3.5ZM1.633 11.945a.115.115 0 0 0-.017.055c.001.02.006.039.017.056.441.774 1.551 2.527 3.307 4.08C6.691 17.685 9.045 19 12 19c2.955 0 5.31-1.315 7.06-2.864 1.756-1.553 2.866-3.306 3.307-4.08a.111.111 0 0 0 .017-.056.111.111 0 0 0-.017-.056c-.441-.773-1.551-2.527-3.307-4.08C17.309 6.315 14.955 5 12 5 9.045 5 6.69 6.314 4.94 7.865c-1.756 1.552-2.866 3.306-3.307 4.08Z"></path></svg>
            
            <svg class="pen"    data-bs-toggle="modal" data-bs-target="#staticBackdrop_${i}"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path>              
            </svg>
           
            <svg class="bin" onclick="removeTask(this, ${i})" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M16 1.75V3h5.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H8V1.75C8 .784 8.784 0 9.75 0h4.5C15.216 0 16 .784 16 1.75Zm-6.5 0V3h5V1.75a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25ZM4.997 6.178a.75.75 0 1 0-1.493.144L4.916 20.92a1.75 1.75 0 0 0 1.742 1.58h10.684a1.75 1.75 0 0 0 1.742-1.581l1.413-14.597a.75.75 0 0 0-1.494-.144l-1.412 14.596a.25.25 0 0 1-.249.226H6.658a.25.25 0 0 1-.249-.226L4.997 6.178Z"></path><path d="M9.206 7.501a.75.75 0 0 1 .793.705l.5 8.5A.75.75 0 1 1 9 16.794l-.5-8.5a.75.75 0 0 1 .705-.793Zm6.293.793A.75.75 0 1 0 14 8.206l-.5 8.5a.75.75 0 0 0 1.498.088l.5-8.5Z"></path></svg>
            </td> 
        </tr>



        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
       

<div class="modal fade" id="staticBackdrop_${i}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">

    <div class="top display-flex-end">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Edit Item</h1> 
        <button id="cancel"   value="Reset form" onclick="reset()">Reset</button> 
        <button class="todo-button" onclick="editTask(${i})">Save</button>
    </div>
  

      </div>
      <div class="modal-body">
        <div class="two">
          
         
          <form id="form">
            <div class="form-input-group" id="editIndex">
                <label class="t">Tittle</label>
                <input type="text" class="tip" id="title-e_${i}" placeholder="Tittle" value="${data.title}">
                <div class="form-input-error-message"></div>
            </div>
        
            <div class="form-input-group">
                <label class="d">Description</label>
                <input type="text" class="crip" id="description-e_${i}" placeholder="Description" value="${data.description}">
                <div class="form-input-error-message"></div>
            </div>
        
            <div class="form-input-group">
                <label class="du">Due date</label>
                <input type="date" class="tea" id="date-e_${i}" value="${data.date}">
                <div class="form-input-error-message"></div>
            </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <!-- <button type="button" class="btn btn-primary">Understood</button> -->
      </div>
    </div>
  </div>
</div>
        `
        //display.appendChild(dataElement) 
         
        })
        
        
 }
}
loadData()



 

let viewTask = (e, i) => {
    let array = JSON.parse(localStorage.getItem("task")) || [];
    
    if (i >= 0 && i < array.length) {
        const task = array[i];
        console.log("Viewing task:", task);
        document.querySelector('.modal-header').innerHTML =`
        <h1 class="modal-title fs-5" id="exampleModalLabel">${task.title}</h1>
        
        `
        document.querySelector('.modal-body').innerHTML =`
        <p>${task.description}</p>
        

        `
        document.querySelector('.modal-footer').innerHTML =`
        <p>${task.date} </p>
        
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       `
        
    } else {
        console.log("Invalid task index:", i);
    }
}




let check_index 
  
function editTask(i) {

    array = JSON.parse(localStorage.getItem("task"))

    let title_input = document.getElementById(`title-e_${i}`);
    let description= document.getElementById(`description-e_${i}`);
    let date = document.getElementById(`date-e_${i}`);


    
   
        array[i].title= title_input.value,
        array[i].description= description.value,
        array[i].date= date.value

        console.log(array)
        localStorage.setItem("task", JSON.stringify(array));

        loadData()
    }

    //array.splice(i,1)
   
    //.log(array)
    
    

    
    //let array =  

    //console.log(task)

    // array.forEach((item , index) =>{
    //     if(i == index){
    //         // console.log(item.title)
    //         title_input.value = item.title;
    //         description.value = item.description;
    //         date.value = item.date;
    //         check_index = i
           
    //     }
    // })
//     window.location.reload()


let updateTask = () =>{
    let new_item = []
    let array = JSON.parse(localStorage.getItem('task'))
    let title_input = document.getElementById('title-e');
    let description= document.getElementById('description-e');
    let date = document.getElementById('date-e');
    let task = {}
    array.forEach((item,i ) => {
        if (item.id == check_index){
            task.id = check_index
            task.title = title_input.value
            task.description = description.value
            task.date = date.value
            new_item.push(task)
        }
    })
    console.log(new_item,check_index)
    localStorage.setItem("task", JSON.stringify(new_item))
    window.location.reload()
    // console.log(new_item)

}


let removeTask = (e,i) =>{
    console.log(i)
    array = JSON.parse(localStorage.getItem("task"))
    console.log(array)
    array.splice(i,1)
   
    console.log(array)
    
    localStorage.setItem("task", JSON.stringify(array)); 
    // event.parentElement.remove();
    loadData()

}





let reset = () => {
    document.getElementById("tittle").value = "";
    document.getElementById("description").value = "";
    document.getElementById("date").value = "";
    document.getElementById("editIndex").value = ""; // Clear the edit index
};

        
  
 function cancel() { 
  
 JSON.parse(localStorage.getItem('task')) 
     window.location.href='list.html' 
  
 }














