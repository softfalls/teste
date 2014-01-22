
var cadastro = {};
      
    // custom.ajax é uma função da api nossa
    // já um ajax para uma viewer que está no terceiro parametro
    // segundo parametro e o nome da funcao se sera executada na viewer passada no terceiro parametro
    // parti para a viewers

cadastro.start = function() {
    $('#cadastro').click(function(){cadastro.buscarCarro();});
};
 
cadastro.buscarCarro = function() {
    var obj = new Object();  // estanciando dentro da variavel obj um objeto generico.
    //obj.nome = $('#inputNome').val(); // atributo nome do objeto obj recebe a string preto
    obj.cor_carro = $_REQUEST['corCarro'];
    var retorno = custom.ajax(obj, 'buscarCarro', '../view/vCadastro.php');
    //$('#body').add(texto);
    
    for (var i = 0; i < retorno.length; i++) {
        //console.write("entrou for");
        var obj = retorno[i];
        document.write(obj.carro_id + " " + obj.mod_carro + " " + obj.cor_carro + "<BR />");
        //$("#teste").append(obj.cor_carro + " " + obj.mod_carro + " " + obj.carro_id + "<BR />");
    }
}
;
cadastro.start();