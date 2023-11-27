function trackMouse() {

   function handleMouseMove(event) {

     const mouseX = event.clientX;
     const mouseY = event.clientY;

     console.log(`X: ${mouseX}, Y: ${mouseY}`);
   }
 
   document.addEventListener('mousemove', handleMouseMove);
 }
 
 trackMouse();