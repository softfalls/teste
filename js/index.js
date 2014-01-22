var index = {}; // criacao de uma variavel que recebera todas as funcoes js que controlam o index.html
                // muito importante para não ter o problema de sobescrever funçoes na chamada do index.
        
index.start=function(){ // A variavel index "estanciada", recebe no "metodo" start uma função, ou seja, é uma funcao apartir de agora
    // $ indica um que é um elemento jquery
    // # indica um id em algum lugar no html
    // .click função jquery de click (acao) no elemento deste id
    // function(){} dentro do click indica que esta sobrescrevendo a funcao que originalmente o click faria
    // index.sobre() chamada da função que será executada no lugar da função do click
 
    $('#sobre').click(function(){ index.sobre(); }); // com ctrl + click na funçao o netbeans direciona a tela da ide para onde a funcao esta escrita
    $('#estilos').click(function(){ index.estilos(); });
    $('#news').click(function(){ index.news(); });
    $('#contato').click(function(){ index.contato(); });
    $('#cadastro').click(function(){ index.cadastro(); });
   
    // executa funçao sem nenhum evento, logo apos carregar o html.
    //index.buscarCarro();
    
};

index.sobre=function(){ // implementação da funçao (função propriamente dita)
    // um elemento jquery com tem um id body utilizando uma funçao .load(carrega)
    // about.html é o arquivo que será carregado na função
    // ? indica o final do arquivo a ser carregado
    // nocache é um parametro utilizado para obrigar o bowser a ler e escrever o arquivo normalmante.
    // Math.random() classe Math usando metodo random para criar numero aletorio.
    $('#body').load('about.html?nocache'+Math.random() ); 
};

index.estilos=function(){
    $('#body').load('hairstyle.html?nocache'+Math.random() );
};
index.news=function(){
    $('#body').load('news.html?nocache'+Math.random() );
};
index.contato=function(){
    $('#body').load('contact.html?nocache'+Math.random() );
};
index.cadastro=function(){
    $('#body').load('cadastro.html?nocache'+Math.random() );
};

index.buscarCarro=function(){
    // estanciando dentro da variavel obj um objeto generico.
    var obj = new Object();
    // atributo cor_carro do objeto obj recebe a string preto
    obj.cor_carro = "%%";
    // custom.ajax é uma função da api nossa
    // já um ajax para uma viewer que está no terceiro parametro
    // segundo parametro e o nome da funcao se sera executada na viewer passada no terceiro parametro
    // parti para a viewers
    var resultado = custom.ajax(obj,"buscarCarro","../view/vIndex.php");
    
    for(var i=0; i<resultado.length; i++){
        var obj = resultado[i];
        $("#footer div p").append(obj.cor_carro + " " + obj.mod_carro + " " + obj.carro_id + "<BR />");
    }
};

index.start(); // chamada da função start

