$('#button').click(() => {
  const memeName = $('#myName').val();
  const memeComment = $('#myComment').val();
  $.ajax({
    type: 'POST',
    url: '/sendmessage',
    contentType: 'application/json',
    data: JSON.stringify({
      memeName,
      memeComment
    }),
  });
});

/* checking txt file every second */
const getInboxFile = () => {
  $.get('/notes.txt', (data) => {
    $('#chat').html(data);
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
  const nameOfPicture = $('#myName').val();
  const commentOnPicture = $('#myComment').val();
  // camera
  const canvas = $('#canvas')[0];
  const context = canvas.getContext('2d');
  context.drawImage(video, 0, 0);
  const dataURL = canvas.toDataURL('image/png');

  // defining second button post request.
  $.ajax({
    type: 'POST',
    url: '/sendingpic',
    data: JSON.stringify({
      canvas: dataURL,
      nameOfPicture,
      commentOnPicture
    }),
    contentType: 'application/json',
    success: (data) => {
      console.log('Success: ', data);
    },
  });
});

