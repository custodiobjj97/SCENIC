export default class DarkMode{
    constructor(input,icon){
        this.input=document.querySelector(input);
        this.icon=document.querySelector(icon);
        this.body=document.querySelector('body');
        this.input.checked=JSON.parse(localStorage.getItem('mode'));
        this.updateBody= this.updateBody.bind(this)
    }

    updateBody(){
        if(this.input.checked){
            this.body.style.backgroundColor="#2F54C6";
            this.body.style.color="#fff"
            this.icon.classList.add('fa-moon')
        }else{
            this.body.style.backgroundColor="#FFF";
            this.body.style.color="#000"
            this.icon.classList.replace('fa-moon','fa-sun')
        }

        this.udpateStorage()
    }

    eventDarkMode(){
        this.input.addEventListener('input', this.updateBody)
    }


    udpateStorage(){
        localStorage.setItem('mode',JSON.stringify(this.input.checked))
    }

    start(){
        if(this.input){
            this.eventDarkMode();
            this.updateBody()
        }
    }
}