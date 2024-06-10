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


function toggleTheme() {
    // 获取当前主题
    const currentTheme = document.documentElement.getAttribute('data-theme');
    // 判断并切换主题
    const newTheme = (currentTheme === 'dark') ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    // 将新主题存储在 Local Storage 中
    localStorage.setItem('theme', newTheme);
}

// 页面加载时应用存储的主题
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme') || 'light'; // 默认主题为 light
    document.documentElement.setAttribute('data-theme', savedTheme);
});

// 定义左滑返回
let touchstartX = 0;
let touchendX = 0;

document.addEventListener('touchstart', function(event) {
	touchstartX = event.changedTouches[0].screenX;
  }, false);
  
document.addEventListener('touchend', function(event) {
touchendX = event.changedTouches[0].screenX;
handleGesture();
}, false); 

function handleGesture() {
	if (touchendX+500 < touchstartX) {
		window.history.forward()
	}

	if (touchendX-500 > touchstartX) {
		window.history.back()
	}
}

function toggleDropdown() {
	var content = document.getElementById("dropdownContent");
	content.classList.toggle("show");
}

// 点击页面其他地方时隐藏下拉菜单
window.onclick = function(event) {
	if (!event.target.matches('#drop-down-button')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		for (var i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains("show")) {
				openDropdown.classList.remove("show");
			}
		}
	}
}