import api from "../helpers/wp_api.js";
import {ajax} from "../helpers/ajax.js"
import {PostCard} from "./PostCard.js"


export function Rutas(){

    const d = document,
          w = window,
      $post = d.getElementById("posts") ;  
    let {hash} =location;
    console.log(hash);

   if (!hash || hash === "#/") {
        //d.getElementById("posts").innerHTML =`<h2>seccion del home</h2>`
       ajax({
       url: api.POST,
       cbSuccess:(posts)=>{
           console.log(posts);
           let html = "";
           posts.forEach(post => { html += PostCard(post); });
           d.querySelector(".loader").style.display = "none";
           $post.innerHTML = html;
    
           },
       })  
       
    }else if (hash.includes("#/search")) {
        $post.innerHTML =`<h2>seccion del buscardpor</h2>`
        
    } else if(hash === "#/contacto"){
        $post.innerHTML =`<h2>seccion del contacto</h2>`
       
   }else{
    $post.innerHTML =`<h2>cargar el contenido del post previamente seleccionado</h2>`
   }
    

}