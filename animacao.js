
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