//import data from './js/translate.js'
import data from './js/translate.js'
console.log(data)

let btn = document.querySelector('.hamburger');
let navMenu = document.querySelector('.nav-list');

btn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  btn.classList.toggle('close');
});

navMenu.addEventListener('click', (event) => {
  console.log(event)
  if (event.target.classList.contains('page-nav__link')) {
    navMenu.classList.remove('show');
    btn.classList.toggle('close')
  }
})

// ru /eng
let btnLn = document.querySelectorAll("[data-lang]");

console.log(btnLn)

function getLanguage(lang){
	let all=document.querySelectorAll('*[data-i18n]')
	all.forEach(function(el,i){
		if (lang=='ru'){
			el.textContent=data.ru[el.dataset.i18n];
			if(el.placeholder){
				el.placeholder=data.ru[el.dataset.i18n]
				el.textContent = ''
			}
		}
		if (lang=='en'){
			el.textContent=data.en[el.dataset.i18n];
		}
	})
	console.log(lang);
}
document.querySelectorAll('.lang1').forEach(function(el){
	el.addEventListener('click',function(event){
		if (event.target.dataset.lang==='ru'){
			getLanguage(event.target.dataset.lang)
		}
		if (event.target.dataset.lang==='en'){
			getLanguage(event.target.dataset.lang)
		}
	})
})

const portfolioBtns = document.querySelector('.gallery-switcher');
const portfolioImages = document.querySelectorAll('.gallery__item');



function changeImage(event) {
	if(event.target.dataset.season==='winter') {
		portfolioImages.forEach((img, index) => img.src = `./assets/img1/winter/${index + 1}.jpg`);
	}
	if(event.target.dataset.season==='summer') {
		portfolioImages.forEach((img, index) => img.src = `./assets/img1/summer/${index + 1}.jpg`);
	}
	if(event.target.dataset.season==='spring') {
		portfolioImages.forEach((img, index) => img.src = `./assets/img1/spring/${index + 1}.jpg`);
	}
	if(event.target.dataset.season==='autumn') {
		portfolioImages.forEach((img, index) => img.src = `./assets/img1/autumn/${index + 1}.jpg`);
	}
  }

  portfolioBtns.addEventListener('click',changeImage)



  const portfolioBtn = document.querySelectorAll('.button');
  portfolioBtn.forEach(function (el){
	  el.addEventListener('click',function(event) {
		portfolioBtn.forEach(function(elem){
			elem.classList.remove('button_light')
		})
		if(event.target.classList.contains('button')){
			event.target.classList.add('button_light')
		}
	  })
})

  

  function changeTheme(btnTheme) {
    if(btnTheme==='dark'){
      document.body.style.backgroundColor ='black'
      document.querySelector('.header-container')
      .style.backgroundImage ='url("./assets/img/header-bg.jpg")';
      document.querySelector('.hero-container')
      .style.backgroundImage ='url("./assets/img/header-bg.jpg")';
      document.querySelector('.contacts')
      .style.backgroundImage ='url("./assets/img/contacts.jpg")';
      // document.querySelector('.section-title').style.color ='#bdae82';
      document.querySelectorAll('.text').forEach(function(el){
        el.classList.remove('text-light')
        
      })
      document.querySelectorAll('.icon').forEach(function(el){
        el.classList.remove('cw')
      })
      document.querySelectorAll('.portfolioBtn').forEach(function(el){
        el.classList.toggle('light')
      })
      document.querySelectorAll('[placeholder]').forEach(function(el){
        el.classList.remove('place')
      })
      document.querySelectorAll('.section-title').forEach(function(el){
        el.classList.remove('light')
      })
      document.querySelector('[data-theme="light"]').classList.remove('dn')
      document.querySelector('[data-theme="dark"]').classList.add('dn')
    
     }
    if(btnTheme=='light'){
      document.body.style.backgroundColor ='white'
      document.querySelectorAll('.text').forEach(function(el) {
        el.classList.add('text-light')
      })
      document.querySelector('.hero-container')
      .style.backgroundImage ='url("./assets/img/bg-light.jpg")';
      document.querySelector('.hero-container')
      .style.backgroundImage ='url("./assets/img/bg-light.jpg")';
      document.querySelector('.contacts')
      .style.backgroundImage ='url("./assets/img/bg-light2.jpg")';
      document.querySelector('.section-title').style.color ='black';
      document.querySelectorAll('.text').forEach(function(el){
        el.classList.add('text-light')
      })
      document.querySelectorAll('[placeholder]').forEach(function(el){
        el.classList.add('place')
      })
      document.querySelectorAll('.section-title').forEach(function(el){
        el.classList.add('light')
      })
    document.querySelectorAll('.icon').forEach(function(el){
      el.classList.add('cw')
    })
      document.querySelector('[data-theme="dark"]').classList.remove('dn')
      document.querySelector('[data-theme="light"]').classList.add('dn')
      document.querySelector('.contact').classList.add('light')
     }
  }
  themeBtn()

  function themeBtn(){
    let btns=document.querySelectorAll('[data-theme]')
    
    btns.forEach(function(el){
      el.addEventListener('click',function(event){
        if(event.target.dataset.theme==='dark'){
          changeTheme(el.dataset.theme)
        }
        if(event.target.dataset.theme==='light'){
          changeTheme(el.dataset.theme)
        }
      })
    })
}
  


 
// let video;
// let display;

