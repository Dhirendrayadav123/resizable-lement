import './component1.css';
const Component1=()=>{
    const el = document.querySelector(".resizable1");
  
    const resizers = document.querySelectorAll(".resizer");
    let currentResizer1;
    
    for (let resizer of resizers) {
      resizer.addEventListener("mousedown", mousedown);
    
      function mousedown(e) {
        currentResizer1 = e.target;
    
        let prevX = e.clientX;
        let prevY = e.clientY;
    
        window.addEventListener("mousemove", mousemove);
        window.addEventListener("mouseup", mouseup);
    
        function mousemove(e) {
          const rect = el.getBoundingClientRect();
    
          if (currentResizer1.classList.contains("resizer-r")) {
            el.style.width = rect.width - (prevX - e.clientX) + "px";
          }
           else if (currentResizer1.classList.contains("resizer-b")) {
            el.style.height = rect.height - (prevY - e.clientY) + "px"; 
          }
           else if (currentResizer1.classList.contains("resizer-t")) {
            el.style.height = rect.height + (prevY - e.clientY) + "px";
            el.style.top = rect.top - (prevY - e.clientY) + "px";
          }
          else {
            el.style.width = rect.width + (prevX - e.clientX) + "px";
            el.style.left = rect.left - (prevX - e.clientX) + "px";
          }
    
          prevX = e.clientX;
          prevY = e.clientY;
        }
    
        function mouseup() {
          window.removeEventListener("mousemove", mousemove);
          window.removeEventListener("mouseup", mouseup);
     
        }
      }
    }
      return (  
          <div id='resizeMe' className='resizable1'>
            
            <div className='resizer resizer-r'>
            </div>
            <div className='resizer resizer-b'>
            </div>
            <div className='resizer resizer-l'>
            </div>
            <div className='resizer resizer-t'>
            </div>
          </div> 
      );
}
export default Component1;