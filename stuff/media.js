loudness.setVolume(45, function (err) {
  if(!err) {
    console.log('Set volume.');
  }
});

loudness.getVolume(function (err, vol) {
// vol = 45
});

loudness.setMuted(false, function (err) {
// Done
});

loudness.getMuted(function (err, mute) {
// mute = false
});





mediaController.getCommands();
// ['play', 'pause', 'next', 'previous', 'skip'];

mediaController.executeCommand('next', function(err, result) {
  if(!err) {
    console.log('Skipped track.');
  }
});