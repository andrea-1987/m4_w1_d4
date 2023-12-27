//--- https://striveschool-api.herokuapp.com/api/deezer/search?q=pippo

let url =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=ligabue";

const fecthLiga = () => {
  fetch( url )
  .then((response) => {
    //   console.log(response)
    return response.json() })
    .then((data)=>{
        // let find=function(){
        // console.log(data.data)
        let inputValue=document.querySelector("#searchField").value.toLowerCase()
        let search=document.querySelector("#button_search")
        let trackList=document.querySelector("main")
        for( const track of data.data){
            // if(track.title.toLowerCase()===inputValue){
            console.log(track.title)
//     trackList.innerHTML=`<div class="card" style="width: 18rem;">
//     <img src="${track.album.cover_medium}" class="card-img-top" alt="...">
//     <div class="card-body">
//       <p class="card-text">${track.title}</p>
//     </div>
//   </div>`
        // }
    // }
            }    
})
};
fecthLiga();

