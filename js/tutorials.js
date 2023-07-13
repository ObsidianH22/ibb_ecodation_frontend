/*

var name="hacer"; 
console.log(name);  // "hacer"  (konsola yazdırır ama VSCode deprecated uyarısı verir)

var surname;
console.log(surname);  // undefined

var age;
console.log(age);  // undefined
age=23;

job="engineer";
console.log(job); // konsola engineer yazdırır. hoisting işlemi yaptı burada
var job;

*/


//İlk önce değeri atadığımız için js onu bir bellekte tutuyor, “hmm varmı acaba benim aşağılarda bir yerlerde atanmış değişkenim “ diye düşünüp, sabırlı davranıp, aşağı doğru inmeye başlarken “işte buradaaa!” diye bağırıp değişkenini buluyor ve heyecanla hemen kendi değişkenini sahiplenerek onu baş tacı yapıyor.

//yani yapıyı şuna çeviriyor. 

/*
var job;
job="engineer";
console.log(job);
*/


//Burada bilmemiz gereken en önemli şey, sadece değişkenler yukarı taşınır, değerler yukarı taşınmaz !

//LET ve CONST hoisting işlemine duyarlı değildir !

////////////////////////////////////////////////////////////////////////////////////////////////

//Casting in JavaScript

//https://flaviocopes.com/javascript-casting/

//Casting from number to string

//String(10) //"10"
//(10).toString() //"10"

//Casting from boolean to string

//String(true) //"true"
//true.toString() //"true"
//String(false) //"false"
//false.toString() //"false"

//Casting from date to string

//String(new Date('2019-01-22'))
//"Tue Jan 22 2019 01:00:00 GMT+0100 (Central European Standard Time)"

//(new Date('2019-01-22')).toString()
//"Tue Jan 22 2019 01:00:00 GMT+0100 (Central European Standard Time)"

//Special cases with string

//String(null) //"null"
//String(undefined) //"undefined"
//String(NaN) //"NaN"

//Number("1") //1
//Number("0") //0
//Number(" 1 ") //1  -- trim
//Number("") //0
//Number("12.2") //12.2

//If a string contains invalid characters, it will generate a NaN.

//Casting from boolean to number

//Number(true) //1
//Number(false) //0

//Special cases with number

//Number(null) //0
//Number(undefined) //NaN
//Number(NaN) //NaN

//Converting to booleans

//Boolean(false) //false
//Boolean(0) //false
//Boolean(NaN) //false
//Boolean("") //false
//Boolean(null) //false
//Boolean(undefined) //false


//undefined : değer verilmemiş değişkenler
//Nan : Not a Number 
//isNaN : sonuc false ise sayıdır
//infinity : tanımsızlık. bir sayının sıfıra bölünmesi gibi. 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//MATH FUNCTIONS

/*
console.log(Math.PI);
console.log(Math.E);
console.log(Math.min(4,1,99,555,25,-100));
console.log(Math.max(4,1,99,555,25,-100));

console.log(Math.sqrt(16));
console.log(Math.abs(-25));
console.log(Math.pow(2,5));

console.log(Math.floor(3.9));
console.log(Math.ceil(3.9));
console.log(Math.round(6.5));
console.log(Math.round(6.4));

console.log(Math.sin(45));
console.log(Math.round(Math.random()*9+1));

*/

//javascripte bilimsel gösterim. 2023000 sayısının farklı bilimsel yazış şekilleri:

/*
var sayi1=2023000;
var sayi2=2023E3; 
var sayi3=20230E2;
var sayi4=2.023E6;
var sayi5=20.23E5;
var sayi5=202.3E4;
var sayi6=202.3E+4;  //+ işareti konularak da yazılır. aynı sonucu verir. 
var sayi7=0.2023E+7;
var sayi8=0.02023E+8;

console.log(sayi1+" sayi 1");
console.log(sayi2+" sayi 2");
console.log(sayi3+" sayi 3");
console.log(sayi4+" sayi 4");
console.log(sayi5+" sayi 5");
console.log(sayi6+" sayi 6");
console.log(sayi7+" sayi 7");
console.log(sayi8+" sayi 8");

*/


