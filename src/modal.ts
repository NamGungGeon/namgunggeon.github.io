export const showModal = (content: string) => {
  $("#default-modal").attr("class", "modal show").find(".content").html(content);
};

export const closeModal = () => {
  $("#default-modal").attr("class", "modal");
};
$(document).ready(() => {
  const modal = $("#default-modal");
  modal.on("click", (e: Event) => {
    closeModal();
  });
  modal.find(".content").on("click", (e: Event) => {
    // e.stopPropagation();
  });
});
