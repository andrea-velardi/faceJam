//Execute this code once the DOM has fully loaded
$(document).ready(function() {

// <!--pseudo coded prokect from readme below--> 

//api 
2QHsXeBIxzksQEMcpY518MaCFUpcbhjy
 
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

});







// <!--pseudo coded prokect from readme below--> 
 
// <!--##Project Description: This project generates a song to match your mood. -->
// <!--The user will upload their own photo via the upload form, using file type valiation. -->
// <!--We use the face recognition API, -->
// <!--Face++, -->
// <!--to capture your expression in the photo -->
// <!--and quantify your mood based on an algorithm of emotions. -->
// <!--The highest scoring emotion will be used as the indicator for song choice -->
// <!--from the SoundCloud API. -->
// <!--The song played will be displayed in a table, listing; song title, artist, and release date. -->
// <!--There will also be a sound bar displayed at bottom of the screen to pause, skip, and play.-->

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


<!-- javascript code below -->
SC.initialize({
  client_id: 'YOUR_CLIENT_ID',
  redirect_uri: 'http://example.com/callback'
});

// initiate auth popup
SC.connect().then(function() {
  return SC.get('/me');
}).then(function(me) {
  alert('Hello, ' + me.username);
});
