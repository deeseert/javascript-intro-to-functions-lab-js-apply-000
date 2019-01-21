function shout(string){
  if (string === string.toLowerCase()) {
    return string.toUpperCase();
  }
}

function whisper(string){
  if (string === string.toUpperCase()) {
    return string.toLowerCase();
  }
}

function logShout(string){
  if (string === string.toLowerCase()) {
    console.log(string.toUpperCase());
  }
}

function logWhisper(string){
  if (string === string.toUpperCase()) {
    console.log(string.toLowerCase());
  }
}