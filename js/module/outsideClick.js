export default function outsideClick(element,callback){
  const html = document.documentElement;
  const events = ['click','touchstart'];
  const outside="data-outside";

   function handleOutside(event){
    if(!element.contains(event.target)){
        element.removeAttribute(outside);
        events.forEach((userEvent)=>{html.removeEventListener(userEvent,handleOutside)})
        callback()
    }
   }

   if(!element.hasAttribute(outside)){
      element.setAttribute(outside,'');
      setTimeout(()=>{
        events.forEach((eventUser)=>{html.addEventListener(eventUser,handleOutside)
            
        })
    })
   }
}