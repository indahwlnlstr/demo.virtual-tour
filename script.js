var container = document.querySelector('#container');
var panorama = new PANOLENS.ImagePanorama('impian.jpeg');
var panorama2 = new PANOLENS.ImagePanorama('spaceship.jpeg');

var viewer = new PANOLENS.Viewer({container: container});
viewer.add(panorama, panorama2);

var infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot.position.set(0, -2000, -5000);
panorama.add(infospot);

infospot.addEventListener('click', function(){
    viewer.setPanorama(panorama2);
});