var playlist {
  artistName1: "songTitle1",
  artistName2: "songTitle2",
  artistName3: "songTitle3"
};

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName]: songTitle})
};

updatePlaylist(playlist, "artistName4", "songTitle4");
