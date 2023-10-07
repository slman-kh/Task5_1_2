const hero12 = document.querySelector('.hero');
const hero13 =document.querySelector ('.hero h1')
const next =document.querySelector('.hero i:nth-child(3)');
const prev =document.querySelector('.hero i:nth-child(1)');
let img1 = 0;
let Contain  = [{
    urlImg: '1.jpg',
    content: 'Slider #1',
}
,{
    urlImg: '2.jpg',
    content: 'Slider #2',
},
,{
    urlImg: '3.jpg',
    content: 'Slider #3',
},
{
    urlImg: '4.jpg',
    content: 'Slider #4',
}]

let nextSlide = ()=>{
    img1 ++;
    if(img1 > Contain.length -1){
        img1 =0;
    }
    hero12.style.backgroundImage = `url(images/${Contain[img1].urlImg})`
    hero13.textContent =`${Contain[img1].content}`
}
let prevSlide = ()=>{
    img1--;
    if (img1<0){
        img1 =Contain.length -1;
    }
    hero12.style.backgroundImage = `url(images/${Contain[img1].urlImg})`
    hero13.textContent =`${Contain[img1].content}`

}

next.addEventListener('click' ,nextSlide);
prevB.addEventListener('click' ,prevSlide);