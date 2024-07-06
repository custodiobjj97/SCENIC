import Slide from "./slide.js";
export default class SlidesNav extends Slide{
    constructor(slide,wrapper){
        super(slide,wrapper)
        this.bindEventControl();
    }

    addArrow(prev,next){
        this.prevElement=document.querySelector(prev);
        this.nextElement = document.querySelector(next);
        this.arrowEvent();
    }

    arrowEvent(){
        this.prevElement.addEventListener('click', this.activeSlidePrev);
        this.nextElement.addEventListener('click', this.activeSlideNext);
    };


    eventControl(item,index){
        item.addEventListener('click',(event)=>{
            event.preventDefault();
            this.changeSlide(index)
        })
        this.wrapper.addEventListener('changeEvent', this.activeControlClass);
    };

    activeControlClass(){
        this.controlArray.forEach((element)=>{element.classList.remove(this.activeClass)});
        this.controlArray[this.index.active].classList.add(this.activeClass);
    };

    addControl(customControl){
       const control = document.querySelector(customControl);
       this.controlArray = [...control.children];
       this.activeControlClass();
       this.controlArray.forEach(this.eventControl);
    };

    bindEventControl(){
        this.activeControlClass = this.activeControlClass.bind(this);
        this.eventControl = this.eventControl.bind(this);
    }
}