var playlist = {Coldplay: "Waterfall"};

function updatePlaylist(playlist, artist, song){
  playlist[artist] = song
  return playlist;
}

function removeFromPlaylist(playlist,object){
  delete playlist[artist]
  return playlist;
}
