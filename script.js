let outputScreen = document.getElementById("output-screen")

function display(num){
    outputScreen.value = outputScreen.value + num;
}
function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("Invalid")
        console.log(err.message);
    }
}
function Clear(){
    outputScreen.value = "";
}
function del(){
    outputScreen.value = outputScreen.value.slice(0,-1)
}
