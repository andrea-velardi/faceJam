$(document).ready(function() {

//grab the information from the user inputted url
$("#submit").click(function(userUpload) {
  userImage = $("#userImage").val(); 
  console.log(userImage); 
});


  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }

  });
  
    var api_key = "PVQ-3aZ02DnPvmJenhhE5uu2sL3LXfsq"
    var api_secret = "2QHsXeBIxzksQEMcpY518MaCFUpcbhjy"
    var url = "https://api-us.faceplusplus.com/facepp/v3/detect"; 
    var image_url = "https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/RO7HF83PPB.jpg";
    var query_string = $.param({ 
        api_key: api_key, 
        api_secret: api_secret, 
        image_url: image_url, 
        return_attributes : "emotion" 
    })

    var url_and_query = url + "?" + query_string; 
    var renderFaceEmotion; 
    $.ajax(url_and_query, {
        type: "POST",
    })
    .then(function(response){
        console.log(response.faces[0].attributes.emotion); 
        //need to make emotionLevels = response 
    });

    //temporary array to troubleshoot the next button
    var songArray = ["https://firebasestorage.googleapis.com/v0/b/facejam-200816.appspot.com/o/Reaching.mp3?alt=media&token=6a7c55ad-1e11-45e6-be33-de3da668e82d", "https://firebasestorage.googleapis.com/v0/b/facejam-200816.appspot.com/o/01%20The%20Secret%20Thoughts%20of%20Housewives.wav?alt=media&token=82f23962-be0b-4b12-8833-a8c7455feac4", "assets/javascript/LittleLandslides.mp3", "assets/javascript/WithYou.mp3" ]
    var currentTrack = 0
    
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

    // <!--if statements -->
    var happiness = 0.999
    var surprised = 0.6
    var neutral = 0.5
    var sadness = 0.4
    var disgust = 0.3
    var anger = 0.2
    var fear = 0.00001

    var emotions = {happiness:100, surprised:60, neutral:50, sadness:40, disgust:30, anger:20, fear:0};
    //we are defining these variable to store which song link we will attached the emotion to once the song emotion is defined.
    var happiness = []
    var surprised = []
    var neutral = []
    var sadness = []
    var disgust = []
    var anger = []
    var fear = []

    var emotionLevels = {happiness:1, surprised:1, neutral:1, sadness:2, disgust:2, anger:90, fear:2}
    var emotionLevelsArray = [];
    var emotionTypes = ['anger', 'disgust', 'fear', 'happiness', 'neutral', 'sadness', 'surprised'];
    // myFunction(response.foo.bar) // what does david need? string 'happy'? string 'http://urltoyoutubeplaylist'
    var response = function myFunction(emotionLevels) { // arg is from api
        emotionLevelsArray = Object.values(emotionLevels); // Object.keys() ?
        emotionLevelsArray.push(emotionLevels.happiness);
        emotionLevelsArray.push(emotionLevels.surprised);
        emotionLevelsArray.push(emotionLevels.neutral);
        emotionLevelsArray.push(emotionLevels.sadness);
        emotionLevelsArray.push(emotionLevels.disgust);
        emotionLevelsArray.push(emotionLevels.anger);
        emotionLevelsArray.push(emotionLevels.fear);
        [1,1,1,2,2,90,2];
    }
    // marcus logic controls player logic
    var currentTrack = highestIndex;
    var highestIndex = 0;
    var highestEmotionValue = 0; // 1
    for (i = 0; i < emotionLevelsArray.length; i++) {
        1 > 0
        1 > 1
        90 > 2
        if (emotionLevelsArray[i] > highestEmotionValue) {
            highestIndex = i;
            highestEmotionValue = emotionLevelsArray[i];
        }
      }

    console.log(highestIndex);
    console.log(highestEmotionValue);
    // console.log(emotionTypes[highestIndex]);

    return emotionTypes[highestIndex];

//display song data in table
//need to grab the value of the song title and then .text to the table or html to replace? 
  
    
});
