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

//let anonymous=function(){}

//ARROW FUNCTION

//let arrow = () => {}

////////////////////////////////////////////////////////////

//CONDITION : IF - ELSE - ELSE IF - SWITCH CASE 
/*
const condi=()=> {
    let number=4;
    console.log((number>=2) ? "Büyüktür" : "Küçüktür");
}
condi()
*/

//LOOPS : for - for each - while - do while 

/*

let loop=()=> {
    for (let i=1; i<=10; i++) {
        document.write(i+ " ")
    }
}
loop();

let loop2=()=> {
    let i=1;
    while ( i<=10) {
        document.write(i+ " ")
        i++
    }
}
loop2();

let loop3 = () => {
    let i=1;
    do {
        document.write(i+" ")
        i++
    }
    while (i<=10);
}

loop3();

*/

// TRY - CATCH

/*
let trycathc = () => {
    try {
        alertx("pop-up");
    }
   catch(error) {
    console.log("hata mesajı: "+error.message);
    console.log("hata mesajı: " + error.name);
    console.error(error);
   }
   finally{
    console.log("db.close");
    console.log("port.close");
   }
    console.log("son satır");
}

trycathc()

*/


// DEBUG : Hata ayıklama 

//1 ile 10 dahil olmak üzere toplama işlemi yapan js algoritmayı yazınız

/*
const debugData=()=> {
    let sum=0;
    for (let i=1; i<10; i++){
        sum=sum+i;
    }
    console.log("toplam : " + sum)
}

debugData()
*/

//Ödev : 

// SORU 1<=userData<=50 
// 1 ile Kullanıcı tarafından alınan bitiş sayısına kadar toplama yapan Algoritma örneği 
// Örnek: 1<=user 1+2+3+...userdatası
// Eğer Bu sayılardan 7 sayıyı varsa bunu toplayama dahil etmesin (continue)
// Bu sayının en fazla 50'e kadar toplama yapabilir (break)
// bu sayılardan çift olanların kaç tane, sayıların kendisi ve toplamları nedir ?
// bu sayılardan tek olanların kaç tane, sayıların kendisi ve toplamları nedir ? 
// secret-Key kullanıcı eğer 44 girerse hiç bir işlem yapmadan sistemden çıkış sağlansın onunda haricinde sürekli işlem yapsın
// Dikkat: Bu algoritmayı Arrow Function ile yapalım.
// (Clean code kuralları çercevesinde ) algoritma yapan JS program?

/*
let sumAll=()=> {
    let userData=prompt("Lütfen bir sayı giriniz...");
 
    let sum=0; 
    let evenCount=0, evenSum=0, evenNumbers="";let oddCount=0, oddSum=0, oddNumbers="";

    for(let i=1; i<=userData; i++){
        if(i==44){
            return
        }
        if (i==7){
            continue;
        }
        if(i==50){
            break;
        }
        if(i%2==0){
            evenCount+=1;
            evenSum+=i; 
            evenNumbers= evenNumbers + " " + i;  
        }
        else{
            oddCount+=1;
            oddSum+=i; 
            oddNumbers= oddNumbers + " " + i; 
        }
        sum+=i;
    }
    console.log("Toplam : "+sum);

    console.log("Tek sayılar: " + oddNumbers);
    console.log("Tek sayı adedi: " + oddCount);
    console.log("Tek sayı toplam: " + oddSum);

    console.log("Çift sayılar: " + evenNumbers);
    console.log("Çift sayı adedi: " + evenCount);
    console.log("Çift sayı toplam: " + evenSum);
}
sumAll()

*/

// RETURN BREAK CONTINUE

//Örnek-1
//y=3x+4k ==> 1.dereceden 2 bilinmeyenli denklem algoritması
//Kullanıcı tarafından alınan x ve k değerlerini hesaplayan algoritma yazınız ?

/*
let denklem=()=> {
    let userX=Number(prompt("X için değer giriniz..."));
    let userK =Number(prompt("K için değer giriniz..."));

    let y=(3*userX)+(4*userK);
    console.log(y);
}

denklem()
*/

//örnek-2
//Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
//Formül: (derece*9/5)+32

/*

let userData = Number( prompt("Derece bilgisi giriniz..."));

let result = (userData*9/5)+32;

console.log( result );

*/

//örnek-3 operatör işlemleri: aşağıdaki örneği javascript ile yapalım
//4+3*2(3:3-1*6+9:1+(3:3))

/*
let result=(4+(3*2)*((3/3)-(1*6)+(9/1)+(3/3)));
console.log(result);

*/

// ÖDEV
// kullanıcıdan aldığımız isim alınsın
// kullanıcıdan aldığımız soyisim alınsın
// ilk karakter göstersin sonraki kelimeleri masking (maskeleme yapsın)
// eğer kullanıcı isim ve soyisimi ilk karakteri küçük girmişse büyük olsun mutlaka
// Hamit Mızrak
// H**** MIZ***
// ipucu: charAt, substring, indexOf, döngü, karar mekanizma

