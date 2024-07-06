export default class ScrollAnimation{
    constructor(elements){
        this.elements = document.querySelectorAll(elements);
        this.activeClass='visible';
    };

    handleScroll(){
        for(let i = 0; i < this.elements.length; i++){
            const top = this.elements[i].getBoundingClientRect().top;
            const halftHeight = window.innerHeight * 0.7;
            const isSection = (top - halftHeight) < 0 
            if(isSection){
                this.elements[i].classList.add(this.activeClass);
            }else if(this.elements[i].classList.contains(this.activeClass)){
                this.elements[i].classList.remove(this.activeClass);
            }
        }
    }


    eventScroll(){
        window.addEventListener('scroll', this.handleScroll);
    };

    bindEvent(){
        this.handleScroll = this.handleScroll.bind(this);
    };


    start(){
        if(this.elements.length){
            this.bindEvent();
            this.eventScroll();
            this.handleScroll();
        }
        return this;
    }
}