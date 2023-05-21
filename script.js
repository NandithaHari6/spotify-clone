let audioEle =new Audio("songs/pasoori.mp3");
let playBtn=document.getElementById("playBtn");
let next=document.getElementById("next");
let prev=document.getElementById("prev");
let progressBar=document.getElementById("mp");
playBtn.addEventListener("click",play);
let songlist=Array.from(document.getElementsByClassName("songItem"));
let title=document.getElementsByClassName("title");
let index=0;

let songs=[
    {   img:"images/img1.jpg",
        source:"songs/song1.mp3",
        name:"Thaalolam",
        timestamp:"4:12"
    }, {   img:"images/img2.jpg",
        source:"songs/song2.mp3",
        name:"Pathinaalam Raavinte",
        timestamp:"3:44"

    },{   img:"images/img3.jpg",
    source:"songs/pasoori.mp3",
    name:"Pasoori",
    timestamp:"3:44"

},{   img:"images/img4.webp",
source:"songs/song4.mp3",
name:"buddu sa mann",
timestamp:"3:44"

},

]
songlist.forEach((element,i)=>{
    element.getElementsByClassName("songicon")[0].src=songs[i].img;
    element.getElementsByClassName("songName")[0].innerText=songs[i].name;
})
function makeAllPlays(){
    Array.from(document.getElementsByClassName("songPlay")).forEach((element,i)=>{
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");
})}
Array.from(document.getElementsByClassName("songPlay")).forEach((element,i)=>{
    element.addEventListener('click',(e)=>
    {makeAllPlays();
        
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        index=parseInt(e.target.id);
        audioEle.src=songs[index].source;
        audioEle.currentTime=0;
        audioEle.play();
        title.innerText=songs[index].name;
        playBtn.classList.remove("fa-play");
        playBtn.classList.add("fa-pause");

        
    })
   
    
})


function play(){
    if(audioEle.paused||audioEle.currentTime<=0){  audioEle.play();
    let currIcon=document.getElementById(index.toString())
    currIcon.classList.remove("fa-play");
    currIcon.classList.add("fa-pause");
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");

}
else{
    audioEle.pause();
    makeAllPlays();
    playBtn.classList.remove("fa-pause");
    playBtn.classList.add("fa-play");
}}
audioEle.addEventListener("timeupdate",updateProgress);
function updateProgress(){
    progress=parseInt((audioEle.currentTime/audioEle.duration)*100);
    // console.log(progress);
    progressBar.value=progress;
}

progressBar.addEventListener("change",seek);
function seek(){
    progress=progressBar.value;
    // console.log((progress*audioEle.duration)/100);
    audioEle.currentTime=((progress*audioEle.duration)/100);
}
next.addEventListener('click',nextPlay);
function nextPlay(){
    if(index>=songs.length){
        index=0;}
        else{
            index+=1;
        }
        makeAllPlays();
        let icon1=document.getElementById(index.toString());
            icon1.classList.remove("fa-play");
            icon1.classList.add("fa-pause");
           
            audioEle.src=songs[index].source;
            audioEle.currentTime=0;
            audioEle.play();
            title.innerText=songs[index].name;
            playBtn.classList.remove("fa-play");
            playBtn.classList.add("fa-pause");
            
    

    
}
prev.addEventListener('click',prevPlay);
function prevPlay(){
    if(index<=0){
        index=(songs.length)-1;}
        else{
            index-=1;
        }
        makeAllPlays();
        let icon1=document.getElementById(index.toString());
            icon1.classList.remove("fa-play");
            icon1.classList.add("fa-pause");
           
            audioEle.src=songs[index].source;
            audioEle.currentTime=0;
            audioEle.play();
            title.innerText=songs[index].name;
            playBtn.classList.remove("fa-play");
            playBtn.classList.add("fa-pause");
            
    

    
}