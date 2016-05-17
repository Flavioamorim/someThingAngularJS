angular.module('meuModulo' , []);
angular.module('meuModulo' , []).controller('meuController', function($scope){

    $scope.message = "hello world";

    $scope.contatos = [

        {nome:'Pedro' , telefone: '0999899899'},
        {nome:'Day' , telefone: '434343433'},
        {nome:'Flavio' , telefone: '767667677'}
    ];

    $scope.carros = [
        {nome:'Fusca' , placa: 'AAA-111' , categoria: 'novos'},
        {nome:'Gol' , placa: 'MGA-4343', categoria: 'seminovos'},
        {nome:'Honda' , placa: 'MHH-789', categoria: 'velhos'}
    ];

    $scope.adicionarContato = function (contato){
        $scope.contatos.push( angular.copy ( contato ) );
        delete $scope.contato;
    };

    $scope.deletarContatos = function (contatos){
        $scope.contatos = contatos.filter(function (contato){
            if(!contato.selecionado) return contato ;
        });
    };

});
