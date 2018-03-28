var loudness = require('loudness');
var mediaController = require('node-media-controller');
var leapjs = require('leapjs');
var leapController = new leapjs.Controller();


leapController.on('deviceFrame', function(frame) {
  checkGestures(frame.gestures);
});
leapController.connect();


function checkGestures(gestures) {
  // loop through available gestures
  for(var i = 0; i < gestures.length; i++){
    var gesture = gestures[i];
    var type = gesture.type;

    switch(type){
      case "keyTap":
        if (gesture.state == "stop") {
          console.log('keyTap');
          mediaController.executeCommand('pause', function(err, result) {
            if(!err) {
              console.log('PAUSE');
            }
          });
        }
        break;
    }
  }
}