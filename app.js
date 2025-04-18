

var hrs = document.getElementById("hrs")
var mis = document.getElementById("mis")
var sec = document.getElementById("sec")



setInterval(function(){
    
    var now = new Date();

        hrs.innerText = now.getHours()

        mis.innerText = now.getMinutes();

        sec.innerText = now.getSeconds();

}
    ,1000)

    









