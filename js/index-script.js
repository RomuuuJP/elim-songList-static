const pages = ['singer/haiyy.html', 'singer/xiaoyu.html', 'singer/qiuzfy.html', 'singer/zipdsbb.html', 'singer/linst.html']; // Add your page URLs here
let currentPageIndex;
let touchstartX = 0;
let touchendX = 0;

function getRandomPage() {
  currentPageIndex = Math.floor(Math.random() * pages.length);
  return pages[currentPageIndex];
}

function prevPage() {
  currentPageIndex = (currentPageIndex === 0) ? pages.length - 1 : currentPageIndex - 1;
  document.getElementById('iframe-container').src = pages[currentPageIndex];
}

function nextPage() {
  currentPageIndex = (currentPageIndex === pages.length - 1) ? 0 : currentPageIndex + 1;
  document.getElementById('iframe-container').src = pages[currentPageIndex];
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    prevPage();
  } else if (event.key === 'ArrowRight') {
    nextPage();
  }
});

window.onload = function() {
  document.getElementById('iframe-container').src = getRandomPage();
};

document.addEventListener('touchstart', function(event) {
  touchstartX = event.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', function(event) {
  touchendX = event.changedTouches[0].screenX;
  handleGesture();
}, false); 

function handleGesture() {
  if (touchendX < touchstartX) {
    nextPage();
  }
  
  if (touchendX > touchstartX) {
    prevPage();
  }
}