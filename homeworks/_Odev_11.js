// ÖDEV
// kullanıcıdan aldığımız isim alınsın
// kullanıcıdan aldığımız soyisim alınsın
// ilk karakter göstersin sonraki kelimeleri masking (maskeleme yapsın)
// eğer kullanıcı isim ve soyisimi ilk karakteri küçük girmişse büyük olsun mutlaka
// Hamit Mızrak
// H**** MIZ***
// ipucu: charAt, substring, indexOf, döngü, karar mekanizma


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

