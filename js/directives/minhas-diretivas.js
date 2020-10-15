// Criando uma diretiva <xpto> </xpto>
angular.module('minhasDiretivas', [])
.directive('meuPainel', function(){

    var ddo = {};
    ddo.restric = "AE";

    //Escopo da diretiva
    ddo.scope = {
        // @ faz com que possa ser passado um valo/string para aquele campo de referencia 
        titulo: '@'
    };

    //liberando a ferramenta que permite a "minha" TAG exibir o elemento FILHO que no caso, seria 
    //a TAG com a imagem que esta DENTRO da "minha TAG"
    ddo.transclude = true;

    //mostrando para a diretiva qual o TEMPLATE que vai utilizar
    ddo.templateUrl = 'js/directives/meu-painel.html'

    return ddo;
})

.directive('minhaFoto', function(){

    var ddo = {};

    ddo.restrict = "AE";
    
    ddo.scope = {
        titulo: '@',
        url:'@'
    };

    ddo.templateUrl = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';

    return ddo;
    

})

