const video = document.querySelector('.player__video');
const playButton = document.querySelector('button.player__button.toggle');
const volumeCtl = document.querySelector('input[name="volume"]');
const speedCtl = document.querySelector('input[name="playbackRate"]');
const backForwardButtons = document.querySelectorAll('button.player__button[data-skip]');
const progressButton = document.querySelector('div.progress');

playButton.addEventListener('click', (e)=>{
    console.log(e,video.paused);
    if(video.paused){
        video.play();
        playButton.innerHTML='⏸'
    }
    else{
        video.pause();
        playButton.innerHTML='►'
    }
       
})

volumeCtl.addEventListener( 'input', (e)=>{
    video.volume= e.target.value ;
});

speedCtl.addEventListener( 'input', (e)=>{
    video.playbackRate = e.target.value ;
});

backForwardButtons.forEach( (button)=>{
    console.log(video.currentTime)
    button.addEventListener( 'click', (e)=>{
        // video.curren
        video.currentTime+= +button.dataset.skip
        console.log(video.currentTime, button.dataset.skip)
    })
})

progressButton.addEventListener( 'click',  e =>{
    console.log((e.offsetX))
})