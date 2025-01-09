const RigaElm = document.getElementById("riga")



    function generateFullCard(){
        axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
        .then(function (image) {
          const ImageApi = image.data
            console.log(ImageApi)
           ImageApi.forEach(Card => {
                const title = Card.title
                const img = Card.url
                RigaElm.innerHTML += `
                <div class="col-lg-4 col-sm-6 d-flex justify-content-center pt-4">
                <div class="card p-2" style="width: 18rem; min-height: 333px">
                    <div id="image-1" class="size-img">
                        <img src="${img}" alt="FotoRicordoEstate">
                        <p class="card-text">${title}</p>
                    </div>
                </div>
              </div>`
           });
          })
    }   
       
generateFullCard()
