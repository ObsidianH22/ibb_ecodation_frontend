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

//İlk önce değeri atadığımız için js onu bir bellekte tutuyor, “hmm varmı acaba benim aşağılarda bir yerlerde atanmış değişkenim “ diye düşünüp, sabırlı davranıp, aşağı doğru inmeye başlarken “işte buradaaa!” diye bağırıp değişkenini buluyor ve heyecanla hemen kendi değişkenini sahiplenerek onu baş tacı yapıyor.

//yani yapıyı şuna çeviriyor. 

/*
var job;
job="engineer";
console.log(job);
*/


//Burada bilmemiz gereken en önemli şey, sadece değişkenler yukarı taşınır, değerler yukarı taşınmaz !

//LET ve CONST hoisting işlemine duyarlı değildir !
