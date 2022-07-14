var cpide = function () { return {
	_self : null,
	path: null,	
	current: 0,
	target: 0,
	svg: null,
	l: null,
	active:1,
	bigletters: document.querySelector('.big-letters'),
	addresses: document.querySelector('.addresses'),
	patented: document.querySelector('.patented'),
	metadata: document.querySelector('.metadata'),
	byline: document.querySelector('.byline'),
	logo: document.querySelector('#logo'),
	little_letters: document.querySelector('.little-letters'),

	ini : function(){
		this.l = this.floor(31, 181);
		var w = window.innerWidth;
		var h = window.innerHeight;
		this.svg.setAttribute("width", w +'px');
		this.svg.setAttribute("height", h +'px');
		this.svg.setAttribute("viewBox", '0 0 '+w+' '+h );
		
		this.minX = parseFloat(this.svg.getAttribute("width"));
		this.minY = parseFloat(this.svg.getAttribute("height"));
		this.maxX = parseFloat(this.svg.getAttribute("width"))  - this.minX,
		this.maxY = parseFloat(this.svg.getAttribute("height")) - this.minY,
		this.rangeX = this.maxX - this.minX,
		this.rangeY = this.maxY - this.minY,
		console.log(this.rangeX,this.minX)
		this.path = document.createElementNS('http://www.w3.org/2000/svg','path');  
		this.current = this.calNewPoints();
		this.target = this.calNewPoints();
		
		this.setPoints( this.current );
		
		this.path.setAttribute("stroke", "#00");  
		this.path.setAttribute("stroke-width", 1);  
		this.path.setAttribute("opacity",  1);  
		this.path.setAttribute("fill", "#00");
		this.svg.appendChild(this.path);
		
		
	},
	floor: function(a,b){
		return Math.floor(Math.random() * b) + a 
	},
	step : function() {
		i
			var ready = 0;
			for( i=0; i<this.current.length; i++){
				if (Math.round(this.current[i]) == Math.round(this.target[i]) ){
					++ready;
				}
			}
			if(ready == this.current.length){
				this.current = this.target;
				this.target = this.calNewPoints();
			}
			this.movePoints();
			window.requestAnimationFrame( function(){logo.step();});
		
	},

	ranNum: function (range,base){
		var r = range || 1,
		b = base || 0;
		return b + Math.floor(Math.random()*(r+1));
	},

	movePoints : function(){
		//console.log(this.target);
		if(this.active==1){
			for( i=0; i<this.l; i++){
				this.current[i] = this.current[i] + (this.target[i] -this.current[i]) * 0.05;
			}
			
			
			this.addresses.style.fontSize = this.current[7]/20+'px';
			this.patented.style.fontSize = this.current[59]/14+'px';
			this.byline.style.fontSize = this.current[4]/5+'px';
			this.little_letters.style.fontSize = this.current[23]/50+'px';
			this.bigletters.style.fontSize = this.current[45]/14+'px';
			
			// images
			this.logo.style.backgroundPosition = this.current[23]/2+'%';
			//this.logo.style.transform = "rotate("+this.current[59]/4 +"deg)";
			
			this.patented.style.backgroundSize = this.current[7]/2+'%';
			this.patented.style.transform = "rotate("+this.current[45]/4 +"deg)";
			

			this.current[this.current.length-2] = this.current[0] ;// last key;
			this.current[this.current.length-1] = this.current[1] ;
			this.setPoints( this.current );
		}
	},

	calNewPoints: function(){
		var p = [];
		var nn = 1;//this.floor(1, 3)
		for( i=0; i<this.l; i++){
			p.push( this.ranNum(this.rangeX*nn,this.minX*nn) ); i++;
			p.push( this.ranNum(this.rangeY*nn,this.minY*nn) );
		}
		p[p.length-2] = p[0] ;// last key;
		p[p.length-1] = p[1] ;
		return p;
	},

	setPoints:function(p){
		var str = [];
		str.push( 'M ' + p[0] + ' ' + p[1]);
		for( j=2; j<(this.l-2); j++){
			str.push( 'C ' +p[j]+ ' ' +p[j+1]+', '+p[j+2]+ ' ' +p[j+3]+', '+p[j+4]+ ' ' +p[j+5] );
			j=j+5;
		}
		this.path.setAttribute('d', str.join(' '));
	}


}}

