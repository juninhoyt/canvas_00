var canvas = document.getElementById("canvas01")
var tela = canvas.getContext("2d")

tela.fillStyle = "blue"
tela.strokeStyle = "cyan"

for(var m=0;m<50;m++){
    var x = Math.random()*1000
    var y = Math.random()*600
    tela.beginPath()
    tela.arc(x , y , 100 , 0 , 360)
    tela.fill()
    tela.stroke()
}

