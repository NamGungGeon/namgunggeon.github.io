
const techs= [];
$(document).ready(function (){
    const chips= $(".chip");
    for(let l=0; l< chips.length; l++){
        const chip= $(chips[l]);
        const tech= chip.text().replace(/\n/gi, '').trim();
        if(techs.indexOf(tech) === -1){
            techs.push(tech);
        }
    }
    techs.sort();
    // console.log(techs);

    $("#techs").css('display', 'block')
        .find('.chips').html(
            techs.map(tech=> `<div class='chip'>${tech}</div>`).join('')
        );
})