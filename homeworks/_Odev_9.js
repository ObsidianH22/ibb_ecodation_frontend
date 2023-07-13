// Kullanıcı tarafından girilen bir sayının negatif mi, pozitif mi ? bunu yazan JS code yazınız.
// (Dikkat: normal  function ile yazınız)


function control() {
    let userData=prompt("Pozitif veya negatif bir sayı giriniz...")

    if (userData>0) 
    console.log("sayı pozitif");
    else
    console.log("sayı negatif");
}
control();


// Kullanıcı tarafından girilen bir sayının tek mi, çift mi olduğunu yazan JS code yazınız.
// (Dikkat:anonymous function ve ternary ile yazınız)

let anonymous = function (){
    let userData=prompt("tek ya da çift bir sayı giriniz...");

    console.log((userData%2==0) ? "sayı çift" : "sayı tek" );
    
}

anonymous()

// Kullanıcıdan alınan sayıya göre Haftanın günlerini switch-case ile JS code yazınız?
// Örneğin: kullanıcı 1 girdi: 1=pazartesi yazacak

let userData= prompt("1-7 arası bir rakam giriniz...")
switch (userData) {
    case "1":
        console.log("Pazartesi");
        break;
    case "2":
        console.log("Salı");
        break;
    case "3":
        console.log("Çarşamba");
        break;
    case "4": 
        console.log("Perşembe");
        break;
    case "5":
        console.log("Cuma");
        break;
    case "6":
        console.log("Cumartesi");
        break;
    case "7":
        console.log("Pazar");
        break;
}