const mainContainer = document.getElementsByClassName('main_container')[0];

mainContainer.addEventListener("click", function(event){
    console.log(event.target.id);
    if(event.target.id!=='menu__toggle' && document.getElementById("menu__toggle").checked==true){
      
           document.getElementById("menu__toggle").checked=false;
                
            
    } 

  

  
});