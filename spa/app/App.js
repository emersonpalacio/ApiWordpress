import api from './helpers/wp_api.js'
import {ajax} from './helpers/ajax.js'
import {Title} from './component/Title.js'
import {Header} from './component/Header.js'
import {Loader} from './component/Loader.js'
import { Post } from './component/Post.js'

import { PostCard } from './component/PostCard.js'

export function App(){
    const d = document,
       $root = d.getElementById("root");

       $root.appendChild(Title());
       $root.appendChild(Loader());
       $root.appendChild(Header());
       $root.appendChild(Post());
       

    ajax({
        url: api.POST,
        cbSuccess:(posts)=>{
            console.log(posts);
            let html = "";
            posts.forEach(post => { html += PostCard(post); });
            d.querySelector(".loader").style.display = "none";
            d.getElementById("posts").innerHTML = html;

        } ,
    })


    
}