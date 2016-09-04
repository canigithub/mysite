window.onload = function() {
  try {
    TagCanvas.Start('myCanvas', 'tags', {
      shape: 'sphere',
      depth: 0.8,
      maxSpeed: 0.03,
      minSpeed: 0.03,
      initial: [-0.2, -0.2],
    });
    // TagCanvas.initial = [0.2,0.2];
  } catch(e) {
    // something went wrong, hide the canvas container
    document.getElementById('myCanvasContainer').style.display = 'none';
  }
};