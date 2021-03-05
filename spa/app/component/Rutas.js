import api from "../helpers/wp_api.js";
import {ajax} from "../helpers/ajax.js"
import {PostCard} from "./PostCard.js"
import {Post} from '../component/Post.js'



export  async function Rutas(){

    const d = document,
          w = window,
      $main = d.getElementById("main") ;  
    let {hash} =location;
    console.log(hash);

    $main.innerHTML =null;

   if (!hash || hash === "#/") {
        //d.getElementById("posts").innerHTML =`<h2>seccion del home</h2>`
       await ajax({
       url: api.POST,
       cbSuccess:(posts)=>{
           console.log(posts);
           let html = "";
           posts.forEach(post => { html += PostCard(post); });
          // d.querySelector(".loader").style.display = "none";
           $main.innerHTML = html;
    
           },
       })  
       //console.log(api.POST);
    }else if (hash.includes("#/search")) {
        $main.innerHTML =`<h2>seccion del buscardpor</h2>`
        //d.querySelector(".loader").style.display = "none";
        
    } else if(hash === "#/contacto"){
        $main.innerHTML =`<h2>seccion del contacto</h2>`
        //d.querySelector(".loader").style.display = "none";
       
   }else{
    $main.innerHTML =`<h2>cargar el contenido del post previamente seleccionado</h2>`    
    //console.log(`${api.POST}/${localStorage.getItem("wpPostId")}`);
    await ajax({
        url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
        cbSuccess:(post)=>{
            console.log(post);
            $main.innerHTML = Post(post);    
            },
        }) 
   }    

   d.querySelector(".loader").style.display = "none";

}