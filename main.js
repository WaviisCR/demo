var clic = 1;
function mostrarMenu(){ 
   if(clic==1){
   document.getElementById("menu").style.height = "4em";
   clic = clic + 1;
   } else{
       document.getElementById("menu").style.height = "0px";      
    clic = 1;
   }   
};