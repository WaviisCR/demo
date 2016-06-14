var clic = 1;
function mostrarMenu(){ 
   if(clic==1){
   document.getElementById("menu").style.height = "30em";
   document.getElementById("list-box").style.display = "none";
   clic = clic + 1;
   } else{
       document.getElementById("menu").style.height = "0px";
       document.getElementById("list-box").style.display = "inline";
      
    clic = 1;
   }   
};

var clic = 1;
function mostrarAside(){ 
   if(clic==1){
   document.getElementById("aside").style.display = "block";
      document.getElementById("list-box").style.display = "none";

   clic = clic + 1;
   } else{
       document.getElementById("aside").style.display = "none";
       document.getElementById("list-box").style.display = "inline";

    clic = 1;
   }   
};