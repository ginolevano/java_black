"use strict"
let puntos = document.querySelectorAll('.circulos')
let imgs   = document.querySelectorAll('.imagenes')
let right  = document.querySelector('.derecha')
let foto   = 0

right.addEventListener('click',()=>{
    foto++
    if( foto === imgs.length){
        foto = 0
    }
    
    imgs.forEach((cadaImg,i)=>{
        imgs[i].classList.remove('activo')
        puntos[i].classList.remove('activo')
        imgs[foto].classList.add('activo')
        puntos[foto].classList.add('activo')

        console.log('right')
    })
})


puntos.forEach((btn,i)=>{
  
    puntos[i].addEventListener('click', () =>{
        imgs.forEach((cadaImg,i)=>{
            imgs[i].classList.remove('activo')
        })
            imgs[i].classList.add('activo')
            console.log('puntos')
    })


})  