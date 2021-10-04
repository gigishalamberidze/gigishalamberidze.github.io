var videoPlayer = document.getElementById('videoPlayer')
var video = document.getElementById('video')

function stopVideo(){
    videoPlayer.style.display = 'none';
    video.src = '';
}
function playVideo(file){
    video.src = file;
    videoPlayer.style.display = 'block';
}



const closeMenu = document.getElementById('closeMenu');
const openMenu = document.getElementById('menuBar');
const sideNavigationBar = document.querySelector('.drop-down-navigation');

openMenu.addEventListener('click', ()=>{
    sideNavigationBar.style.transform = 'translateX(0px)';
    sideNavigationBar.style.zIndex = '9';
})

closeMenu.addEventListener('click', ()=>{
    sideNavigationBar.style.transform = 'translateX(1000px)';
    sideNavigationBar.style.zIndex = '-1';
})






const choose = document.querySelector('.choose');
const select = document.querySelector('.select');
const arrowdownselect = document.querySelector('.arrow-down-select');


let a = 0
function openChangeClose(){
    if(a == 0){
        select.style.visibility = 'visible';
        let options = document.querySelectorAll('.options');
        options.forEach(option => {
            option.addEventListener('click',()=>{
                var choosen = option.value;
                choose.value = choosen;
                select.style.visibility = 'hidden';
                a = 0;
            })
        });
        a = 1;
    }else if( a == 1 ){
        select.style.visibility = 'hidden';
        a = 0;
    }
}
choose.addEventListener('click', openChangeClose)
arrowdownselect.addEventListener('click', openChangeClose);



const choose1 = document.querySelector('.choose1');
const select1 = document.querySelector('.select1');
const arrowdownselect1 = document.querySelector('.arrow-down-select1');

let b = 0
function openChangeClose1(){
    if(b == 0){
        select1.style.visibility = 'visible';
        let options = document.querySelectorAll('.options1');
        options.forEach(option => {
            option.addEventListener('click',()=>{
                var choosen1 = option.value;
                choose1.value = choosen1;
                select1.style.visibility = 'hidden';
                b = 0;
            })
        });
        b = 1;
    }else if( b == 1 ){
        select1.style.visibility = 'hidden';
        b = 0;
    }
}
choose1.addEventListener('click', openChangeClose1)
arrowdownselect1.addEventListener('click', openChangeClose1);



