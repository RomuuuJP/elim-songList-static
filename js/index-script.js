
async function loadJSON() {
  try {
      const jsonFileName  = 'json/index.json'

      const response = await fetch(jsonFileName);
      const data = await response.json();

      const title = document.getElementById('singer')
      const details = document.getElementById('singer-details')
      const detailsSub = document.getElementById('singer-details-s')
      const singerList = document.getElementById('songList');
      title.textContent = ''; // 清空现有内容
      details.textContent = ''; // 清空现有内容
      detailsSub.textContent = ''; // 清空现有内容
      singerList.innerHTML = ''; // 清空现有内容

      title.textContent = data.title;
      details.textContent = data.detail;
      detailsSub.textContent = data.detailSub;
      
      data.singerList.forEach(item => {
          const li = document.createElement('li');
          li.className = 'song-item'; // 添加class

          const titleDiv = document.createElement('div');
          titleDiv.className = 'song-title';
          titleDiv.textContent = item.title;
          const artistDiv = document.createElement('div');
          artistDiv.className = 'song-artist';
          artistDiv.textContent = item.des;

          const a = document.createElement('a');
          a.href = item.url; // 添加class

          a.appendChild(titleDiv);
          a.appendChild(artistDiv);
          li.appendChild(a);

          singerList.appendChild(li);
      });
  } catch (error) {
      console.error('Error loading JSON data:', error);
  }
}

window.onload = loadJSON;