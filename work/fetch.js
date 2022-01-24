function datafetch() {
  return fetch("/work/work.json")
    .then(res => res.json())
    .then((data) => { return data })
}

function show(data) {
  var con = document.querySelector("#work")

  data.forEach((projekt) => {
    con.innerHTML += `
      <div class="cardd">
        <div class="headerd">
          <h2>${projekt.projektName}</h2>
        </div>
        
        <div class="graytext">
        </div>
        
        <div class="imgcon flex widthfull padding aligncenter justifycenter">
          
          <img id="imgani" height='100%' width="100%" src="${projekt.image}">
        </div>
        
        <div class="flex aligncenter widthfull gap between">
          <!--button source code--!>
          <button class="buttondark">
            <a href="${projekt.link}" >See Live</a>
          </button>
           <!--button link-->
          <button class="buttondark">
            <a href="${projekt.sourceCode}">source code</a>
          </button>
         </div>
         
      </div>
    `
  })
}
datafetch().then((data) => {
  show(data)
})