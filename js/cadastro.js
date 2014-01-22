
var cadastro = {};
      
    // custom.ajax é uma função da api nossa
    // já um ajax para uma viewer que está no terceiro parametro
    // segundo parametro e o nome da funcao se sera executada na viewer passada no terceiro parametro
    // parti para a viewers

cadastro.start = function() {
    $('#btBuscar').click(function(){cadastro.buscarCarro();});
};
 
cadastro.buscarCarro = function() {
    var obj = new Object();  // estanciando dentro da variavel obj um objeto generico.
    //obj.nome = $('#inputNome').val(); // atributo nome do objeto obj recebe a string preto
    obj.cor_carro = $("#corCarro").val();
    var retorno = custom.ajax(obj, 'buscarCarro', '../view/vCadastro.php');
    //$('#body').add(texto);
    
    $("#result").remove();  // REMOVE CASO JÁ EXISTA UMA DIV COM ID='RESULT'
    var r = $("<div id='result'>");  // CRIA UMA DIV COM ID='RESULT'
    for (var i = 0; i < retorno.length; i++) {
        //console.write("entrou for");
        var obj = retorno[i];
        //document.write(obj.carro_id + " " + obj.mod_carro + " " + obj.cor_carro + "<BR />");        
        r.append(obj.cor_carro + " " + obj.mod_carro + " " + obj.carro_id + "<BR />"); // ADD O OBJ DENTRO DA DIV        
    }
    $("#body").append(r); // ESCREVE A DIV DENTRO DO ID='BODY'
};
cadastro.start();