let users = "user"
// let array = []
function signup () {
    let username = document.getElementById("signupUsername").value;
    let password = document.getElementById("signupPassword").value
    let verifyPassword = document.getElementById("verify").value

     if (!username || !password || !verifyPassword) {
        alert("All fields are required");
        return;
    }

    
    if (users.includes(username)) {
        alert("Username already exists");
        return;
    }
        
   
    if(password !== verifyPassword){
        alert("Password does not match")
        return
    }

    const user = { username, password, verifyPassword};

    // array.push(users)
    localStorage.setItem(users, JSON.stringify([username, password, verifyPassword]));

    if(username || password ){
   
        console.log(users)
        
    }

}



function login (){

    let password = document.getElementById("loginPassword").value
    let username = document.getElementById("loginUsername").value
    


    if(!username || !password){
        alert("All fields are required")
        return
    }

    let storedUser = JSON.parse(localStorage.getItem([users]));

    if((storedUser).username !== username && (storedUser).password !== password){
        alert("user does not exist")
        return
    } 

    if((storedUser).password !== password){
        alert("incorrect password entered")
        return
    } 
    
    else{
    
        alert("Login successful");
    } 
    
}






