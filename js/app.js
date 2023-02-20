const tabs = document.querySelectorAll('.tab div')
const block = document.querySelectorAll('.wrapper .block')


tabs.forEach((tab, i) =>{
    tab.addEventListener( 'click',() =>{
        block.forEach((content) =>{
            content.classList.remove('active')
        })
        tabs.forEach((tab) =>{
            tab.classList.remove('active')
        })
        block[i].classList.add('active')
        tabs[i].classList.add('active')
    })
})