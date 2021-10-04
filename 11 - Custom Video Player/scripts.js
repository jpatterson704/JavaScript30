const video = document.querySelector('video.player__video');
const playButton = document.querySelector('button.player__button.toggle');
const volumeCtl = document.querySelector('input[name="volume"]');
const speedCtl = document.querySelector('input[name="playbackRate"]');
const backForwardButtons = document.querySelectorAll('button.player__button[data-skip]');
const progressBar = document.querySelector('div.progress');
const progressBarFill = document.querySelector('div.progress__filled');
let holdMouse = false;

function togglePlay(){
    if(video.paused){
        video.play();
        playButton.innerHTML='⏸'
    }
    else{
        video.pause();
        playButton.innerHTML='►'
    }
}

function updateProgressBar(){
    let fillPer = (video.currentTime/video.duration)*100;
    progressBarFill.setAttribute("style", `flex-basis: ${fillPer}%;`);
}

function updateVolume(e){
    video.volume= e.target.value ;
}

playButton.addEventListener('click',togglePlay);
video.addEventListener('click',togglePlay);
video.addEventListener ('timeupdate' ,updateProgressBar);

volumeCtl.addEventListener( 'input',updateVolume);

speedCtl.addEventListener( 'input', (e)=>{
    video.playbackRate = e.target.value ;
});

backForwardButtons.forEach( (button)=>{
    button.addEventListener( 'click', (e)=>{
        // video.curren
        video.currentTime+= +button.dataset.skip
    })
})

progressBar.addEventListener( 'click',  e =>{
    video.currentTime= (e.offsetX*video.duration)/progressBar.offsetWidth;
    updateProgressBar();
})

progressBar.addEventListener('mousedown',(e)=>{
    holdMouse= true;
    console.log('mousedown', e.offsetX)
    video.currentTime= (e.offsetX*video.duration)/progressBar.offsetWidth;
});
progressBar.addEventListener('mouseup',(e)=>{
    console.log('mouseup');
    holdMouse= false;
    video.currentTime= (e.offsetX*video.duration)/progressBar.offsetWidth;
    updateProgressBar();
});
progressBar.addEventListener('mousemove',(e)=>{
    if(holdMouse){
        video.currentTime= (e.offsetX*video.duration)/progressBar.offsetWidth;
        updateProgressBar();
    }
 
});

