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
