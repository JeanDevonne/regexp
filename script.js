//Una Expresión regular en Javascript está compuesta por.
/*

/&(lt|gt|amp);/gi
|-------------|--
|       |     | |
|       |     | Flags opcionales (g,i,m,y,u,s)
|       |     Finaliza con otro Slash
|       Patrón (Lo que se validará)
Inicia con slash


Meta Caracteres.

.   //Metacaracter Punto (.): Encuentra todo excepto saltos de línea
[]  //Clases de Caracteres: Los brackets permiten
    - establecer, o combinación de ambos
    - concatenar multiples rangos
    - la mayoría de los metacaracteres no necesitan ser escapados en []
    Ejemplos
    [a-z]
    [0-9]
    [a-z$@0-9]

()  //Sirven para crear Subexpresiones, crea delimitaciones sobre la que actúa un operador.
{}  //Cuantificadores
    {n} = n veces
    {m,n} = al menos m veces pero no mas de n veces
    {m,} = al menos m veces
\   //Backslash: Caracter de escape
^   //Inicio del string
$   //Final del string
|   //Or
?   // = {0,1} El caracter anterior es opcional, aparece 0 o 1 vez. 
+   // = {1,} El caracter anterior aparece 1 vez o mas.
*   // = {0,} Es la combinación de ? y +

Flags (g,i,m,y,u,s): Los flags nos permiten modificar la busqueda en el patron

g: Global, busca en el texto completo y no se detiene al encontrar la primera coincidencia.
i: Insensitive a mayúsculas y minúsculas.
m: Multilínea, trata los caracteres de inicio y fin (^ y $) como multiples lineas
y: 
u: Unicode,
s: Flag Experimental, hace que el metacaracter punto (.) encuentre saltos de línea.

Las Expresiones regulares tienen muchos usos como:
validación de datos, extracción de datos, transformación de datos.

"pâté".normalize("NFD").replace(/[\u0300-\u036f]/g, "") //"pate"
//donde \uXXXX indica un caracter unicode
'contact@jeanleon.website'.match(/(\w+)@/)[1] // "contact"
*/
//Creación de la variable que pasaremos a validar con la expresión regular.
var valor = "0a1.&%@lhotmail.com";
//Creando la expresión regular
//1 forma mediante la notación linteral.
var regexp = /casa/;//Cualquier oración que contenga la palabra casa.
var regexp2 = /casa/g ;//g (global). Busca siempre en el texto completo en vez de detenerse al encontrar la primera coincidencia del patrón.
var mail = /[^@]+@[^@]/;//Validación de email.
//2 forma utilizando el constructor RegExp()
var re1 = new RegExp('casa','g');// RegExp('expression','flags(g|i|m)');
var re2 = new RegExp('ab+c');
//Validamos el valor
var resultado = mail.test(valor);
//Mostramos el resultado de la validación (true/false)
document.write(`<h1>El resultado de la evaluación es: ${resultado}</h1>`);

//Ejemplo: 
var myRegex = /\sglobos?/;
// "Un globo"    -> True
// "dos globo"   -> True
// "Tres globos" -> True
// "Misglobos"   -> False (por que no hay un espacio)

//Ejemplo: 
var myRegex = /globo/g; //Busca todas las coincidencias para "globo" en el texto.
/*

"Un globo es un recipiente de material flexible relleno generalmente de aire o helio, a menudo usado como juguete para los niños. Los globos también constituyen un buen soporte publicitario, al poder serigrafiarse en varios colores, sirviendo de conmemoración o recordatorio de eventos o marcas comerciales.
Básicamente, el globo puede llenarse con aire soplando a pulmón o con helio, en cuyo caso es necesario utilizar un inflador específico.
Los globos se comercializan por unidades o, más comúnmente, en bolsas surtidas.
El globo 100% de látex es un juguete o elemento de decoración ecológico porque es biodegradable. Un globo 100% de látex tarda en biodegradarse unos 80 días, igual que una hoja de roble."

*/

// "Tengo un gloooooobo grande y tres globos pequeños."
// ¿Como podemos hacer para capturar los dos globos?.

var myRegex = /glo+bos?/gi;

