let imageArray = [
    {
        src: './images/heroBackground.jpg',
        title: 'Venom'
    },
    {
        src: './images/heroBackground2.jpg',
        title: 'Alien'
    },
    {
        src: './images/heroBackground3.jpg',
        title: 'Joker'
    },
    {
        src: './images/heroBackground4.jpg',
        title: 'Sonic'
    }
]

const header = document.querySelector('.header');
let heroTitle = document.querySelector('.hero-title');

let current = 0;

let image = document.createElement('img');
image.classList = 'heroBackground';
header.append(image);
image.src = imageArray[current].src;
heroTitle.innerHTML = imageArray[current].title;




function loadQuiz(){
    
    image.src = imageArray[current].src;
    heroTitle.innerHTML = imageArray[current].title;
    header.append(image);
    if(current){
        image.src = imageArray[current].src;
        heroTitle.innerHTML = imageArray[current].title;
    }
    current++;

    if(current >= imageArray.length){
        return current = 0;
    }
}



setInterval(loadQuiz, 4000);


