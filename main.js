var clic = 1;
function mostrarMenu(){ 
   if(clic==1){
   $("#menu").style.height = "30em";
   $("#list-box").style.display = "none";
   clic = clic + 1;
   } else{
       $("#menu").style.height = "0px";
       $("#list-box").style.display = "inline";
      
    clic = 1;
   }   
};

var clic = 1;
function mostrarAside(){ 
   if(clic==1){
   $("#aside").style.display = "block";
    $("#list-box").style.display = "none";

   clic = clic + 1;
   } else{
       $("#aside").style.display = "none";
       $("#list-box").style.display = "inline";

    clic = 1;
   }   
};