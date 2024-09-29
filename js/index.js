//1-triangle
function calculateTriangleArea(){
    const baseInput = document.getElementById('triangle-base');
    const baseText = baseInput.value;
    const base = parseFloat (baseText);
 
    const heightInput = document.getElementById('triangle-height');
    const heightText = heightInput.value;
    const height = parseFloat (heightText);
 
    //calculated
    const area = 0.5*base*height;
 
   const final = document.getElementById('triangle-area');
   final.innerText = area;
   
 }
 //2-rectangle
 function calculateRectangleArea(){
    
    const baseInput = document.getElementById('rectangle-base');
    const baseText = baseInput.value;
    const base = parseFloat (baseText);
 
    const heightInput = document.getElementById('rectangle-height');
    const heightText = heightInput.value;
    const height = parseFloat (heightText);
 
    //calculated
    const area = base*height;
 
   const final = document.getElementById('rectangle-area');
   final.innerText = area;
 }