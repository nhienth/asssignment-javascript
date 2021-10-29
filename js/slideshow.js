var images = [];
for (var i = 0; i < 13; i++) {
  images[i] = new Image();
  images[i].src = "./images/img" + i + ".jpg";
}

document.getElementById("imglength").innerHTML = images.length;

var index = 0;

function next() {
  index++;

  if (index >= images.length) {
    index = 0;
  }
  var image = document.getElementById("img");
  image.src = images[index].src;
  document.getElementById("num").innerHTML = index + 1;
}

function prev() {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  var image = document.getElementById("img");
  image.src = images[index].src;
  document.getElementById("num").innerHTML = index + 1;
}
