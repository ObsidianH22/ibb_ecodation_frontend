# JSON Nedir? 

JSON (JavaScript Object Notation), verileri kolayca depolamak, taşımak ve değiş tokuş etmek için kullanılan bir veri formatıdır. JSON, insanlar tarafından okunması ve yazılması kolay olan metin tabanlı bir formattır ve genellikle programlama dilleri arasında veri alışverişi için kullanılır.

JSON, anahtar-değer çiftlerini kullanarak verileri temsil eder. Her anahtar bir dize (string) olarak belirtilir ve değerleri sayılar, diziler, nesneler (nesneler de anahtar-değer çiftleri içerebilir) veya boolean (doğru/yanlış) değerleri gibi çeşitli veri tipleri olabilir.

Örnek bir JSON verisi:


{
  "ad": "Ahmet",
  "soyad": "Yılmaz",
  "yaş": 30,
  "hobiler": ["yüzme", "koşu", "kitap okuma"],
  "evli": false
}


JSON, web servislerinde veri alışverişi yaparken, yapılandırma dosyalarını saklarken veya veritabanlarında verileri depolarken sıkça kullanılır. JSON aynı zamanda modern web uygulamalarında verileri iletmek ve işlemek için de yaygın olarak kullanılan bir formattır.

### Ayrıntılı düzeyde JSON, veri türlerinden oluşur.

Dize

Sayı

Mantıksal Değer

Boş

Nesne

Dizi

/////////////

## Dize / String
JSON'daki dizeler, ters eğik çizgi (\) kaçış karakteriyle Unicode karakterlerinden oluşur.

Örnek
{ "name" : "Jones" }


## Sayı / Number

JSON sayısı, JavaScript'in çift kesinlikli kayan nokta formatını izler.

Örnek
{
  "number_1" : 210,
  "number_2" : 215,
  "number_3" : 21.05,
  "number_4" : 10.05
}

## Mantıksal Değer

Mantıksal değerler true veya false olarak belirtilir. Mantıksal değerler tırnak içine alınmaz ve dize değerleri olarak kabul edilir.

Örnek
{ "AllowPartialShipment" : false }

## Boş

Boş, boş bir değerdir. Bir anahtara atanacak değer olmadığında bu değer boş olarak kabul edilebilir.

Örnek
{ "Special Instructions" : null }

## Nesne / Object 

JSON nesne veri türü, {} (küme parantezi) arasına eklenen bir ad veya değer çiftleri kümesidir. Anahtarlar dize ve virgülle ayrılmış benzersiz değerler olmalıdır.

Örnek
{
  "Influencer" :   { "name" : "Jaxon" ,  "age" : "42" ,  "city" ,  "New York" }
}

## Dizi / Array 
Dizi veri türü, sıralı bir değerler koleksiyonudur. JSON'da dizi değerleri dize, sayı, nesne, dizi, mantıksal değer veya boş türünde olmalıdır.

Örnek
{

"Influencers" :   [ 
{
 "name" : "Jaxon", 
 "age" : 42, 
 "Works At" : "Tech News"
}

{
 "name" : "Miller", 
 "age" : 35
 "Works At" : "IT Day"
}

] 
}
