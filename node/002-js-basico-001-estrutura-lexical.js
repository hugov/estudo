// A Gramática léxica do Javascript

// 1. Caracteres de controle
// Espaço em branco
console.log('\t Tabulação horizontal');
console.log('\v Tabulação vertical');

// Finalizadores de linha
console.log('Exemplo 1 \nExemplo 2');
console.log('\rExemplo 3 \rExemplo 4');

// 2. Comentários

// Isto é um comentário de linha

/*  
    Isto é um comentário de varias linhas.
*/

// 3. Palavras chaves ou palavras reservadas
// Para quem sabe Java/C e afins são muito parecidas
// Esta url pode ajudar neste entendimento

// 4. Literais

// null
estudo = null;
console.log('Estudo: ', estudo);

// booleanos
primeiro = true;
console.log('Primeiro: ', primeiro);

motorLigado = false;
console.log('Motor Ligado: ', motorLigado);

// números decimal
posicaoCorrida=15
console.log('Posição na corrida:', posicaoCorrida);

// números binário

var FLT_SIGNBIT = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
var FLT_MANTISSA = 0b00000000011111111111111111111111; // 8388607

// números octal

var n = 0o755; // 493
var m = 0o644; // 420

// Também é possível com apenas um zero no início (veja sobre decimais acima)
//var l = 0755;
//var m = 0644;

// Hexadecimal

0xfffffffffffffffff; // 295147905179352830000
0x123456789abcdef; // 81985529216486900
0xa; // 10


// Objetos

var o = { a: "foo", b: "bar", c: 42 };

// Notação curta. Novidade no ES2015
var a = "foo",
  b = "bar",
  c = 42;
var o = { a, b, c };

// instead of
var o = { a: a, b: b, c: c };

// Arrays
[1954, 1974, 1990, 2014];

// Strings
'foo';
"bar";

// Caracteres unicodes

// Expressões regulares

// Template Strings

// Inserção automática de ponto e vírgula