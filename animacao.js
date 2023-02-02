
// dark mode e zom texo
{
const body = document.querySelector('body')

const main = document.querySelector('main')

    function modoescuro(event){
       if(event.key === 'n'){
       body.classList.toggle('ativo')
       main.classList.toggle('modo-escuro')
    }else if(event.key === 't'){
        document.documentElement.classList.toggle('p')
    }

    }

    window.addEventListener('keydown', modoescuro)
}

// link ativos

{
    const linkativos = document.querySelectorAll('a[href^="#"]')

    function kkk(event){
        linkativos.forEach((i)=>{
            i.classList.remove('link')
        })
        event.currentTarget.classList.toggle('link')
    }

    linkativos.forEach((e) => {
        e.addEventListener('click', kkk)
    });
}

function dowinit(){
 const clickqui = document.querySelector('.js-titulo')
 const ul =document.querySelector('.js-ul')
 
 function down(){
    clickqui.classList.toggle('ativo')
    ul.classList.toggle('ativo')
 }

 clickqui.addEventListener('click', down)

}
dowinit()

function scroll(){
    const linkinterno = document.querySelectorAll('.js-scroll a[href^="#"]')

    function scrollsuave(event){
        event.preventDefault()
        const ref = event.currentTarget.getAttribute('href')
        const div = document.querySelector(ref)

        div.scrollIntoView({
            block: "start", inline: "nearest",
            behavior: 'smooth',
        })
        
    }



    linkinterno.forEach((i)=>{
        i.addEventListener('click', scrollsuave)
    })
    
}
scroll()