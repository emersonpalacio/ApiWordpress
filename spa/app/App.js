import api from './helpers/wp_api.js'
import {ajax} from './helpers/ajax.js'

export function App(){
    document.getElementById("root").innerHTML=`<h1> hola desde emerson App</h1>`
    
    ajax({
        url:api.POST,
        cbSuccess : (posts)=>{
            console.log(posts)
        }
    });

    ajax({
        url:api.CATEGORIES,
        cbSuccess : (categories)=>{
            console.log(categories)   
        }
    });
    
    ajax({
        url:api.POSTS,
        cbSuccess : (posts)=>{
            console.log(posts)   
        }
    });

    ajax({
        url:api.SEARCH,
        cbSuccess : (search)=>{
            console.log(search)   
        }
    });

    ajax({
        url:api.SITE,
        cbSuccess : (site)=>{
            console.log(site)   
        }
    });

    console.log(api)
    
}