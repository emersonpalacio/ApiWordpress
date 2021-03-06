import api from './helpers/wp_api.js'
import {ajax} from './helpers/ajax.js'
import {Title} from './component/Title.js'
import {Header} from './component/Header.js'
import {Loader} from './component/Loader.js'
import { Main } from './component/Main.js'


import { PostCard } from './component/PostCard.js'
import { Rutas } from './component/Rutas.js'
import { inifinit_scroll } from './helpers/inifinit_scroll.js'


export function App(){
    const  $root = document.getElementById("root");

       $root.innerHTML=null;   
       $root.appendChild(Header());
       $root.appendChild(Main());
       $root.appendChild(Loader());       
      Rutas();
      inifinit_scroll();
      
       


}