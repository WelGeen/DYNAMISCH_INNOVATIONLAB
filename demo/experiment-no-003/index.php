<!DOCTYPE html>
<html lang="en">
	<head>
		<title>logo</title>
		<meta charset="utf-8">
		<link rel="stylesheet" href="temp/style.css" />
		<script src="temp/cpide_scripts.js"></script>	
		
	</head>
	
	<body onclick="location.reload();" ondblclick="window.open(location.href);">

		<div id="logo">
			<svg id="svgEl" xmlns="http://www.w3.org/2000/svg" width="400px"  height="400px" viewBox="0 0 400 400" >
			</svg>
		</div>
		
		<div id="txt" class="big-letters">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque mauris viverra felis gravida pellentesque nec a neque. Quisque lobortis convallis nunc, non porttitor massa eleifend eu. Quisque sollicitudin blandit sem volutpat suscipit. Sed tristique ligula eget magna sagittis, nec sodales velit tristique. Aenean quis tellus a odio elementum fringilla. Nam posuere accumsan neque sit amet interdum. Nulla elementum dapibus luctus. Maecenas eu blandit purus. Nulla eu interdum sapien. Nullam dictum quis nibh id vestibulum. In molestie iaculis feugiat. Sed pretium augue dolor, id mollis eros egestas vel.

			Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse lectus nisi, viverra vitae rhoncus et, elementum nec lectus. Ut gravida tincidunt dui eu porttitor. Cras mollis turpis non risus gravida, nec interdum ex molestie. Proin ut augue lorem. Aliquam magna lorem, vestibulum id orci vel, laoreet semper purus. In eget arcu a mi dictum suscipit. Morbi a risus a turpis luctus ultricies. Mauris quis ex consectetur, volutpat nunc sed, tincidunt ligula. Integer ac velit cursus, pretium arcu vitae, dignissim leo. In vulputate lectus sed metus faucibus, eu tempus nisl cursus.
		</div>
		

		
		
		<script>
			logo = new cpide();
			logo.svg = document.getElementById("svgEl");
			logo.ini();
			window.requestAnimationFrame( function(){logo.step();});
	
		function onWindowResize() {
			var w = window.innerWidth;
			var h = window.innerHeight;
			document.querySelector('#txt').style.width = w +'px';
			document.querySelector('#txt').style.height = h +'px';
			document.querySelector('#logo').style.width = w +'px';
			document.querySelector('#logo').style.height = h +'px';

			//document.querySelector('#bg').style.fontSize = (w/h)*13+'px';
		}
		onWindowResize();
		window.addEventListener( 'resize', onWindowResize, false );
	</script>
	</body>
</html>
