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

