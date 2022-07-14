var cpide = function () { return {
	_self : null,
	path: null,	
	current: 0,
	target: 0,
	svg: null,
	l: 61,
	bigletters: document.querySelector('.big-letters'),
	
	ini : function(){

		this.config();
		
		this.path = document.createElementNS('http://www.w3.org/2000/svg','path');  
		this.current = this.calNewPoints();
		this.target = this.calNewPoints();
		
		this.setPoints( this.current );
		
		this.setColor();
		
		this.svg.appendChild(this.path);
		
		
	},
	config: function() {
		var ratio = (window.innerHeight-10)/1920;
		var w = window.innerWidth;//1080*ratio;
		var h = window.innerHeight;//1920*ratio;
		this.svg.setAttribute("width", w +'px');
		this.svg.setAttribute("height", h +'px');
		this.svg.setAttribute("viewBox", '0 0 '+w+' '+h );
		
		this.minX = parseFloat(this.svg.getAttribute("width"));
		this.minY = parseFloat(this.svg.getAttribute("height"));
		this.maxX = parseFloat(this.svg.getAttribute("width"))  - this.minX;
		this.maxY = parseFloat(this.svg.getAttribute("height")) - this.minY;
		this.rangeX = this.maxX - this.minX;
		this.rangeY = this.maxY - this.minY;
		return {w:w,h:h};
	},
	getRandomInt: function(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	random_rgb: function() {
			var o = Math.round, r = Math.random, s = 255;
			alp = 1;
			return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + alp + ')';
	},
	setColor : function() {
		var color_1 = this.random_rgb();
		//this.path.setAttribute("stroke", this.random_rgb());  
		//this.path.setAttribute("stroke-width", this.getRandomInt(0, 1));  
		//this.path.setAttribute("opacity", 1);  
		this.path.setAttribute("fill", color_1);
		document.querySelector('#txt').style.backgroundColor = color_1
		document.querySelector('#txt').style.color = this.random_rgb();
	},
	step : function() {
		
		var ready = 0;
		for( i=0; i<this.current.length; i++){
			if (Math.round(this.current[i]) == Math.round(this.target[i]) ){
				++ready;
			}
		}
		if(ready == this.current.length){
			this.current = this.target;
			this.target = this.calNewPoints();
			this.setColor();
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
		for( i=0; i<this.l; i++){
			this.current[i] = this.current[i] + (this.target[i] -this.current[i]) * 0.03;
		}
		
		this.bigletters.style.fontSize = this.current[6]/6+'px';
		this.bigletters.style.lineHeight = this.current[23]/20+'px';
		this.bigletters.style.letterSpacing  = this.current[34]/40+'px';
		
		
		this.current[this.current.length-2] = this.current[0] ;// last key;
		this.current[this.current.length-1] = this.current[1] ;
		this.setPoints( this.current );
	},

	calNewPoints: function(){
		var p = [];
		for( i=0; i<this.l; i++){
			p.push( this.ranNum(this.rangeX,this.minX) ); i++;
			p.push( this.ranNum(this.rangeY,this.minY) );
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

