(() => {
	console.log('fired');

	// variable stack
	// grab the shields at the bottom of the page
	const 	shields		= document.querySelectorAll('.sigil-container'),
			lightBox 	= document.querySelector('.lightbox'),
			video 		= document.querySelector('video'),
			lbClose 	= document.querySelector('.lightbox-close'),
			topBanners 	= document.querySelector('#houseImages');

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

	function animateBanners() {
		// move the banners to the left so that the current house banner is visible
		const offSet = 600;

		// grab the data-offset number from the shield we're clicking on
		// and then do a bit of math to get the offset
		let currentOffset = this.dataset.offset * offSet;

		// move the banners using the right css property
		//topBanners.style.right = currentOffset + "px";
		TweenMax.to(topBanners, 0.7, { right: currentOffset });
	}

	//shields.forEach(shield => shield.addEventListener('click', showLightbox));	

	// animate the banners at the top
	shields.forEach(shield => shield.addEventListener('click', animateBanners));

	video.addEventListener('ended', hideLightbox);
	lbClose.addEventListener('click', hideLightbox);
})();