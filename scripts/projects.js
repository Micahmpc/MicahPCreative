var h = document.getElementById("page-nav-block");
var readout = document.getElementsByClassName("content");
var stuck = false;
var stickPoint = getDistance();

function getDistance() {
  var topDist = h.offsetTop;
  return topDist;
}

window.onscroll = function(e) {
  var distance = getDistance() - window.pageYOffset;
  var offset = window.pageTOffset;
  readout.innerHTML = stickPoint + ' ' + distance + ' ' + offset + ' ' + stuck;

  if(window.innerWidth < 768 && distance <= 130 && !stuck) {
    h.style.position = 'fixed';
    h.style.top = '60px';
    stuck = true;
  }

  if(window.innerWidth >= 768 && distance <= 90 && !stuck) {
    h.style.position = 'fixed';
    h.style.top = '90px';
    stuck = true;
  }

  else if (stuck && (offset <= stickPoint)) {
    h.style.position = 'static';
    stuck = false;
  }
}




function rollover(my_image)
  {
    my_image.src = "assets/images/homepage/avatar_secret_2.jpg";
  }
function mouseaway(my_image)
  {
    my_image.src = 'assets/images/homepage/avatar_2.jpg';
  }
