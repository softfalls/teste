/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var custom = {};
custom.ajax=function(obj,funcao,view){                                          // FUNÇÃO AJAX
    var data = {'obj':obj,'funcao':funcao};                                     // SETA OS PARAMETROS
    var retorno;                                                                // VAR DE RETORNO
    $.ajax({type:"POST", url:view, dataType:"json", data:data,async:false,      // FAZ UM AJAX SINCRONIZADO COM A FUNCAO
        success: function(json) { retorno = json; },                            // RETORNO DO AJAX NO SUCCESS
        error: function() { retorno=null; }                                     // RETORNO DO AJAX NO ERROR
    });                                                                         // FIM DO AJAX
    return retorno;                                                             // RETORNO DA FUNÇÃO
};