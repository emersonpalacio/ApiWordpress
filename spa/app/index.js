import api from './helpers/wp_api.js'
import {App} from "./App.js"

const d = document ,
      w = window;

d.addEventListener("DOMContentLoaded", App)
w.addEventListener("hashchange",()=>{
   api.page =1;
    App()
});



