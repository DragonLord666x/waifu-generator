let waifuImg = document.getElementById('waifu-img')
let trapImg = document.getElementById('trap-img')

let waifuBtn = document.getElementById('waifu-btn')
let trapBtn = document.getElementById('trap-btn')

waifuBtn.addEventListener('click', randomWaifu)
trapBtn.addEventListener('click', randomTrap)


function randomWaifu(){
    fetch('https://api.waifu.im/random/?selected_tags=hentai')
    .then( res => res.json())
    .then(data => {
        waifuImg.innerHTML = `<img src="${data.images[0].url}">`
    })

    waifuBtn.style.display = 'none'
    waifuImg.style.height = '500px'

    setTimeout(
        function(){
            waifuBtn.style.display = 'block'
            waifuImg.style.height = '400px'
        }, 60000
    )
}

function randomTrap(){
    fetch('https://api.waifu.pics/nsfw/trap')
    .then( res => res.json())
    .then(data => {
        trapImg.innerHTML = `<img src="${data.url}">`
    })

    trapBtn.style.display = 'none'
    trapImg.style.height = '500px'

    setTimeout(
        function(){
            trapBtn.style.display = 'block'
            trapImg.style.height = '400px'
        }, 60000
    )

}

