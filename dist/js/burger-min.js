const mainContainer=document.getElementsByClassName("main_container")[0];mainContainer.addEventListener("click",function(e){console.log(e.target.id),"menu__toggle"!==e.target.id&&1==document.getElementById("menu__toggle").checked&&(document.getElementById("menu__toggle").checked=!1)});