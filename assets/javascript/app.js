//Execute this code once the DOM has fully loaded
$(document).ready(function() {

// <!--pseudo coded prokect from readme below--> 

//api 
//   var config = {
//     apiKey: "AIzaSyAZ014zFO7UiMyE4mD1RpAgyeFZIK13X8M",
//     authDomain: "facejam-7e7f0.firebaseapp.com",
//     databaseURL: "https://facejam-7e7f0.firebaseio.com",
//     projectId: "facejam-7e7f0",
//     storageBucket: "facejam-7e7f0.appspot.com",
//     messagingSenderId: "592333101979"
//   };
//   firebase.initializeApp(config);

 
// <!--##Project Description: This project generates a song to match your mood. -->

// <!--The user will upload their own photo via the upload form, using file type valiation. -->
var thumb = $('img#thumb');        

new AjaxUpload('userImageUpload', {
    //this specifies where we want to post the Ajax upload. It's important to keep the urls in HTML so it passes through. 
  action: $('form#newHotnessForm').attr('action'),
  //post name of file form you want reflect in server
  name: 'userimage',
  //we added a class to indicate that the image is uploading
  //diplay:none; must be the img tage so that the image that is uploaded is visible to users
  onSubmit: function(file, extension) {
    $('div.preview').addClass('loading');
  },
  //onComplete pushes the image through to upload. we unbind it so that the event only runs through once
  //
  onComplete: function(file, response) {
    thumb.load(function(){
      $('div.preview').removeClass('loading');
      thumb.unbind();
    });
    //this runs the function to respond in the html.
    thumb.attr('src', response);
  }
});










// <!--We use the face recognition API, -->
// <!--Face++, -->
// <!--to capture your expression in the photo -->
// <!--and quantify your mood based on an algorithm of emotions. -->
// <!--The highest scoring emotion will be used as the indicator for song choice -->
// <!--from the SoundCloud API. -->
// <!--The song played will be displayed in a table, listing; song title, artist, and release date. -->


//temporary array to troubleshoot the next button
var songArray = ["assets/javascript/captainplanet24.mp3", "assets/javascript/AutumnLeaves_AndreBenjamin.wav", "assets/javascript/KeptSecrets.mp3", "assets/javascript/LittleLandslides.mp3", "assets/javascript/WithYou.mp3" ]
var currentTrack = 0

// <!--There will also be a sound bar displayed at bottom of the screen to pause, skip, and play.-->
// HOWEVER in the meantime we will use the captain america code as a place holder
// JavaScript function that wraps everything
// $(document).ready(function() {

  var captainPlanet = $(".captain-planet");

  // Gets Link for Theme Song
  var audioElement = document.createElement("audio");
  audioElement.setAttribute("src", songArray[currentTrack]);

  // Theme Button
  $("#play").on("click", function() {
    audioElement.play();
  })

  $("#stop").on("click", function() {
    console.log(audioElement.currentTime)
    audioElement.pause();
    audioElement.currentTime = 0; ///check documentation to see if STOP is an actual thing
  })

  $("#next").on("click", function() {
    currentTrack = currentTrack + 1;
    console.log(songArray[currentTrack]);
    audioElement.setAttribute("src", songArray[currentTrack]);
    audioElement.play();
console.log(songArray);
;
  })
 

});







// <!--##Tasks: Create an HTML File and Link Bootstrap, -->
// <!--jQuery, -->
// <!--and other saved repositories Create wirefram (text, images, table and music player using bootstrap) - -->
// <!--also create a naming system for buttons and containers. -->
// <!--Create UI design using CSS (floating images and table) -->
// <!--Create our Javascript Initiating API calls using Ajax - -->
// <!--also adding paramaters to the API results JQuery onclick functions -->
// <!--if statements -->
// <!--for loop of songs -->
// <!--via the API-->    
