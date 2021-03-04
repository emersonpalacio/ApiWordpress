import api from './helpers/wp_api.js'
import {ajax} from './helpers/ajax.js'
import {Title} from './component/Title.js'
import {Header} from './component/Header.js'
import {Loader} from './component/Loader.js'
import { Post } from './component/Post.js'


import { PostCard } from './component/PostCard.js'
import { Rutas } from './component/Rutas.js'


export function App(){
    const  $root = document.getElementById("root");
       
       $root.appendChild(Header());
       $root.appendChild(Post());
       $root.appendChild(Loader());       
      Rutas();
       


}