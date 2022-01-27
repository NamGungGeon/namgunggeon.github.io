declare const $: any;

const techs: string[] = [];
$(document).ready(function () {
  const chips = $(".chip");
  for (let i = 0; i < chips.length; i++) {
    const chip = $(chips[i]);
    const tech = chip.text().replace(/\n/gi, "").trim();
    if (techs.indexOf(tech) === -1) {
      techs.push(tech);
    }
  }
  techs.sort();

  $("#techs")
    .css("display", "block")
    .find(".chips")
    .html(techs.map((tech) => `<div class='chip'>${tech}</div>`).join(""));
});
