
import { PostCard } from '../component/PostCard.js';
import { SearchCard } from '../component/SearchCard.js';
import api from '../helpers/wp_api.js'
import { ajax } from './ajax.js';
export async function inifinit_scroll(params) {
    const d = document,
          w = window;

    let query = localStorage.getItem("wpSearch"),
        apiURl, 
        Component;//Hight Order Component
    w.addEventListener("scroll",async (e) =>{
        let {scrollTop, clientHeight, scrolllHight} = d.documentElement,
            {has} = w.location;
            //console.log(scrollTop,clientHeight, scrolllHight, has);

            if (scrollTop + clientHeight >= scrolllHight ) {
                api.page++;
                if (!has || has === "#/") {
                    apiURl = `${api.POSTS}&page${api.page}`
                    Component= PostCard; 
                }else if(has.includes("#/search")){
                    apiURl = `${api.SEARCH}${query}&page=${api.page}`
                    Component = SearchCard;               
                }else{
                    return false;
                }
               await ajax({
                 url:apiURl,
                 cbSuccess: (post)=>{
                     //console.log(post);
                     let html ="";
                     post.forEach(post => html +=Component());
                     d.getElementById("main").insertAdjacentHTML("beforeend",html);
                 },
               })
            }
    });
}