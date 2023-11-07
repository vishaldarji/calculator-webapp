

function Click(){
    console.log(event.target);
    let clickedElement = event.target 
    let dataNUmber = clickedElement.getAttribute("data-number")
    // document.getElementById("input").value = dataNUmber
    console.log(document.getElementById("input").value)
    console.log(typeof dataNUmber);
    // document.getElementById("input").value = document.getElementById("input").value+dataNUmber;
    

   if (document.getElementById("input").value.length==0 && dataNUmber==="+") {
    alert("plz add number ") }
   else{
    document.getElementById("input").value = document.getElementById("input").value+dataNUmber;
   }
    
}

function solve(){
    let x=document.getElementById("input").value;
    let y=eval(x);
    document.getElementById("input").value=y;
    return y;
}

function clearScreen(){
    document.getElementById("input").value=' '

}

function backspace() {
    let inputValue = document.getElementById("input").value;
    let inputValue1 = inputValue.slice(0, -1);
    document.getElementById("input").value = inputValue1;
  }





