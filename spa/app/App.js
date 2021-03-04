import api from './helpers/wp_api.js'
import {ajax} from './helpers/ajax.js'
import {Title} from './component/Title.js'
import {Loader} from './component/Loader.js'

export function App(){

    const d = document,
       $root = d.getElementById("root");
       $root.appendChild(Title());
       $root.appendChild(Loader())

  
  
    
}