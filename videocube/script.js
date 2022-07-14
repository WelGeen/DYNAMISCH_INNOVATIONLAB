var cube = document.querySelector('.cube');
var currentClass = '';

var ALLvideo = document.querySelectorAll('.videoC');

function playVid() {
	for( i in ALLvideo) {
		if(Number.isInteger( parseInt(i) )){
			//console.log("test",i);
			ALLvideo[i].play();
		}
	}
}

function changeSideRandom() {
	var grY = randomIntFromInterval(-180, 180);
	var grX = randomIntFromInterval(-90, 90);
	var grZ = randomIntFromInterval(-50, -30);
  cube.style.transform = "translateZ("+grZ+"vw) rotateY("+grY+"deg) rotateX("+grX+"deg)";
  
  
  myTimeout = null;
  myTimeout = setTimeout(changeSideRandom, randomIntFromInterval(500, 4000));
}

function changeSideRandom_ORG() {

  const side = ["front", "right", "back", "left", "top", "bottom"];

	const random = Math.floor(Math.random() * side.length);

  var showClass = 'show-' + side[random];
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
  myTimeout = null;
  myTimeout = setTimeout(changeSideRandom, randomIntFromInterval(500, 5000));
}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomTime(start, end) {
    // get the difference between the 2 dates, multiply it by 0-1, 
    // and add it to the start date to get a new date 
    var diff =  end.getTime() - start.getTime();
    var new_diff = diff * Math.random();
    var date = new Date(start.getTime() + new_diff);
    return date;
}
const zeroPad = (num, places) => String(num).padStart(places, '0')

function set_SRC_Video(){
	
	for( i in ALLvideo) {
		//console.log( Number.isInteger( parseInt(i) ) );
		if(Number.isInteger( parseInt(i) )){
			//console.log("test",i);
			//var t = randomDate('05/22/22','03/13/22');
			var t = new Date( randomTime(new Date("03-13-2022"), new Date("05-22-2022"))  ).toLocaleDateString();
			var a = t.split("-");
			t = zeroPad(a[0],2)+"-"+zeroPad(a[1],2)+"-22";
			ALLvideo[i].src = "https://pieterwels.nl/vids/dailymotiongraphics/"+t+".mp4";
			
		}
	}
}

set_SRC_Video();

var myTimeout = setTimeout(changeSideRandom, randomIntFromInterval(500, 3000));
