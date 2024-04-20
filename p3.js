let showbtn = document.getElementById("edit"); 
let closebtn = document.getElementById("processe1"); 
let popup = document.getElementById("popup1"); 

let popup2 = document.getElementById("popup2"); 
let showbtn2 = document.getElementById("add1"); 
let closebtn2 = document.getElementById("processe2");

  
showbtn.addEventListener("click", () => { 
    popup.style.display = "block"; 
}); 
  
closebtn.addEventListener("click", () => { 
    document.getElementById("balance").innerHTML = document.getElementById("first").value;
    document.getElementById("income").innerHTML = document.getElementById("second").value
    document.getElementById("budget").innerHTML = document.getElementById("third").value
    popup.style.display = "none"; 
});

showbtn2.addEventListener("click", () => { 
    popup2.style.display = "block"; 
}); 

closebtn2.addEventListener("click", () => { 
    popup2.style.display = "none"; 
});


