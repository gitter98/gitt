let count;


document.getElementById("mybutton").onclick = function(){
    count-=1;  document.getElementById("mycount").innerHTML = count;
}

document.getElementById("myreset").onclick = function(){
    count=1; document.getElementById("mycount").innerHTML = count;
}

document.getElementById("myinc").onclick = function(){
    count+=1;  document.getElementById("mycount").innerHTML = count;
}