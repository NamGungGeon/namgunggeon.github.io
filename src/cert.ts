import Flickity from "flickity";
import { showModal, closeModal } from "./modal";

const certList = new Flickity("#cert-gallery", {
  cellAlign: "center",
  contain: true,
  wrapAround: true,
  autoPlay: true,
});

document.querySelectorAll("#cert-gallery img").forEach((imgElement) => {
  console.log(imgElement.attributes.getNamedItem("src")!.value);
  const imgUrl = imgElement.attributes.getNamedItem("src")!.value;
  imgElement.addEventListener("click", () => {
    showModal(`
      <img src='${imgUrl}' class='max-width'/>
    `);
  });
});
