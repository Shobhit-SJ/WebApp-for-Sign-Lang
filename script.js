// const hamburger = document.querySelector(".hamburger");
// const navLink = document.querySelector(".nav__link");
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const toggleCameraBtn = document.getElementById('toggle-camera-btn');
const captureBtn = document.getElementById('capture-btn');
const predictedOutputDiv = document.getElementById('predicted-output');
let isCameraOn = false;

// hamburger.addEventListener("click", () => {
//     console.log("Btn clicked");
//     navLink.classList.toggle("hide");
//   });
  
  
//   navLink.addEventListener("click", () => {
      
//       navLink.classList.add("hide");
//   })

toggleCameraBtn.addEventListener('click', () => {
    if (!isCameraOn) {
        startCamera();
    } else {
        stopCamera();
    }
});

captureBtn.addEventListener('click', () => {
    captureImage();
});

function startCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            isCameraOn = true;
            toggleCameraBtn.textContent = 'Turn Camera Off';
            captureBtn.disabled = false;
        })
        .catch(err => console.error('Error accessing webcam:', err));
}

function stopCamera() {
    const stream = video.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach(track => {
        track.stop();
    });
    video.srcObject = null;
    isCameraOn = false;
    toggleCameraBtn.textContent = 'Turn Camera On';
    captureBtn.disabled = true;
}

function captureImage() {
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL('image/png');
    // Simulated prediction output
    predictedOutputDiv.textContent = 'Predicted Output: A';
}


// animations
const animation = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
  })
  animation.reveal(' .contact-form', {delay: 200, origin: 'right'});
  animation.reveal('.contact-info, .footer', {delay: 200, origin: 'top'});
