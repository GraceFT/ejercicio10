   function evaluar(){
    var aNum = parseInt(document.getElementById("anum").value);
    var bNum = parseInt(document.getElementById("bnum").value);
    var salida = document.getElementById("salida");
    
    if (aNum == 10 || bNum == 10 || aNum + bNum == 10){
        document.getElementById("salida").innerHTML="Uno de los enteros es 10 o suman 10 : 1";
    }else{
        document.getElementById("salida").innerHTML="0";
    }
}