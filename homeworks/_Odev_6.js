//Örnek-4: Aşağıdaki örnekleri math ile çözelim ?
//-5.9 sayısına aşağıdaki işlemleri yaptıralım:

// 1-mutlak değeri alsın 5.9
// 2-yuvarlama yapsın  6.0
// 3-karesini alsın 36.00
// 4-karekök alsın 6.0
// 5-yuvarlama yapsın 6.0
// 6-çıkan sonucu 5 bölsün 6/5=1

console.log(Math.round(Math.round(Math.sqrt(Math.pow(Math.ceil(5.9),2)))/5));

//7- iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
// 8- küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin 

if (Math.min(1,5)%2!=0) {
    console.log(Math.min(1,5)+3)
}
else {
    console.log(Math.min(1,5)+5)
}

// Örnek-5 : kullanıcı tarafından girilen bir sayıyı negatif mi pozitif mi olduğu ekran yazdıran algoritma ?
//NOT: cast kullalım ?

let number=Number(prompt("negatif ya da pozitif bir sayı giriniz..."));

if (number>0){
    console.log("pozitif sayı girdiniz...")
}
else 
console.log("negatif bir sayı girdiniz...")


// Örnek-6 : kullanıcı tarafından password ve repassword alalım sonrasında bu iki değeri karşılaştırma yapalım. eğer aynı girilirse aynı veri yoksa birbirine uymadı yazan algoritma yapalım


let password=prompt("Lütfen bir şifre belirleyiniz...");
let repassword=prompt("Lütfen şifrenizi tekrar giriniz...");

if (password==repassword){
    console.log("aynı veri");
}
else console.log("birbirine uymadı");