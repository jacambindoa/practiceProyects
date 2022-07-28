const d = document,
  n = navigator;

export default function webcam(id) {
  const $video = d.getElementById(id);
  // console.log(n.mediaDevices)
  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        $video.srcObject = stream;
        $video.play();
      })
      .catch((err) => console.log(`¡Sucedio el siguiente error!: ${err}`));
      
  }
}
