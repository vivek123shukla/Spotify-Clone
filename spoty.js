console.log("welcome to spotify")
//Initialize the variables
let play=document.getElementById('play');
function playmusic(){
    let audio=new Audio("2.mp3");
    audio.play();
}
play.addEventListener("click",playmusic);

let songIndex=0;
let audioElement=new Audio("2.mp3.mp3");
let masterplay=document.getElementById('masterplay');
let myprogressBar=document.getElementById('myprogressBar')


let songs=[
    {songName:"salam-e-Ishq",filePath:"1.mp3",coverPath:"covers/1.jpg"},
    {songName:"salam-e-Ishq",filePath:"1.mp3",coverPath:"covers/1.jpg"},
    {songName:"salam-e-Ishq",filePath:"1.mp3",coverPath:"covers/1.jpg"},
    {songName:"salam-e-Ishq",filePath:"1.mp3",coverPath:"covers/1.jpg"},
    {songName:"salam-e-Ishq",filePath:"1.mp3",coverPath:"covers/1.jpg"},
    {songName:"salam-e-Ishq",filePath:"1.mp3",coverPath:"covers/1.jpg"},
    {songName:"salam-e-Ishq",filePath:"1.mp3",coverPath:"covers/1.jpg"},

]

// audioElement.play();

//Handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
    }
})

//Listen to event
myprogressBar.addEventListener("timeupdate",()=>{
         console.log('time update');
         //update Seekbar
})