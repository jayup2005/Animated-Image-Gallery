const btn = document.getElementsByClassName('btn2');
const ban = document.getElementById('banner');
// const li = document.querySelector('li')

btn[0].onclick =  function(){
        ban.src  = "images/pic1.png"
        zoomout();
        this.classList.add("active")
}

btn[1].onclick =  function(){
    ban.src  = "images/pic2.png"
    zoomout();
    this.classList.add("active")
}

btn[2].onclick =  function(){
    ban.src  = "images/pic3.png"
    zoomout();
    this.classList.add("active")
}


function zoomout(){
    ban.classList.add("zoom");
    setTimeout(function(){
        ban.classList.remove("zoom");
    },500);

for(b of btn){
    b.classList.remove("active")
}

}

 