let data = 0;
var button = document.getElementById("btn2");

const Increment = () => {
    data = data + 1;
    document.getElementById("value").innerText = data;
}


const Decrement = () =>{
    if (document.getElementById("value").innerText == 0){
        button.disabled = true;
    }
    data = data - 1;
    document.getElementById("value").innerText = data; 
}

const Check = () => {
    var button = document.getElementById("btn2");
    console.log(document.getElementById("value").innerText == 0);
    if(document.getElementById("value").innerText == 0){
        button.style.cursor = "not-allowed";
    }
    else{
        button.style.cursor = "pointer";
    }

}