//ODEV : NUmber ile parseInt arasındaki fark nedir?

/*
console.log(Number("10")+10);
console.log(parseInt("10")+10);

*/

//ODEV : String() ile .toString arasındaki fark nedir?

//var - let - const 

// String 

//boşluk bir karakter olarak kabul edilir. 

/*
let str=" js öğreniyorum js";
console.log(str);
console.log(str.length); //string in uzunluğunu belirtir
console.log(str.trim().length); //boşluklar kesildikten sonraki uzunluğu verir

console.log(str.toUpperCase);
console.log(str.toLowerCase);

console.log(str.charAt(0));

console.log(str.indexOf("js"));
console.log(str.lastIndexOf("js")); //sondan arayarak ifadenin indeksini bulur

console.log(str.concat("sona"));
console.log(str.replace(str , "değiştir"));

console.log(str.substring(1)); //
console.log(str.substring(0,4)); //


*/

// ÖDEV NOT:5 adımı beraber yapalım.
// kullanıcı tarafından girilen bir kelimenin (prompt)
// let userData= prompt("Lütfen bir şeyler yazınız");
// S-1) Kaç karakterlidir ? (length)
// S-2) boşluklar alınarak Kaç karakterlidir ? (trim)
// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())
// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase())
// S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, indexOf)
// console.log(userData.replace("xxxxxxx"),"javascript");
// console.log(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript"));
// S-6) yazdığınız kelimede "javascript ile mi başlıyor" ? (startsWith()) 
// S-7) yazdığınız kelimede "javascript ile mi bitiyor" ? (endsWith())
// S-8) ilk harf nedir  ? (charAt())
// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())

//FUNCTION (Normal)
//1 returnsuzParametresiz
/*
function returnsuzParametresiz(){
    console.log("deneme");
}
returnsuzParametresiz()
*/

//2 returnsuzParametreli
/*
function returnsuzParametreli(adi){ //parametre
    console.log("deneme" + adi);
}
returnsuzParametreli("HamitM") //argüman
*/

//3 returnluParametresiz
/*
function returnluParametresiz(){
    return "deneme";
}
let result3 = returnluParametresiz();
console.log(result3);

*/
//4 returnluParametreli
/*
function returnluParametreli(soyadi){
    return "deneme66" + soyadi;
}
let result4 = returnluParametreli("Mızrak");
console.log(result4);
*/

//return süz fonksiyonları direk console.log ile çağırabiliyoruz. returnlü olanları ise bir değişkene atarak çağırabiliyoruz. 

//ANONYMOUS FUNCTION

let anonymous=function(){}

//ARROW FUNCTION

let arrow = () => {}

//kullanıcı tarafından girilen bir kelimenin (prompt)

let userData= prompt("Lütfen bir şeyler yazınız");
//S-1) Kaç karakterlidir ? (length)

console.log(userData.length);

//S-2) boşluklar alınarak Kaç karakterlidir ? (trim)

console.log(userData.trim().length);

// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())

console.log(userData.toLowerCase());

// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase())

console.log(userData.toUpperCase());

// S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, indexOf)

console.log(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript"));

// S-6) yazdığınız kelimede "javascript" ile mi başlıyor" ? (startsWith()) 

console.log(userData.startsWith("javascript"));

// S-7) yazdığınız kelimede "javascript" ile mi bitiyor" ? (endsWith())

console.log(userData.endsWith("javascript"));

// S-8) ilk harf nedir  ? (charAt())

console.log(userData.charAt(0));

// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())

console.log(userData.concat(" ben js öğreniyorum"));

// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())

console.log(userData.substring(0,4));