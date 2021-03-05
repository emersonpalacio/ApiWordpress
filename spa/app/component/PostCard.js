export function PostCard(props) {
  let { date, title, slug, _embedded , id} = props;
  let dateFormat = new Date(date).toLocaleString();
//   let urlPoster = _embedded["wp:featuredmedia"]
//     ? _embedded["wp:featuredmedia"][0].source_url
//     : "../assets/logoTerminado512x512.png";
document.addEventListener("click",(e) =>{
  if(!e.target.matches(".post-card a"))return false;
  localStorage.setItem("wpPostId", e.target.dataset.id);
 
});

  return `
     <article class="post-card">
      <img  src="https://placeimg.com/200/200/any" alt ="${title.rendered}">
       <h4>${title.rendered} </h4>
       <p>
         <time datetime="${date}"> ${dateFormat}</time>
         <a href="#/${slug}" data-id="${id}">Ver publicacion</a>
       </p>       
     </article>
    `;
}
