let visits = 1;
if(localStorage.hasOwnProperty('visits')){
    visits = parseInt(localStorage.getItem('visits')) + 1;
}

localStorage.setItem('visits', visits);
document.getElementById("msg").innerHTML = `You've visited this page ${visits} times.`;

function clearStorage(){
    localStorage.clear();
    document.getElementById("msg").innerText = "Storage's cleared.";
}


function checkFile(){
    var input = document.getElementById("input");
    if(input.files[0]  != null){
        console.log("hola");
        console.log(input.files[0].name);
        console.log(input.files[0].size / 1024 / 1024);
        console.log(input.files[0].type);

        if(input.files[0].type == "image/png"){
            console.log("hola2");
        }else{
            console.log("fefewf");
            
        }
        
        
    }else{
        console.log("bye");
        
    }
}