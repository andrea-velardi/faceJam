var audioElement = document.createElement("audio");
var songArray = ["https://firebasestorage.googleapis.com/v0/b/facejam-200816.appspot.com/o/Reaching.mp3?alt=media&token=6a7c55ad-1e11-45e6-be33-de3da668e82d", //Reaching : Happy 0 
"https://firebasestorage.googleapis.com/v0/b/facejam-200816.appspot.com/o/The%20Dream%20Before%20The%20Ring%20That%20Woke%20Me.mp3?alt=media&token=e09377d5-42d6-4197-adb0-c824075e82ee", // Dream :Suprised 1 
"https://firebasestorage.googleapis.com/v0/b/facejam-200816.appspot.com/o/The%20Woods%20Are%20On%20Fire.mp3?alt=media&token=9afceac6-45c2-4c3e-8555-64c7fa121be9", //Woods: Neutral 2
 "https://firebasestorage.googleapis.com/v0/b/facejam-200816.appspot.com/o/sun%2C%20come%20out!.mp3?alt=media&token=94087ccf-a701-43e7-adb5-b6bcf10bcd8f", // Sun Come Out: Sad 3
 "https://firebasestorage.googleapis.com/v0/b/facejam-200816.appspot.com/o/02%20-%20Killing%20In%20the%20Name%20%5BExplicit%5D.mp3?alt=media&token=4800682e-d87f-45e3-8f09-7fdc0b2c2b06", //Killing : Disgust
 "https://firebasestorage.googleapis.com/v0/b/facejam-200816.appspot.com/o/02%20-%20Killing%20In%20the%20Name%20%5BExplicit%5D.mp3?alt=media&token=4800682e-d87f-45e3-8f09-7fdc0b2c2b06", //Killing : Anger
 "https://firebasestorage.googleapis.com/v0/b/facejam-200816.appspot.com/o/04%20Falling%20Down.wav?alt=media&token=ac8ca7dd-428d-417d-b3cd-6ffff8d2a374", //Falling Down: Fear
]

$(document).ready(function() {

    
    //grab the information from the user inputted url
    $("#submit").click(function(userUpload) {
        picValue = $("#userImage").val();
        //.jpg .jpeg .gif .png or .tiff

        if(picValue.endsWith('.jpg') || picValue.endsWith('.jpeg') || picValue.endsWith('.png') || picValue.endsWith('.tiff') || picValue.endsWith('.gif')) {
          console.log('Valid!')
          callFaceApi(picValue);
        $('#dummyHead').attr('src' ,picValue); //grabbing the source attribute and passing the picValue through to the #dummyHead
        } else {
          console.log('Invalid!')
          $("#myModal").removeClass('hidden')// 
        }
        
        //possible add in "preview" of picture
        // if (picValue !== '.jpg' || '.gif' || '.png') {
          //then upload the modal
          
    });

    $(".close").click(function(event) {
      console.log('Clicked!');
      $("#myModal").addClass('hidden')
    });
//cors - crossdomain issues - you have to allow apis to speak to each other
    jQuery.ajaxPrefilter(function(options) {
        if (options.crossDomain && jQuery.support.cors) {
            options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    });
  
    
    // var url_and_query = url + "?" + query_string; 
    var renderFaceEmotion; 
    

    //temporary array to troubleshoot the next button
    
    var currentTrack = 0
    
    var captainPlanet = $(".captain-planet");

    // Gets Link for Theme Song

    // Theme Button
    $("#play").on("click", function() {
        audioElement.play();
    })

    $("#stop").on("click", function() {
        console.log(audioElement.currentTime)
        audioElement.pause();
        audioElement.currentTime = 0; ///check documentation to see if STOP is an actual thing
    })

    // $("#next").on("click", function() {
    //   currentTrack = currentTrack + 1;
    //   console.log(songArray[currentTrack]);
    //   audioElement.setAttribute("src", songArray[currentTrack]);
    //   audioElement.play();
    //   console.log(songArray);
    // })

  // display song data in table
  // need to grab the value of the song title and then .text to the table or html to replace? 
});



callFaceApi = function(picUrl){
    var api_key = "PVQ-3aZ02DnPvmJenhhE5uu2sL3LXfsq"
    var api_secret = "2QHsXeBIxzksQEMcpY518MaCFUpcbhjy"
    var api_url = "https://api-us.faceplusplus.com/facepp/v3/detect";
    var sad_url = "https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/RO7HF83PPB.jpg";

    var params = {
        api_key: api_key,
        api_secret: api_secret,
        image_url: picUrl,
        return_attributes: "emotion"
    }

    $.ajax({
        type: 'POST',
        url: api_url,
        data: params
    }).done(function(data){
        let emotionObj = data.faces[0].attributes;

        if (emotionObj.emotion.happiness >= 50) {
            audioElement.setAttribute("src", songArray[0]);
            console.log('Happy!');
            $("#songTitle").text("Reaching");
            $("#artist").text("David Karsten Daniels");
            $("#releaseDate").text("2016");
        } else if (emotionObj.emotion.suprised >= 50){
            audioElement.setAttribute("src", songArray[1]);
            console.log('Suprised!');
            $("#songTitle").text("The Dream Before The Ring That Woke Me");
            $("#artist").text("David Karsten Daniels");
            $("#releaseDate").text("2007");
        } else if (emotionObj.emotion.neutral >= 50){
            audioElement.setAttribute("src", songArray[2]);
            console.log('Neutral!');
            $("#songTitle").text("The Woods Are On Fire");
            $("#artist").text("David Karsten Daniels");
            $("#releaseDate").text("2016");  
        } else if (emotionObj.emotion.sadness >= 50){
            audioElement.setAttribute("src", songArray[3]);
            console.log('Sadness!');
            $("#songTitle").text("Sun, Come Out!");
            $("#artist").text("David Karsten Daniels");
            $("#releaseDate").text("2001");
        } else if (emotionObj.emotion.disgust >= 50){
            audioElement.setAttribute("src", songArray[4]);
            console.log('Disgust!');
            $("#songTitle").text("Killing In The Name Of");
            $("#artist").text("Rage Against The Machine");
            $("#releaseDate").text("1991");
        } else if (emotionObj.emotion.anger >= 50){
            audioElement.setAttribute("src", songArray[5]);
            console.log('Anger!');
            $("#songTitle").text("Killing In The Name Of");
            $("#artist").text("Rage Against The Machine");
            $("#releaseDate").text("1991");           
        } else {
            audioElement.setAttribute("src", songArray[6]);
            console.log('Fear!');
            $("#songTitle").text("Falling Down");
            $("#artist").text("David Karsten Daniels");
            $("#releaseDate").text("2009");
        }
        //progress bar
        $('.progress-bar').css('width', emotionObj.emotion.happiness+'%')// need to ensure % to "fill the bar"
        console.log('Success', emotionObj);
    })
}
