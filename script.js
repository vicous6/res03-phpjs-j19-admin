import { routingCreate } from "./assets/js/users.js";
import { routingHomepage} from "./assets/js/users.js";

import { displayUpdateText} from "./assets/js/user.js";

import { getUserButton } from "./assets/js/users.js";
import { updateUserButton } from "./assets/js/users.js";
// import { deleteUserButton } from "./assets/js/users.js";
import { getAll } from "./assets/js/users.js";
import { getOne } from "./assets/js/user.js";
import "./assets/js/user.js";

window.addEventListener("DOMContentLoaded",function(){
    
  
    
    // creer la route vers create User
 
 
 if(window.location.href=== "https://victoroustiakine.sites.3wa.io/res03-phpjs-j19-admin/users.html"){
     
     getAll();
     routingHomepage();
     routingCreate();
      setTimeout(getUserButton, 150)  
     setTimeout(updateUserButton,150)
    //   setTimeout(deleteUserButton,150)
      
 }else if(window.location.href=== "https://victoroustiakine.sites.3wa.io/res03-phpjs-j19-admin/user.html"){
     
     getOne("user");
     routingCreate();
      routingHomepage();
       setTimeout(getUserButton, 150)  
     setTimeout(updateUserButton,150)
     
     
 }else if(window.location.href=== "https://victoroustiakine.sites.3wa.io/res03-phpjs-j19-admin/create-user.html"){
      routingCreate();
      routingHomepage();
     
     
 }
 else if(window.location.href=== "https://victoroustiakine.sites.3wa.io/res03-phpjs-j19-admin/update-user.html"){
      
      routingHomepage();
    setTimeout(  displayUpdateText(),1000)
     
     
 }

 

 
 
})
