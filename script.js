
let pButton = document.getElementById("p-button");
let iButton = document.getElementById("img-button");
let nButton = document.getElementById("nothing-button");

let pDiv = document.getElementById("p-div");
let iDiv = document.getElementById("img-div");
let nDiv = document.getElementById("nothing");

let counter = 0;

pButton.onclick = function(){
    pDiv.style.display = "block";
    iDiv.style.display = "none";
    nDiv.style.display = "none";

    let p = document.createElement("p");
    let text = document.createTextNode("Lorem ipsum solar amet"); 
    p.appendChild(text); 
    pDiv.appendChild(p);
 };


 iButton.onclick = function(){
    pDiv.style.display = "none";
    iDiv.style.display = "block";
    nDiv.style.display = "none";

    let i = document.createElement('img');
    i.src = "images/asclogo.png";
    iDiv.appendChild(i);

};

nButton.onclick = function(){
    pDiv.style.display = "none";
    iDiv.style.display = "none";
    nDiv.style.display = "block";

    counter ++

    if(counter >= 1){
        window.alert("Computer Self-Destruction Initiated");
    }


}
 
