export default class AnimeNumber{
    constructor(number,targetOberseve){
        this.number = document.querySelectorAll(number);
        this.targetOberseve = document.querySelector(targetOberseve);
        this.speed = 2000;
        this.handleMutation = this.handleMutation.bind(this)
    }

    numberAnimation(){
        this.number.forEach(counter =>{
            const animate = () => {
                const value = +counter.getAttribute('akhi');
                const data = +counter.innerText;
               
                const time = value / this.speed;
               if(data < value) {
                    counter.innerText = Math.ceil(data + time);
                    setTimeout(animate,1);
                  }else{
                    counter.innerText = value;
                  }
              
             }
             
             animate();
        })
          
    }

    handleMutation(mutation){
       if(mutation[0].target.classList.contains('visible')){
         this.observer.disconnect();
         this.numberAnimation()
       }
    }

    mutationObserver(){
        this.observer = new MutationObserver(this.handleMutation);

        this.observer.observe(this.targetOberseve,{attributes: true})
    }

    start(){
        if(this.number.length && this.targetOberseve){
           this.mutationObserver()
        }
        return this
    }
}