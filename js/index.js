function filterSongs() {
	var input, filter, ul, li, div, i, txtValue;
	input = document.getElementById('searchBox');
	filter = input.value.toUpperCase();
	ul = document.getElementById("songList");
	li = ul.getElementsByTagName('li');

	for (i = 0; i < li.length; i++) {
		song = li[i].getElementsByTagName("div")[0];
		artist = li[i].getElementsByTagName("div")[1];
		songTxt = song.textContent || song.innerText;
		artistTxt = artist.textContent || artist.innerText;
		if (songTxt.toUpperCase().indexOf(filter) > -1 || artistTxt.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}

function toggleTheme() {
	var body = document.body;
	if (body.getAttribute('data-theme') === 'dark') {
		body.removeAttribute('data-theme');
	} else {
		body.setAttribute('data-theme', 'dark');
	}
}

function openInNewTab(url) {
	var win = window.open(url, '_blank');
	win.focus();
}

document.addEventListener("DOMContentLoaded", function() {
	var audio = document.getElementById("audio");
	var playButton = document.getElementById("playButton");
	var pauseButton = document.getElementById("pauseButton");
	var stopButton = document.getElementById("stopButton");
	var progressBar = document.getElementById("progressBar");
	var progress = document.getElementById("progress");

	playButton.addEventListener("click", function() {
		pauseButton.style.display = 'block';
		stopButton.style.display = 'block';
		audio.play();
	});

	pauseButton.addEventListener("click", function() {
		audio.pause();
	});

	stopButton.addEventListener("click", function() {
		audio.pause();
		audio.currentTime = 0;
	});

	audio.addEventListener("timeupdate", function() {
		var percentage = (audio.currentTime / audio.duration) * 100;
		progress.style.width = percentage + "%";
	});

	progressBar.addEventListener("click", function(event) {
		var rect = progressBar.getBoundingClientRect();
		var offsetX = event.clientX - rect.left;
		var percentage = offsetX / progressBar.offsetWidth;
		audio.currentTime = percentage * audio.duration;
	});
});