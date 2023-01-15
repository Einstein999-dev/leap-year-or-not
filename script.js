function result(){

    let year = document.getElementById("year").value;
    let result = document.getElementById("out-result").value;

    if(year == ""){
        alert("Please enter valid year");
    }else if(year % 4 == 0){
        document.getElementById('out-result').innerHTML = year + "<br> This leap year";
    }
    else{
        document.getElementById('out-result').innerHTML = year + "<br> This is not leap year";
    } 
}

function reset(){
    location.reload();
}