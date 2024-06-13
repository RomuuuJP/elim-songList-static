
async function loadJSON() {
    try {
        // 获取网址参数中的文件名
        const urlParams = new URLSearchParams(window.location.search);
        const singerName = urlParams.get('singer');
        const jsonFileName  = '../json/' + singerName + '.json'

        const response = await fetch(jsonFileName);
        const data = await response.json();

        const singer = document.getElementById('singer')
        const singerDetails = document.getElementById('singer-details')
        const songList = document.getElementById('songList');
        singer.textContent = ''; // 清空现有内容
        singerDetails.innerHTML = ''; // 清空现有内容
        songList.innerHTML = ''; // 清空现有内容
        
        // 设置音频源
        const audio = document.getElementById('audio');
        audio.src = data.audio;

        singer.textContent = data.singer;
        singerDetails.textContent = data.detail;
        
        data.songs.forEach(item => {
            const li = document.createElement('li');
            li.className = 'song-item'; // 添加class

            const titleDiv = document.createElement('div');
            titleDiv.className = 'song-title';
            titleDiv.textContent = item.title;
            const artistDiv = document.createElement('div');
            artistDiv.className = 'song-artist';
            artistDiv.textContent = item.artist;
            
            li.appendChild(titleDiv);
            li.appendChild(artistDiv);

            songList.appendChild(li);
        });
    } catch (error) {
        console.error('Error loading JSON data:', error);
    }
}

window.onload = loadJSON;