let data = 0;
let button = document.getElementById("btn2");

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

function stateHandle() {
    if (document.querySelector(".input").value === "") {
        button.disabled = true; //button remains disabled
    } else {
        button.disabled = false; //button is enabled
    }
}