//Ejemplo : Validación de una URL
var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
var url = "http://www.ora.com:80/goodparts?q#fragment";
var r1 = parse_url.exec(url);//Validación
var names = ['url', 'scheme', 'slash', 'host', 'port', 'path', 'query', 'hash'];
var blanks = '   ';
var i;
document.write('<pre>');
for (i = 0; i < names.length; i++) {
    document.writeln(names[i] +': '+ blanks.substring(names[i].length), r1[i]);
}
document.write('</pre>');

//Test Challenge:
// fizz buzz fizzbuzz
'fizz buzz fizzbuzz'.match(/(fizz|)(buzz|)/g); //Encontraria todo incluyendo ""
'fizz buzz fizzbuzz'.match(/(fizzbuzz|fizz|buzz)/g); //Funciona pero no es elegante
'fizz buzz fizzbuzz'.match(/(fizz(buzz|))|buzz/g); //Esto probablemente sea mejor

//Match a woman
'ella es una 👩 y tiene una 👧'.match(/👩/g);

//El metacaracter Punto .
//Match /1.5/g
//Encuentra todo excepto saltos de línea
'1.5'.match(/1.5/g);
'105'.match(/1.5/g);
'1$5'.match(/1.5/g);
'1\n5'.match(/1.5/g);   // . No encuentra saltos de línea.
'1\n5'.match(/1.5/gs);  //El flag s hace que . encuentre saltos de línea

//Si realmente queremos buscar un numero decimal como 1.5
//debemos escapar el metacaracter anteponiendo un backslash \
'1.5'.match(/1\.5/g);   //Encuentra 1.5
'1$5'.match(/1\.5/g);   //No encuentra resultados

//Curiosidad en Emojis: Poopemoji ocupa dos caracteres
'21💩54'.match(/1.5/gs);  //No encuentra resultados
'21💩54'.match(/1..5/gs);  //Encuentra 1💩5

//Cuantificadores
//Match /a{5,10}/g
'aaaa'.match(/(a){2,}/);
//Match /ha{2}/g
'hahahaha'.match(/ha{2}/g); //No funciona
//Match /(ha){2}/g
'hahahaha'.match(/(ha){2}/g); //Funciona

//Match /💩{2,}/g
'💩💩💩💩💩💩'.match(/💩{2,}/);//Si desea agrupar de 2 no funciona
'💩aa💩💩💩💩💩'.match(/(💩){2,}/);//Hay que agrupar con parentesis.

'caaaat'.match(/(a){2,}/);//Hay que agrupar con parentesis.

"boooo".match(/bo{0,}/g); // 0 a mas "o"
"boooo".match(/bo{1,}/g); // 1 a mas "o"
//Shortcuts para Cuantificadores
"boooo".match(/bo+/g); // "o" debe aparecer almenos una vez
"boooo".match(/bo*/g); // * indica que el elemento anterior puede repetirse cero o mas veces
"boooo".match(/bo?/g); // la "o" es opcional
"cat".match(/o?/g); // Si solo ponemos o? y la cadena no contiene o's, encontraremos 4 cadenas vacias.
// Validar tags.
"<p>foo</p>".match(/<.+?>/g);

//
"buck".match(/b|d|f|g|l|m|p|r|t|y|uck/);
"duck".match(/b|d|f|g|l|m|p|r|t|y|uck/);
"fuck".match(/b|d|f|g|l|m|p|r|t|y|uck/);
//Mas elegante.
"luck".match(/[bdfglmprty]uck/); //Set
"zuck".match(/[a-z]uck/); //Range
"$uck".match(/[a-z$@0-9]uck/g);
"1uck".match(/[a-z$@0-9]uck/g);
".uck".match(/[a-z$@0-9.]uck/g); //Encuentra ".uck"
"#uck".match(/[a-z$@0-9.]uck/g); //No encuentra nada

