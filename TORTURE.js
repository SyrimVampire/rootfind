function square(){
  var S = document.getElementById("number").value
  if(document.getElementById("number").value == ""){
    document.getElementById("answer2").innerHTML = "Please Enter a Value"
  }else{
  if(document.getElementById("number").value < 0){
     document.getElementById("answer2").innerHTML = Math.sqrt(-S) + "i"
  }
  else{
     console.log(Math.sqrt(S))
     document.getElementById("answer2").innerHTML = Math.sqrt(S)
  }
  }
}

function cube(){
  var S = document.getElementById("number3").value
  if(document.getElementById("number3").value == ""){
    document.getElementById("answer3").innerHTML = "Please Enter a Value"
  }else{
  if(document.getElementById("number3").value < 0){
     document.getElementById("answer3").innerHTML = Math.cbrt(-S) + "i"
  }
  else{
     console.log(Math.sqrt(S))
     document.getElementById("answer3").innerHTML = Math.cbrt(S)
  }
  }
}