const vidWrapper = document.querySelector('div.player');
const myVid = vidWrapper.querySelector('video.player__video');

// controls
const controlPlay = vidWrapper.querySelector('.player__button');
const controlVol = vidWrapper.querySelector('.player__slider[name="volume"]');
const controlRate = vidWrapper.querySelector('.player__slider[name="playbackRate"]');
const controlSkip = vidWrapper.querySelectorAll('.player__button[data-skip]');
const controlFullScreen = vidWrapper.querySelector('.player__fullscreen');
const controlProgress = vidWrapper.querySelector('.progress');
const progressBar = vidWrapper.querySelector('.progress__filled');

// events
var drag;
var grap;

myVid.addEventListener('click', toggleVideo);
controlPlay.addEventListener('click', toggleVideo);
controlVol.addEventListener('change', updateVol);
controlRate.addEventListener('change', updateRate);
controlFullScreen.addEventListener('click', goFullScreen);
controlSkip.forEach(control => control.addEventListener('click', forward));
controlProgress.addEventListener('mouseover', function(){drag = true});
controlProgress.addEventListener('mouseout', function(){drag = false; grap = false});
controlProgress.addEventListener('mousedown', function(){grap = drag});
controlProgress.addEventListener('mouseup', function(){grap = false});
controlProgress.addEventListener('click', updateCurrentPos);
controlProgress.addEventListener('mousemove', function(e){ if(drag && grap){updateCurrentPos(e)}});

var progression;

// functions
function toggleVideo() {
  if (myVid.paused) {
    myVid.play();
    controlPlay.innerHTML = "❚ ❚";
    updateProgress();
    progression = window.setInterval(updateProgress, 200);
  } else {
    myVid.pause();
    controlPlay.innerHTML = "►";
    clearInterval(progression);
  };
}
function updateVol(){
  var volume = this.value;
  myVid.volume = volume;
}
function updateRate(){
  var rate = this.value;
  myVid.playbackRate = rate;
}
function goFullScreen(){
  console.dir(myVid);
  if(myVid.webkitSupportsFullscreen) myVid.webkitEnterFullScreen();
}
function forward(){
  var value = Number(this.dataset.skip);
  myVid.currentTime = myVid.currentTime + value;
}
function updateProgress() {
  var progress = myVid.currentTime / myVid.duration;
  progressBar.style.flexBasis = Math.floor(progress * 1000) / 10 + '%';
}
function updateCurrentPos(e){
  // offset of the progress bar / video wrapper width
  var newProgress = (e.clientX - vidWrapper.offsetLeft) / vidWrapper.clientWidth;
  progressBar.style.flexBasis = Math.floor(newProgress * 1000) / 10 + '%';
  myVid.currentTime = newProgress * myVid.duration;
}



// video = document.querySelector('#video-player');

// function play() {
//   video.play();
// }
// function pause() {
//   video.pause();
// }
// function stop() {
//   video.pause();
//   video.currentTime = 0;
// }
// function videoVolume() {
//   let v = this.value;
//   video.volume = v / 100;
// }
// document.querySelector('controls').onclick = play;
// document.querySelector('play').onclick = pause;
// document.querySelector('progress').onclick = stop;
// document.querySelector('volume').oninput = videoVolume;

// let video;
// let display;
// video = document.querySelector('#video-player');

// function controls() {
//   video.controls();
// }
// function progress() {

//   video
// }
// function progress() { }
// function volume() {

// }