//Colores Hex
// #abc #f00 #BADA55 #COFFEE
"#abc #f00 #BADA55 #COFFEE".match(/#([a-f0-9]{3}){1,2}/gi);

//Caracter alfanumerico
"Killer Frost".match(/\w+/g);
"λέα βέρóu".match(/\w+/g);//retorna NULL por que \w solo admite [a-zA-Z0-9]

"Λιβάδι Βέρο".match(/\p{Script=Greek}+/gu); // retorna ["Λιβάδι", "Βέρο"]
"Killer Frost Λιβάδι Βέρο".match(/\p{Script=Greek}+/gu); // retorna ["Λιβάδι", "Βέρο"] 
"Killer Frost λέα βέρóu".match(/\p{Alpha}+/gu);//Cualquier letra

//Propiedades CSS
"font-size".match(/[/\w-]+/g);

//Espacios en blanco
"Michael Burnham".match(/\s+/g); //Funciona

//Contador de palabras
function cuentaPalabras(texto) {
    return texto.match(/\w+/g).length; //Solo admite textos  [a-zA-Z0-9]
}

function cuentaPalabras(texto) {
    return texto.split(/\s+/g).length;//Esta opción es mejor por que es independiente del idioma
}

//No es un digito \D
"a$999fz".match(/\D/g); //Devuelve  ["a", "$", "f", "z"]

//Numeros de tarjeta de crédito
// 4060 1234 5678 9000
// 4060-1234-5678-3457
// 1230123456789123
// 4.060/123456-78 90-00

"4060 1234 5678 9000".match(/\d{16}/g); //Nunca hagas esto
"4060 1234 5678 9000".match(/(\d\D*){16}/);//Obtiene solo digitos

// ^ Inicio de un string
// $ Fin de un string

"a".match(/^a$/g); // "a"
"\na\n".match(/^a$/gm); // "a"

//Dates - ISO 8601
// año-mes-dia
// 2012-12-12 , 1986-06-13
"2012-12-12".match(/(\d){4}-(\d){2}-(\d){2}/g);

let str = "1986-06-13";
/^\d{4}-\d{2}-\d{2}$/.test(str); // true

let str2 = "9999-99-99";
/^\d{4}-\d{2}-\d{2}$/.test(str2); // true ¿existe mes o dia 99?

let s = "2018-05-18";
/^\d{4}-(0\d|1[0-2])-([0-2]\d|3[01])$/.test(s); //Probablemente suficiente

//Trimming a String

"  hola :)  ".replace(/^\s+|\s+$/g, ''); // "hola :)"

if (!String.prototype.trim) {
    String.prototype.trim = function(){
        return this.replace(/^\s+|\s+$/g, '');//Devuelve un string sin espacios al inicio y final.
    }
}

// /b 'Word Boundary'. Marca el inicio o el fin de una palabra ( similar a '^' y '$' para una línea)

"foo".match(/\bfoo\b/g);
"foo".match(/\bfoo\b/g);

// (?=a)  = seguido por a, éste puede ser cualquier expresión regular.
"ab".match(/a(b)/g); //"ab"
"ab".match(/a(?=b)/g); // solo selecciona a si le sigue b -> "a"
"abaco".match(/a(?=b|c)/g); //Solo a si le sige b o c -> "a"
//Podemos contar cuantas a's hay en una oración
"Esta es una oración".match(/a(?=.)/g).length; // 3
//Podemos tener multiples
let v1 = "a##%d$";
/a(?=.*\w)(?=.*\$)/g.test(v1); // true

// (?!a)  = No seguido por a
let v2 = "a##%d$";
/a(?=.*\w)(?!.*\$)/g.test(v2); // false

//Intersecciones A ∩ B
//Las contraseñas deben tener mas de 6 caracteres
passwor.length > 6 
&& /\d/.test(password) //.test(passwor) //Tiene simbolos?Tiene digitos?
&& /[a-z]/i.test(passwor) //tiene letras?
&& /\w/.test(passwor); //Tiene simbolos?
//Con Lookaheads...
/^(?=.*\d)(?=.*[a-z])(?=.*[\W_]).{6,}$)/i;

//Diferencia A - B
//Entero no divisible por 50
/^(?!\d+[50]0)\d+$/.test();

// Best Practices
// Practicality > Precision

//Email
//Nunca hagan esto
/^[a-z]+@[a-z]+\.[a-z]{2,5}/; //Falla por los caracteres internacionales. λία@βέρου.ελ , lea@verou.me o ля@Вери.РФ

/^\S+@\S+\.\S+/; //Yes, It's ok to be lax!

//Mantenlo simple