<?php

// directory
$directory = "../../beeldbank/images/*/";

// file type
$images = glob("" . $directory . "*");
$total = count($images);


 
?>

<!DOCTYPE html>
<html lang="en" >

<head>
  <meta charset="UTF-8">
  <title>Experiment No. 007</title>
	<link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond|Work+Sans&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">

  
      <link rel="stylesheet" href="./style.css">
		<script src="temp/cpide_scripts.js"></script>	
  
</head>

<body onclick="location.reload();" ondblclick="window.open(location.href);">

	 <div id="logo" style="background-image:url('<?php echo $images[mt_rand(0, $total)]; ?>');">
		<svg id="svgEl" xmlns="http://www.w3.org/2000/svg" width="400px"  height="400px" viewBox="0 0 400 400" >
		</svg>
	</div>
		
  <div class="container">
	  <div class="grid"  >
		<div class="big-letters">
		  abc <br/> efghik
		  <br/> lmo
		  <br/> prstuv
		  <br/> xyz
		</div>
		<div class="addresses"><p>Societa Nebiolo types are imported in the United States exclusively by:</p>
		  <p>
			Amsterdam Continental Types, Inc.</p>
		  <p>with offices in:</p>
		  <p>NEW YORK, N.Y. - 276 Park Ave So. - 212 777-4980</p>
		  <p>CHICAGO, ILL. - 429 W. Superior St _ 312 664-8223</p>
		  <p>BURBANK, CALIF. - 3319 W. Magnolia Blvd. _ 213 849-6319</p></div>
		<div class="metadata"><p>PC. 1008 - 15,00 - 7-66</p><p>
	Printed with Nebiolo’s type faces and machines
	Sketch by Aldo Novarese</p><p>
		  Printed in Italy</p></div>
		<div class="byline">original creation of societa nebiolo - turin</div>
		<div class="little-letters">
		  <div class="uppercase">
			abcdef<br/> ghijklmno
			<br/> pqrstuv
			<br/> wxyz&
			<br/></div>
		  abcdefghijk<br/> lmnopqrst
		  <br/> uvwxyz
		  <br/> £$.,:;!?`-""()
		  <br/> 1234567890%
		</div>
		<div class="patented" style="background-image:url('<?php echo $images[mt_rand(0, $total)]; ?>');">Patented - All rights reserved - Designed by Alvo Novarese</div>

	  </div>
	</div>



	<script>
			logo = new cpide();
			logo.svg = document.getElementById("svgEl");
			logo.ini();
			window.requestAnimationFrame( function(){logo.step();});
			
		function onWindowResize() {
			var w = window.innerWidth;
			var h = window.innerHeight;
			document.querySelector('#logo').style.width = w +'px';
			document.querySelector('#logo').style.height = h +'px';

			//document.querySelector('#bg').style.fontSize = (w/h)*13+'px';
		}

		function stoplogo() {
			logo.active = 0;
		}
		
		function startlogo() {
			logo.active = 1 ;
		}		
		window.addEventListener( 'resize', onWindowResize, false );	
		
		onWindowResize();
		startlogo();
	</script>
	
	</body>

</html>
