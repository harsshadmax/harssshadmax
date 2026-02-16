function openAdmin(){
  document.getElementById('admin').classList.toggle('hidden');
}

function saveVideo(){
  const pass = document.getElementById('password').value;
  if(pass !== 'king'){ alert('Wrong password'); return; }
  const file = document.getElementById('videoInput').files[0];
  if(!file){ alert('No video selected'); return; }

  const reader = new FileReader();
  reader.onload = function(){
    localStorage.setItem('birthdayVideo', reader.result);
    alert('Video uploaded successfully');
  }
  reader.readAsDataURL(file);
}

function playSurprise(){
  const data = localStorage.getItem('birthdayVideo');
  if(!data){ alert('No video uploaded'); return; }
  const video = document.getElementById('videoPlayer');
  video.src = data;
  video.classList.remove('hidden');
  video.play();
}
