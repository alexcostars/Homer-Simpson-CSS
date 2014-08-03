var camada_atual = 28;

function proximo() {
    if(camada_atual <= 28) {
        camada_atual++;
        $("#elem_" + camada_atual).css("visibility", "visible");
    }
}

function anterior() {
    if(camada_atual >= 1) {
        $("#elem_" + camada_atual).css("visibility", "hidden");
        camada_atual--;
    }
}

$('body').mousemove(function(e){
    var coordenada_X = (e.pageX * -1 / 40);
    $(this).css('background-position', coordenada_X + 'px 0px');
});