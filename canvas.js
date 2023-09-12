var canvas = document.getElementById("canvas01")
var tela = canvas.getContext("2d")

setInterval(ma,100)

function ma(){

    tela.clearRect(0,0,1000,600)

    for(var m=0;m<50;m++){

        var red = Math.random()*255
        var green = Math.random()*255
        var blue = Math.random()*255
    
        tela.fillStyle = "rgb("+red+","+green+","+blue+")"
        tela.strokeStyle = "cyan"
    
        var x = Math.random()*1000
        var y = Math.random()*600
        tela.beginPath()
        tela.arc(x , y , 50 , 0 , 360)
        tela.fill()
        tela.stroke()
    }
    
}
