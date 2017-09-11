const video = $('#video')[0];
navigator.mediaDevices.getUserMedia({
  video: true,
    audio: false
}).then((mediaStream) =>{
  video.srcObject = mediaStream;
  video.play();
});

//functionality of the button
$('#button').click(()=>{
  const memeName = $('#personName').val();
  const message = $('#userComments').val();
  const canvas = $('#camCanvas')[0];
  const context = canvas.getContext('2d');
  context.drawImage(video,0,0);
  const dataURL=canvas.toDataURL('image/png');
  $.ajax({
    type:'POST',
    url: '/madhu',
    data: JSON.stringify({
      info: dataURL,memeName,message}),
    contentType:'application/json'
  });
  // creating meme chat
  const memechat =()=>{
    let list=" ";
    $.get('/meme',(files)=>{
    files.forEach((e)=>{
      list=list+`<img src="https://madhu2.llip.life/meme/${e}?cacheBusting=${Math.random()}"/>`;
    });
    $('#picid').html(list);
    });
  };
      window.setInterval(memechat,1000);
  
});


