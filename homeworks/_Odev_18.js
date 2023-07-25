/*

 Örnek
1.YOL normal diziyle yapalım
rastgele 10 elemanlı bir dizi  oluşturalım.
bu sayılardan tek olanları bulalım.
bu tek sayıların sonuna 5 ekleyelim
buradaki sayıları ekranda gösterelim. ?
bu şarta uyan kaç tane sayı vardır ?

*/ 

function sadeceSayilariFiltrele() {
    const arrayRandom=[20,"Merhaba", 585, 3, 0.5, true, 88, 99, 0, 12];
    const sayilar = [];
    const tekSayilar = [];
    const tekSayilar5 = [];
    for (let i = 0; i < arrayRandom.length; i++) {
      if (typeof arrayRandom[i] === "number") {
        sayilar.push(arrayRandom[i]);
      }
    }
    for (let i=0; i<sayilar.length; i++){
        if(sayilar[i]%2!=0){
            tekSayilar.push(sayilar[i]);
        }
    }
    for (let i=0; i<tekSayilar.length; i++) {
        tekSayilar5.push((tekSayilar[i])+5);
    }
    return tekSayilar5;
  }

console.log("Dizideki tek sayıların +5 eklenmiş sonucu : " + sadeceSayilariFiltrele());
console.log(sadeceSayilariFiltrele().length);

// 2. YOL

/*
2.YOL map,filter, forEach ile yapalım.
 rastgele 10 elemanlı bir dizi  oluşturalım.  ==> (random)
 bu sayılardan tek olanları bulalım.          ==> (filter)
 bu tek sayıların sonuna 5 ekleyelim          ==> (map)
 buradaki sayıları ekranda gösterelim. ?      ==> (forEach)
 bu şarta uyan kaç tane sayı vardır ?         ==> (counter)
 2.YOL map,filter,counter

*/

let numFunc =() => {
    const numbers= [];
    for (let i=0; i<10; i++){
        numbers.push(Math.floor(Math.random()*100));
    }

    const odd = numbers.filter(odds => odds % 2!=0);
    const odd5 = odd.map(x => x + 5);
    const foreach= odd5.forEach(element => console.log(element));

    return foreach;

}

console.log("map ile 5 eklediğimiz tek sayılar : " + numFunc());
console.log("bu şarta uyan sayıların sayısı : " + numFunc().length);

