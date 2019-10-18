

document.querySelector("#calcular").addEventListener("click", function (){

 let valorA = document.querySelector("#valorA").value;
 let valorB = document.querySelector("#valorB").value;

 if(valorA.length >0 && valorB.length >0) {

      alert(parseInt(valorA) + parseInt(valorB));
 }else{

 	  alert("Digite os dois valores");
 }
  
});