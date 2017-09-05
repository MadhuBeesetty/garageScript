$('#button').click(() => {
  const name = $('#myName').val();
  const comment = $('#myComment').val();
  $.ajax({
    type: 'POST',
    url: '/submit',
    contentType: 'application/json',
    data: JSON.stringify({
      name,
      comment
    }),
    success: (data) => {
      console.log('Success: ', data);
    }
  });
});

/* checking txt file every second */
const getInboxFile = () => {
 $.get('/notes.txt', (data) => {
    const content = $('#chat');
    content.html(data);
  });
}
window.setInterval(getInboxFile, 1000);
/* Camera */
const video = $('#video')[0];
navigator.mediaDevices.getUserMedia({
  video: true,
  audio: false
}).then((mediaStream) => {
  video.srcObject = mediaStream;
  video.play();
}).catch((err) => {
  console.log('Video Error: ', err);
});
/* Taking a picture */
$('#selfie').click(() => {
  const name = $('#myName').val();
  const comment = $('#myComment').val();
  // camera
  const canvas = $('#canvas')[0];
  const context = canvas.getContext('2d');
  context.drawImage(video, 0, 0);
  const dataURL = canvas.toDataURL('image/png');

  // defining second button post request.
 $.ajax({
    type: 'POST',
    url: '/pics',
    data: JSON.stringify({
      canvas: dataURL,
      name,
      comment
    }),
    success: (data) => {
      console.log('Success: ', data);
    },
    contentType: 'application/json'
  });
});

