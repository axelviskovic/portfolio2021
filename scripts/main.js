const backgroundContainer = document.querySelector('.backgroundContainer')
const textPresentation = document.querySelector('.textPresentation')
const body = document.querySelector('body')
const navBar = document.querySelector('.navBar')
const dotNavBar = document.querySelectorAll('.dotNavBar')
const textDot = document.querySelectorAll('.textDot')
const loadingBar = document.querySelector('.loadingBar')
const barComplete = document.querySelector('.barComplete')
const purpleBar = document.querySelector('.purpleBar')
const infosContainer = document.querySelector('.infosContainer')
const infosContainer2 = document.querySelector('.infosContainer2')
const videoSimpson = document.querySelector('video')

maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight - 300

videoSimpson.currentTime=40

window.addEventListener(
    'scroll',
    ()=>{
        const scrolled = window.scrollY
        if(scrolled>120){
        backgroundContainer.style.width="100%"
        textPresentation.style.top="0%"
        textPresentation.style.opacity="0"
        body.style.backgroundColor="#7648FF"
        infosContainer.style.opacity="0"
        infosContainer2.style.opacity="0"
        navBar.style.height="100%"
        navBar.style.top="0"
        }
        if(scrolled<120){
            backgroundContainer.style.width="60%"
            textPresentation.style.top="10%"
            textPresentation.style.opacity="1"
            infosContainer.style.opacity="1"
            infosContainer2.style.opacity="1"
            navBar.style.height="calc(100vw*0.27)"
            navBar.style.top="34%"
            }
        for(let i=0; i<dotNavBar.length; i++){
            if(scrolled<120){
                for(let j=0; j<dotNavBar.length;j++){
                    dotNavBar[i].style.backgroundColor="#1D1D1D"
                    textDot[i].style.fontSize="16px"
                    loadingBar.style.opacity="0"
                }
                dotNavBar[0].style.backgroundColor="#7648FF"
                textDot[0].style.fontSize="20px"
            }
            if(scrolled>150 && scrolled<3600){
                for(let j=0; j<dotNavBar.length;j++){
                    dotNavBar[i].style.backgroundColor="#1D1D1D"
                    textDot[i].style.fontSize="16px"
                    loadingBar.style.opacity="1"
                    body.style.backgroundColor="#1D1D1D"
                    barComplete.style.width=100*(scrolled-150)/(maxScroll-150)+"%"
                    purpleBar.style.width=100*(scrolled-150)/(maxScroll-150)+"%"
                    purpleBar.style.opacity=(scrolled-150)/(maxScroll-150)
                }
                dotNavBar[1].style.backgroundColor="#7648FF"
                textDot[1].style.fontSize="20px"
            }
            if(scrolled>3600){
                for(let j=0; j<dotNavBar.length;j++){
                    dotNavBar[i].style.backgroundColor="#1D1D1D"
                    textDot[i].style.fontSize="16px"
                    loadingBar.style.opacity="0"
                }
                dotNavBar[2].style.backgroundColor="#7648FF"
                textDot[2].style.fontSize="20px"
            }
        }
    }
)

const detailsRealisationContainer = document.querySelectorAll('.detailsRealisationContainer')
const voirPlus = document.querySelectorAll('.voirPlus')
const closeDetails = document.querySelectorAll('.closeDetails')
const blackDiv = document.querySelectorAll('.blackDiv')

for(let i=0; i<voirPlus.length;i++){
    voirPlus[i].addEventListener(
        'click',
        ()=>{
            detailsRealisationContainer[i].style.display='block'
            detailsRealisationContainer[i].style.top=window.scrollY+"px"
            body.style.overflow='hidden'

            closeDetails[i].addEventListener(
                'click',
                ()=>{
                    detailsRealisationContainer[i].style.display='none'
                    body.style.overflow='scroll'
                    body.style.overflowX='hidden'
                }
            )

            blackDiv[i].addEventListener(
                'click',
                ()=>{
                    detailsRealisationContainer[i].style.display='none'
                    body.style.overflow='visible'
                    body.style.overflowX='hidden'
                }
            )

        }
    )
}

// const slider = document.querySelectorAll('.slider')

// for(let i=0;i<slider.length;i++){

//     let pos = 0
//     action = setInterval(
//             ()=>{
//                 slider[i].style.left = pos*(-600)+"px"
//                 pos++
//                 if(pos==4){
//                     pos=0
//                 }
//             },2400
//         )

// }

const video = document.querySelector('.videoDetails')
const simpsonDivContainer = document.querySelector('.simpsonDivContainer')

let playVideo = true

simpsonDivContainer.addEventListener(
    'mouseover',
    ()=>{
        video.play()
    }
)

document.addEventListener('keydown', function (e){ // les touches au clavier 
    if(e.keyCode == 70) { // F
        if(playVideo == true){
            video.requestFullscreen()
        }
    }
    if(e.keyCode == 32) { // espace
        if(playVideo==false){
            video.play()
            playVideo = true
        }
        else{
            video.pause()
            playVideo = false
        }
    
    }
}
)

const quiSuisJe = document.querySelector('#quiSuisJe')
const mesRealisations = document.querySelector('#mesRealisations')
const maMusique = document.querySelector('#maMusique')

quiSuisJe.addEventListener(
    'click',
    ()=>{
        window.scrollTo(0, 0);
    }
)

mesRealisations.addEventListener(
    'click',
    ()=>{
        window.scrollTo(0, 740);
    }
)

maMusique.addEventListener(
    'click',
    ()=>{
        window.scrollTo(0,5000)
    }
)

const txtRealisationContainerVSK = document.querySelector(".txtRealisationContainerVSK")
const noBorderRadius = document.querySelector('.noBorderRadius:first-child')
const noBorderRadius2 = document.querySelector('.noBorderRadius:last-child')


txtRealisationContainerVSK.addEventListener(
    'mouseover',
    ()=>{
        noBorderRadius.style.opacity = "0"
        noBorderRadius2.style.opacity = ".6"
        txtRealisationContainerVSK.style.transition="all 3s ease"
        txtRealisationContainerVSK.style.transform="scale(1.2)"

        txtRealisationContainerVSK.addEventListener(
            'mouseout',
            ()=>{
                noBorderRadius.style.opacity = "1"
                txtRealisationContainerVSK.style.transform="scale(1)"
            }
        )

    }
)