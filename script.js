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

[
{
(
)
\
+
^
$
.
|
?
*
+

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
'fizz buzz fizzbuzz'.match(/(fizz(buzz|))|buzz/g)

//Match a woman
'ella es una 👩 y tiene una 👧'.match(/👩/g)

//Match /1.5/g

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
"boooo".match(/bo+/g); // "o" debe aparecer almenos una vez
"boooo".match(/bo*/g); // * indica que el elemento anterior puede repetirse cero o mas veces
"boooo".match(/bo?/g); // la "o" es opcional

// Validar tags.
"<p>foo</p>".match(/<.+?>/g);

//
"buck".match(/b|d|f|g|l|m|p|r|t|y|uck/);
"duck".match(/b|d|f|g|l|m|p|r|t|y|uck/);
"fuck".match(/b|d|f|g|l|m|p|r|t|y|uck/);
//Mas elegante.
"luck".match(/[bdfglmprty]uck/);
"zuck".match(/[a-z]uck/);

//Colores Hex
// #abc #f00 #BADA55 #COFFEE
"#abc #f00 #BADA55 #COFFEE".match(/#([a-f0-9]{3}){1,2}/gi);

//Caracter alfanumerico
"Killer Frost".match(/\w+/g);
"Λιβάδι Βέρο".match(/\w+/g);//retorna NULL por que \w solo admite [a-zA-Z0-9]

"Λιβάδι Βέρο".match(/\p{Script=Greek}+/gu); // retorna ["Λιβάδι", "Βέρο"]
"Killer Frost Λιβάδι Βέρο".match(/\p{Script=Greek}+/gu); // retorna ["Λιβάδι", "Βέρο"] 
"Killer Frost Λιβάδι Βέρο".match(/\p{Alpha}+/gu);//Cualquier letra

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

//Numeros
// 4060 1234 5678 9000
// 4060-1234-5678-3457
// 1230123456789123
// 4.060/123456-78 90-00

"4060 1234 5678 9000".match(/\d{16}/g); //Nunca hagas esto
"4060 1234 5678 9000".match(/(\d\D*){16}/);//Obtiene solo digitos

