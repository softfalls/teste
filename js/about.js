/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var about = {};

about.start=function(){
    var obj = new Object();
    obj.nome = $('#inputNome').val();
    var texto = custom.ajax(obj,'getTexto','../view/vAbout.php');
    $('#body').add(texto);
};
 
about.start();

