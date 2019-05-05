var playlist = {
  artistName1: "songTitle1",
  artistName2: "songTitle2",
  artistName3: "songTitle3"
};

function updatePlaylist(thePlaylist, artistName, songTitle){
  return Object.assign({}, thePlaylist, {[artistName]: songTitle})
};

updatePlaylist(playlist, "artistName4", "songTitle4");

function removeFromPlaylist(thePlaylist, artistName){
  delete thePlaylist[artistName];
  return thePlaylist;
};

removeFromPlaylist(playlist, artistName1);
