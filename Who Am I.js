var x=prompt("Do you fly? please ans with yes or no");
if(x=="yes"){
    var y=prompt("Are you a wild? please ans with yes or no");
    if (y=="yes") {
        alert("Eagle");
    }
    else if(y=="no"){
        alert("Parrot");
    }
    else{
        alert("unvalied value");
    }
}
else if (x=="no") {
    var z=prompt("Do you live under sea? please ans with yes or no");
    if (z=="yes") {
        var j=prompt("Are you a wild? please ans with yes or no");
        if(j="yse"){
            alert("shrak");
        }
       else if(j=="no"){
            alert("Dolphin");
        }
        else{
            alert("unvalid value");
        }
    }
    else if(z=="no"){
        var l=prompt("Are you a wild? please ans with yes or no");
        if(l=="yse"){
            alert("Lion");
        }
        else if(l=="no"){
            alert("Cat");
        }
        else{
            alert("unvalid value");
        }
    }
    else{
        alert("unvalid value");
    }
    
}else{
    alert("unvalid value");
}