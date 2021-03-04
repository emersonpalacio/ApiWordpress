import {App} from "./App.js"

const d = document ,
      w = window;

d.addEventListener("DOMContentLoaded", App)
w.addEventListener("hashchange",App);



