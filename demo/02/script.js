

function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  text = text.
  replace(/ a /g, " ").
  replace(/whats/g, "what is").
  replace(/please /g, "").
  replace(/ please/g, "").
  replace(/r u/g, "are you");

  if (compare(utterances, answers, text)) {
    // Search for exact match in triggers
    product = compare(utterances, answers, text);
  } else
  {
    product = alternatives[Math.floor(Math.random() * alternatives.length)];
  }

  addChatEntry(input, product);
}

function compare(utterancesArray, answersArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < utterancesArray.length; x++) {
    for (let y = 0; y < utterancesArray[x].length; y++) {
      if (utterancesArray[x][y] === string) {
        let replies = answersArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        break;
      }
    }
    if (replyFound) {
      break;
    }
  }
  return reply;
}

var BIZZY = false;
function addChatEntry(input, product) {
	// STEP 1
	BIZZY = true;
	let myArray = input.split(" ");
	let w = 0;
	let h = 0;
	for(let x=0; x<myArray.length; x++){
		let div = document.createElement("div");
		div.innerHTML = myArray[x];
		div.className = "response";
		//div.style.backgroundColor = getRandomRgb();
		div.style.top = mouseY + "px";
		div.style.left = mouseX + w + "px";
		div.style.fontSize = rd(2, 50) + "px";
		document.body.appendChild(div);
		setITEM(div, (mouseX+w), mouseY);
		w = w + div.clientWidth;
		h = div.clientHeight;  
		
	}
	// STEP 2 
	let divTyping = document.createElement("div");
	divTyping.innerHTML = "Typing...";
	divTyping.className = "response typing";
	divTyping.style.top = mouseY + h + "px";
	divTyping.style.left = mouseX + "px";
	document.body.appendChild(divTyping);

	
	setTimeout(() => {
		divTyping.remove();
		// STEP 3
		myArray = product.split(" ");
		w = 0;
		for(let x=0; x<myArray.length; x++){
			let div = document.createElement("div");
			div.innerHTML = myArray[x];
			div.className = "response";
			div.style.backgroundColor = "yellow"; //getRandomRgb();
			div.style.top = mouseY + h + "px";
			div.style.left = mouseX + w + "px";
			div.style.fontSize = rd(2, 100) + "px"
			document.body.appendChild(div);
			setITEM(div, (mouseX+w), (mouseY + h));
			w = w + div.clientWidth;
			
		}
		BIZZY = false;
	}, 1000);

}
const bodyopt = { restitution: 0,
  friction: 2, frictionAir: 0, frictionStatic: 2,
  angle: 0, isStatic: false };
  
function setITEM(div, xx, yy){
	
	var ITEM = {
	  body: Matter.Bodies.rectangle(xx, yy, div.clientWidth, div.clientHeight),
	  elem: div,
	  render() {
		const {x, y} = this.body.position;
		this.elem.style.top = `${y}px`;
		this.elem.style.left = `${x}px`;
		this.elem.style.transform = `rotate(${this.body.angle}rad)`;
		
	  }
	};
	Matter.Composite.add(engine.world, [ITEM.body], bodyopt);
	allITEMS.push(ITEM);
}
// program to get a random item from an array

function getRandomItem(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];
    return item;
}
function getRandomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = num >> 8 & 255;
  var b = num & 255;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

