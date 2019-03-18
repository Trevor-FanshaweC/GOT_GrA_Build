(() => {
	console.log('fired');

	// variable stack
	// grab the shields at the bottom of the page
	const 	shields		= document.querySelectorAll('.sigil-container'),
			lightBox 	= document.querySelector('.lightbox'),
			video 		= document.querySelector('video'),
			lbClose 	= document.querySelector('.lightbox-close');

	function showLightbox() {
		//debugger;
		let targetHouse = this.className.split(" ")[1];

		// this gives us a lowercase house name -> the second class on all of the shields ie stark, baratheon
		
		// flip this to uppercase
		let targetVid = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

		video.src = `video/House-${targetVid}.mp4`;
		lightBox.classList.add('show-lightbox');

		video.load();
		video.play();
	}

	function hideLightbox() {
		lightBox.classList.remove('show-lightbox');

		// rewind the current video and pause it
		video.currentTime = 0;
		video.pause();
	}

	shields.forEach(shield => shield.addEventListener('click', showLightbox));

	video.addEventListener('ended', hideLightbox);
	lbClose.addEventListener('click', hideLightbox);
})();