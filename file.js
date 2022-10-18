

function  getvalue(){
    var yourSelect = document.getElementById("pickedroom"); 
    roomname =  yourSelect.options[ yourSelect.selectedIndex].text;
    // prevents reloading after getting data 
    event.preventDefault();
    // get value in options 
    var numberInput = parseInt(document.querySelector(".numroom").value);

    if (roomname === 'DeluxeA' ){
        var numberInput = parseInt(document.querySelector(".numroom").value);
        totalcost = numberInput*15000;
        console.log(totalcost)
        document.getElementById('paragraph').innerHTML = "Pay " + totalcost;   
    } 
    else if (roomname ==='DeluxeB'){
        var numberInput = parseInt(document.querySelector(".numroom1").value);
        totalcost = numberInput*15000;
        console.log(totalcost)
        document.getElementById('paragraph').innerHTML = "Pay " + totalcost;

    }
    else if (roomname ==='DeluxeC'){
        var numberInput = parseInt(document.querySelector(".numroom2").value);
        totalcost = numberInput*15000;
        console.log(totalcost)
        document.getElementById('paragraph').innerHTML = "Pay " + totalcost;

    }
    else if (roomname ==='EnsuiteA'){
        var numberInput = parseInt(document.querySelector(".numroom3").value);
        totalcost = numberInput*10000;
        console.log(totalcost)
        document.getElementById('paragraph').innerHTML = "Pay " + totalcost;

    }
    else if (roomname ==='EnsuiteB'){
        var numberInput = parseInt(document.querySelector(".numroom4").value);
        totalcost = numberInput*10000;
        console.log(totalcost)
        document.getElementById('paragraph').innerHTML = "Pay " + totalcost;

    }
    else{
        var numberInput = parseInt(document.querySelector(".numroom5").value);
        totalcost = numberInput*10000;
        console.log(totalcost)
        document.getElementById('paragraph').innerHTML = "Pay " + totalcost;

    } 
} 
  