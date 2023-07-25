// ÖDEV
/*
 Örnek
1.YOL normal diziyle yapalım
rastgele 10 elemanlı bir dizi  oluşturalım.
bu sayılardan tek olanları bulalım.
bu tek sayıların sonuna 5 ekleyelim
buradaki sayıları ekranda gösterelim. ?
bu şarta uyan kaç tane sayı vardır ?

*/ 

let array=[20,"Merhaba", 585, 3, 0.5, true, 88, 99, 0, 12]
let odd =[];
let oddFun = () => {
    for (let i=0; i<array.length; i++){
        if (array[i]%2==0) {
           odd+=array[i] ;

        }
    }
}

oddFun()