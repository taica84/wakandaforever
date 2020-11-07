

   


//AUDIO AUTOPLAY






// upload password

function checkPasswordMary(){
    var passwordText = document.getElementById('passwordBoxMary').value;
    if(passwordText === 'donnacorleonne') {
       
        return true;
    }else{
        alert('Ce-ai fa ,te-ai perdut :)))');
        return false;
    }
  
};

function checkPasswordTeo(){
    var passwordText = document.getElementById('passwordBoxMary').value;
    if(passwordText === 'blackscarlett') {
        return true;
    }else{
        alert('Ce-ai fa ,te-ai perdut :)))');
        return false;
    }
  
};

function checkPasswordDaria(){
    var passwordText = document.getElementById('passwordBoxMary').value;
    if(passwordText === 'sdm17') {
        return true;
    }else{
        alert('Ce-ai fa ,te-ai perdut :)))');
        return false;
    }
  
};


// Gallery password Mary
var videoGallery = document.querySelector('.thumbnails')
var galleryMary = document.querySelector('.box.input');
var buttonMary = document.getElementById('button-mary');

var playMary = document.getElementById('play-mary');
var playTeo = document.getElementById('play-teo');
var playDaria = document.getElementById('play-daria');



playMary.addEventListener('click' , () => {
    var inputMary = document.getElementById('input-mary').value;
   if(inputMary === 'donnacorleonne') {
        videoGallery.classList.remove('fading');
        galleryMary.classList.add('fading'); 
        return true;
    }else{
        alert('Ce-ai fa, te-ai perdut :)))');
        return false
    }
});

// Gallery password Teo



playMary.addEventListener('click' , () => {
    var inputTeo = document.getElementById('input-teo').value;
   if(inputTeo === 'blackscarlett') {
        videoGallery.classList.remove('fading');
        galleryMary.classList.add('fading'); 
        return true;
    }else{
        alert('Ce-ai fa, te-ai perdut :)))');
        return false
    }
});

// Gallery password daria


playMary.addEventListener('click' , () => {
    var inputDaria = document.getElementById('input-daria').value;
   if(inputDaria === 'sdm17') {
        videoGallery.classList.remove('fading');
        galleryMary.classList.add('fading'); 
        return true;
    }else{
        alert('Ce-ai fa, te-ai perdut:)))');
        return false
    }
});




// PLAY music backround



//watch video password
// var playBtn = document.getElementById('play-button');
// var close = document.querySelectorAll('.close');
// var trailer = document.querySelectorAll('.play_video');
// var video = document.getElementsByTagName('video')
// var addPassword = document.getElementsByClassName('choose-password');
// var removePassword = document.getElementsByClassName('remove-password');
// var visiblePassword = document.getElementsByClassName('box-hide');
// var popUpPassword = document.querySelectorAll('.pop_up')
// var videoPassword = document.querySelectorAll('.video_password');

// console.log(video)



// function playVideoPopUp() {
    
//     if(videoPassword.value === 'donnacorleonne') {
//         trailer.classList.add('active');
//         return true;
//     }else{
//         alert('Ce-ai fa ,te-ai perdut :)))');
//         return false;
//     }

// }

// close.addEventListener('click' , () => {
//       trailer.classList.remove('active');
//       video.pause();
//       video.currentTime = 0 ;
// });


// add password


//    for(var i = 0 ; i < addPassword.length ; i++) {
//        addPassword[i].addEventListener('click', addPasswordToWatch,false)
//    }

//     function addPasswordToWatch(e){
//           if(e.target) {
//               visiblePassword.classList.add('reveal')
//               }
              
//           }    
  
 
     



 
    // visiblePassword.forEach(addPasswordToWatch);

    // function addPasswordToWatch() {
    //     for(var i ; i < visiblePassword.length; i++) {
    //         visiblePassword[i].classList.add('reveal')
    //     }    
    // }
  
     





// remove password
// removePassword.addEventListener('click' , () => {
//     for(var i = 0 ; i < visiblePassword.length; i++){
//         visiblePassword[i].classList.remove('reveal')
//     }
// });
  




