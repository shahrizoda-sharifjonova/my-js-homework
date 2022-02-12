class Tab{
    constructor(obj){
        this.link = document.querySelectorAll(obj.link)
        this.tab = document.querySelectorAll(obj.tab)
        this.link.forEach((el, i)=>{
            el.addEventListener('click', (e)=>{
                e.preventDefault()
                this.link.forEach((element, index)=>{
                    element.classList.remove('active')
                    this.tab[index].classList.remove('active')
                })
                el.classList.add('active')
                this.tab[i].classList.add('active')
            })
        })
    }
}

const tabs = new Tab({
    link: '.box__link',
    tab: '.tab__item'
})