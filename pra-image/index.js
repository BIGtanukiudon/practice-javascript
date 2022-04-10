import { sakura, cat, snow } from "./dataUri";

function readDateUri() {
  const sakuraImgElement = document.getElementById("random-image");
  sakuraImgElement.src = sakura;
}

function randomImage() {
  // ランダムに画像を表示する
}

readDateUri();
window.runOptimization = randomImage;
