// Desafio 1
//Você foi chamado para ajudar a pintar uma parede em uma casa.
// A parede tem formato retangular, e você precisa saber quantos metros quadrados de tinta serão necessários para cobri-la. Para isso, você deve calcular a área da parede.
// A parede tem 4 metros de altura e 5 metros de largura.

//Para calcular a área de um retângulo, usamos a seguinte fórmula:
// area = largura * altura;

// Dimensões da parede (largura e altura em metros)

var largura = 5;
var altura = 4;

//Eu declaro a variável area e calculo seu valor com a fórmula abaixo.

var area = largura * altura;

//A variável area armazena o resultado do cálculo.


//Depois, para imprimir na tela, eu uso + area + para concatenar a string com o valor da variável.
//Como tenho uma string no início e outra no final, utilizo + para concatenar a variável area entre essas duas strings
//Assim, fica + area +, onde area é a variável cujo valor será exibido.

console.log("A área da parede é:" + area + " metros");

//-------------------------------------------------------------------------------------------------

// Desafio 2

// Imagine que você está desenvolvendo um sistema de cadastro para uma empresa.
// Quando um usuário se cadastra, ele insere seu nome e sobrenome em campos separados.
// Você precisa juntar essas duas informações para formar o nome completo do
// usuário e exibir uma mensagem de boas-vindas.

// Nome e sobrenome inseridos pelo usuário
var nome = "João";
var sobrenome = "Silva";
// declarei a variavel pessoa = nome + sobrenome
// usei +" "+ para criar um espaço entre o nome e o sobrenome
var pessoa = nome +" " + sobrenome;


//Para exibir o nome completo com a mensagem de boas-vindas, usei + pessoa + para concatenar a variável pessoa com as strings da mensagem.
console.log("Ola! " + pessoa + " Seja bem vindo!");


//-------------------------------------------------------------------------------------------------


//Desafio 3

// Você está trabalhando no departamento de recursos humanos de uma empresa, e precisa
// calcular quantos dias um funcionário já viveu até agora, com base na idade informada.
// O funcionário informa sua idade em anos, e você deve converter esse valor para dias,
// considerando que todos os anos têm 365 dias.

// Idade do funcionário em anos
var idadeEmAnos = 30;
// para saber a idade em dias:
// declarei a variavel idadeDias onde ela armazena número de anos pelo número de dias por ano.

var idadeDias = 30 * 365

//para exibir o resultado eu chano a variavel idadeDias concatenada com as strings.
console.log("O funcionário viveu aproximadamente " + idadeDias + " dias");

//-------------------------------------------------------------------------------------------------


// Desafio 4

// Você trabalha em uma empresa de eventos, e foi solicitado a calcular quanto tempo
// um evento durou. Você recebeu o total de minutos que o evento durou, mas precisa
// converter esse valor em horas e minutos para gerar um relatório. Por exemplo,
//  se o evento durou 135 minutos, você deve dizer que ele durou 2 horas e 15 minutos.

// Duração total do evento em minutos
// para descobrir as horas dividi os minutos pelos minutos contidos em 1 hora
// usei o operador % para obter o resto da divisão que são os minutos restantes

var duracaoEmMinutos = 135;
var horas = Math.floor (duracaoEmMinutos / 60);
var minutos = duracaoEmMinutos % 60;


// Exibindo o resultado no console
console.log("O evento durou " + horas + " horas e " + minutos + " minutos.");

//Fim das atividade. No desafio 4 custei a entender que ao usar Math.floor ou Math.ceil eu preciso
//colocar parenteses para que a operação ocorra da ofrma correta sendo executado primeiro a operação e depois o arredondamento.
// Também vacielei quando tentei concatenar as variaveis com as strings pq deixei ... e custei a descobrir que o erro era devido aos ...
//  =)