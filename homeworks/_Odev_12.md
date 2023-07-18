# Yazılım Tasarım İlkeleri (Software Design Principles) Nedir?

Yazılım Tasarım İlkeleri (Software Design Principles), geliştiricilerin iyi bir sistem tasarımı yapmasına yardımcı olan bir dizi yönergedir.

Yazılım Tasarım İlkeleri (Software Design Principles), geliştiricilerin iyi bir sistem tasarımı yapmasına yardımcı olan bir dizi yönergedir. Bu ilkeler, yazılım sektöründeki bazı tanınmış yazılım mühendisleri ve yazarlar tarafından tanıtılan yaklaşımların, stillerin, felsefelerin ve en iyi uygulamaların bir listesidir.

 İyi bir sistem iyi bir kod tabanına sahip olmalıdır. Okunması kolay, anlaşılması kolay, bakımı kolay (özellik ekleme/değiştirme ve hataları düzeltme) ve sistemin gelecekte genişletmesi kolay olması gerekir. Bu, geliştirme süresini, kaynakları azaltacak ve bizi daha çok mutlu edecektir.

 ## KISS – Keep it simple, stupid!!

 Her küçük yazılım parçasını basit tutmaya çalışın ve gereksiz karmaşıklıktan kaçının.

 Gereksiz karmaşıklıktan kaçınmak, sisteminizi daha sağlam, anlaşılması daha kolay, akıl yürütmeyi ve genişletmeyi daha kolay hale getirecektir.

 Projenize yeni bir bağımlılık eklediğinizde veya süslü yeni bir frameworkü kullanmaya başladığınızda veya yeni bir mikro hizmet oluşturduğunuzda, sisteminize ek karmaşıklık getirdiğinizi unutmayın. Bu karmaşıklığın buna değip değmeyeceğini düşünmeniz gerekir.

## YAGNI (You Ain’t Gonna Need It)
 İhtiyacımız olmayan şeylerin sisteme dahil olmaması gerektiğidir. 

Geliştirme aşamasında, bazen öngörülü(?) davranıp ileride lazım olabileceğini düşündüğümüz sınıfları,metodları yazarız. Bu, hem ileride lazım olabilir(?) öngörüsü, hem de yaptığımız geliştirmeyi daha büyük görmek istememizden kaynaklanıyor aslında.

E-mail atabilmemizi sağlayan bir sınıf ihtiyacımız olduğu zaman “Öyle bir sınıf yazdım ki, hem SMS atıyor, hem e-mail, hem de Push Notification gönderiyor” diye havalara girdiğimizde, zamanı geldiğinde gerçekler tokatı yapıştırır. YAGNI, bu tokatın gelmemesini sağlayan en önemli prensip.

## SOLID 

SOLID yazılım prensipleri; geliştirilen yazılımın esnek, yeniden kullanılabilir, sürdürülebilir ve anlaşılır olmasını sağlayan, kod tekrarını önleyen ve Robert C. Martin tarafından öne sürülen prensipler bütünüdür.

### S — Single-responsibility principle

Bir sınıf (nesne) yalnızca bir amaç uğruna değiştirilebilir, o da o sınıfa yüklenen sorumluluktur, yani bir sınıfın(fonksiyona da indirgenebilir) yapması gereken yalnızca bir işi olması gerekir.

### O — Open-closed principle

Bir sınıf ya da fonksiyon halihazırda var olan özellikleri korumalı ve değişikliğe izin vermemelidir. Yani davranışını değiştirmiyor olmalı ve yeni özellikler kazanabiliyor olmalıdır.

### L — Liskov substitution principle

Kodlarımızda herhangi bir değişiklik yapmaya gerek duymadan alt sınıfları, türedikleri(üst) sınıfların yerine kullanabilmeliyiz.

### I — Interface segregation principle

Sorumlulukların hepsini tek bir arayüze toplamak yerine daha özelleştirilmiş birden fazla arayüz oluşturmalıyız.

### D — Dependency Inversion Principle

Sınıflar arası bağımlılıklar olabildiğince az olmalıdır özellikle üst seviye sınıflar alt seviye sınıflara bağımlı olmamalıdır.