/*

//aşağıdaki maskeleme kodu tekrarlı harfler içeren durumlarda hata veriyor. 
let masking = () => {
    //const userNameSurname=prompt("İsim ve Soyisim giriniz...");

    const userNameSurname="hamiiiiiittttt mıııızzzzraaak"

    const userIndex=userNameSurname.indexOf(" ");
    let userName=userNameSurname.substring(0, userIndex).toUpperCase();

    for(let i=3; i<userName.length; i++){
        userName=userName.replace(userName.charAt(i), "*");
    }

    console.log(userName); 

let userSurname=userNameSurname.substring(userIndex+1,userNameSurname.length).toUpperCase();


for(let i=3; i<userSurname.length; i++) {
    userSurname=userSurname.replace(userSurname.charAt(i), "*");
}

console.log(userSurname);
console.log(userName.concat(" ").concat(userSurname));

}

masking();

*/

///////////////////////////////////////////////

// Monad : bir fonksiyonun çıktısı başka bir fonksiyonun girdisi ise buna MONAD deniliyor... 

/*

const birinci = ()=>{
    let user=Number(prompt("Lütfen sayı giriniz... "));
    return user;

}

const ikinci = ()=> {
let data=birinci();
console.log(Math.sqrt(data));
}

ikinci();

*/

// setTimeOut(), setInterval()

/*

//belirli zaman sonra tek bir kere çalışır ve durur
setTimeout (function () {
console.log("setTimeout çalıştı.");
}
, 2000);


//belirli zaman sonra çalışır ve sonsuza kadar kapanıp tekrar çalışır 
setInterval (function(){
    console.log("setInterval çalıştı ")
},1000) ;

*/

//callBackFunction : fonksiyonu geri çağırmak

//coklu işlemler için kullanılıyor. daha iyi versiyonu olarak "promise" var. o daha sık kullanılıyor

/*
const birinci=(data)=> {
    return Math.pow(data,2);
}

const ikinci=(callBackFunction)=> {
   let user=(Number(prompt("Lütfen sayı giriniz...")));
   let data=callBackFunction(user);
   console.log(data);
}
ikinci(birinci);

*/

//promise
/*
const promTutorials=()=>{
    //catch 1 tane olmak zorunda
    let data = new Promise((resolve,reject)=>{
        let status = 200;
        if(status===200)
        resolve("çalıştı");
        else
        reject("çalışmadı");
    }).
    then(
        ()=>{console.log("olumlu"); }
        ).
    catch(
        (err)=>{console.error(err); }
        );
}
promTutorials();
*/

// dizi : elimizdeki verileri düzenli şekilde saklamaya yarar
let arr=()=>{
    const numbers=[3,4,5,"str", 66];
    return numbers;
}
let arrResult=()=>{
    let data=arr();
    console.log(data);
    console.log(data[0]);
    console.log(data[4]);
    console.log(data[data.length-1]);
/*
    //iterative for loop
    for(let i=0;i<data.length;i++) {
        document.write(data[i]+" ")
    }

    document.write("<br/>");

    //for in  : index numaralarıyla veriyi getirecek
    for(let temp in data){
        document.write(temp+" => "+data[temp]+"<br/>");
    }

    document.write("<br/>");
    
    //for of : sadece elemanları getirecek.
    for(let temp of data){
        document.write(temp+" ");
    }

    document.write("<br/>");

    */

    //foreach
    //forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
    data.forEach((value, index,array)=>{
       // document.write(index+" => "+value+"<br/>");
        document.write(`${index} => ${value} <br>`);
    });

  //  document.write("<br/>");

    // filter  :

    //filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];

   let result1= data.filter((value, index,array)=>{
    return value%2==0

   }).forEach((value, index,array)=>{
     document.write(`${index} => ${value} <br>`);
 });

 //document.write("<br/>");


 // map  :

 //map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];

 data.map((value, index, array) => {
    return value += 10

 }).forEach((value, index, array) => {
     document.write(`${index} => ${value} <br>`);
 });

}

//arrResult();

//araştırma ödevi : FIFO(First In First Out) Nedir , LIFO (Last In First Out) Nedir ?

// ÖDEV
/*
 Örnek
1.YOL normal diziyle yapalım
rastgele 10 elemanlı bir dizi  oluşturalım.
bu sayılardan tek olanları bulalım.
bu tek sayıların sonuna 5 ekleyelim
buradaki sayıları ekranda gösterelim. ?
bu şarta uyan kaç tane sayı vardır ?

 2.YOL map,filter, forEach ile yapalım.
 rastgele 10 elemanlı bir dizi  oluşturalım.  ==> (random)
 bu sayılardan tek olanları bulalım.          ==> (filter)
 bu tek sayıların sonuna 5 ekleyelim          ==> (map)
 buradaki sayıları ekranda gösterelim. ?      ==> (forEach)
 bu şarta uyan kaç tane sayı vardır ?         ==> (counter)
 2.YOL map,filter,counter

*/

// PUSH : veriyi dizinin sonuna  ekler

let array=()=>{
    const numbers=[3,44,10,"str", 77];
    return numbers;
}
let arrayResult = () => {
    let data2=array();

    document.writeln("Eleman sayısı : " + data2.length);

    data2.push(99); 
    console.log(data2);


// UNSHIFT : veriyi dizinin başına ekler

    data2.unshift("hk"); 
    console.log(data2);

}

arrayResult();