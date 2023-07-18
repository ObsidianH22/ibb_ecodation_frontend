# CLEAN CODE 

Clean Code (Temiz Kod) kavramı Robert C. Martin Clean Code kitabıyla özdeşlemiş durumda çoğu kişi bu kitaba referans vererek bu konuyu anlatmaya çalışıyor. 

Kodun temiz olması, kodu yazan geliştirici dışında ekiptekilerin kodu kolay şekilde anlayabilmesi ve geliştirme yapabilmesidir. Burada kolay kelimesini vurgulamak istiyorum. Kolay için olması gerekenler

## readability, (Basitçe okunup anlaşılıyor ise)
## changeability, (Basitçe değiştirilebiliyor ise)
## extensibility (Basitçe genişletilebiliyor ise)
## maintainability. (Basitçe bakım yapılabiliyor ise)

## A.1 Genel Kurallar

Standart yaklaşımları uygula

Kodu basit tutmaya çalış, olabildiğince kompleks yapılardan uzak dur

Kodu bulduğunuzdan daha temiz halde bırakın.

Her zaman sorunun kaynağına odaklanın. Problemin ana kaynağını bulmaya çalışın

## A.2 Tasarım Kuralları

Konfigüre edilen veriyi kodun içerisinde derinlerinde değilde rahat erişilebilen değiştirilebilen kısımda bulundur.

if/else veya switch/case koşulları yazmak yerine polymorphism tercih et.
multi-threading kodları ayrıştır.

Her kod yapısını konfigürasyonlu ve dinamik hale getirmekten kaçının.
Dependency Injection (Bağımlılık Enjekte Etmeyi) kullanın.

Bir sınıf doğrudan sadece bağımlılıklarını bilmelidir yasasını takip et.

## A.3 Anlaşılabilirlik İpuçları

Tutarlı ol. Bir işi bir yöntemle yapıyorsan, her yerde aynı yöntemi kullan.

Açıklayıcı değişken isimleri kullan.

Kod içerisindeki değişkenlerin tuttuğu (primitif ve object) türemiş verilerin veya kod akışının sınıf koşullarını kapsayacak şekilde encapsulate edin. Sınır koşullarını takip etmek zor olduğundan bu tarz işlemleri tek bir yerden gerçekleştirin.

Object Türler yerine Primitif Türleri tercih edin. (Immutable)

Mantıksal bağımlılıklardan kaçının. Aynı sınıf içerisinde başka bir takım şeylere bağımlılığı olan metodlar yazmayın.

Negative koşullardan sakının.

## A.4 İsimlendirme Kuralları

Açıklayıcı ve kafa karışıklığına neden olmayacak isimlendirmeler kullanın

İsimlendirmeler ile anlamlı ayrımlar oluşturun (Soyutlama için önemli)

Telefazu kolay isimlendirmeler bulun

Aradığınızda kolay şekilde bulunabilecek ve erişebilecek isimlendirmeler seçin

Kodun içerisinde gizli rakamlar ve sabitlerden kaçının

Encoding ve değişkenlerin önüne bir takım başlangıç tag takmayın.

Not: Eskiden Code Editorleri zayıfken C gibi dillerde i, s …. Javada Interface I gibi ön takılar olurdu. Şimdi editörlerin görsel gösterimleri ve arama kabiliyetleri sayesinde bu tarz isimlendirmelere gerek yok

 ## A.5 Fonksiyon Kuralları

Küçük olmalı.

Bir tek iş yapmalı

İsmi açıklayıcı olmalı

Olabildiğince az argüman almalı

Side Effect içermemeli

Flag (true/false) argümanlarını parametre olarak koda geçirilip bu method içerisinde farklı metod çağrımları yapılmamalı.

## A.6 Yorum Satırı Kuralları

Olabildiğince kendinizi kod içerisinde anlatmaya çalışın,

Gereksiz yorum ekleme

Başlangıç bitiş kodu ayırma amaçlı yorum satırları eklemeyin.

Kodu yorum satırı haline getirip bekletmeyin. Gereksiz kodları silin.

Yorumu yazma nedeninizi açıklayın.

Kodun açıklaması olarak kullanın.

Sonuçların uyarısı olarak kullanın.

## A.7 Source Kod Yapısı

Kavramları dikey olarak ayır.

Birbiri ile ilişkili kodlar dikey yoğunlukta görüntülenmeli

Değişkenleri kullanım alanlarına yakın tanımla

Birbirine yakın fonksiyonları birbirine yakın tanımla

Benzer işleri yapan fonksiyonlar birbirine yakın olmalı

Fonksiyonları aşağı yönlü akacak şekilde yerleştirin.

Kod satırlarını kısa tutun.

Yatay hizalama yapmayın. (üstteki, alttaki satır ile hizalama)

Boşluk kullanarak ilişkili şeyleri birbirine yakın , ilişkisizleri uzaklaştır.

Kodun oluşturduğu girintileri bozmayın

## A.8 Objeler ve Veri Yapıları

Kodun iç yapısını gizleyin.

Veri yapılarını, dillerin hazır Collection yapılarını tercih edin

Hibrid yapılardan kaçının.

Olabildiğince küçük olun.

Bir sey yapın.

Küçük sayıdaki değişkenlerle çalışın.

Temel sınıf, kendisinden türeyenler hakkında hiçbir şey bilmemelidir.

Fonksiyona bir takım parametreler geçirerek bunların istenen davranışa göre şekillenmesindense, birçok sade fonksiyona sahip olmak daha iyidir.

Static metodları tercih etme.

## A.9 Tests

Her test için bir assert

Test okunabilir olmalı

Test hızlı çalışabilir olmalı

Test bağımsız olmalı

Test tekrar edebilir olmalı

## B. CODE SMELLS (Kodun Kötü Kokması)

Yukarıda temiz kodun tanımını ve özelliklerini verdik. Bazen bir takım nedenlerden dolayı. Örneğin;

zamanın azlığı,
takımın deneyim eksikliği,
yönetimsel hatalar,
yanlış 3rd party ürün ve kütüphane seçimleri,
müşteriyi iyi analiz edememe,
yanlış bir geliştirme modelini kullanma,
yanlış önceliklerde kod geliştirme,
design system kullanmamak,

kodunuzun

Rigidity (Sertlik): Yazılımı değiştirmeniz çok zor hale gelmiş, bir değişiklik bir çok yeri etkiliyor ise.

Fragility (Kırılganlık): Yazılımda ufak bir değişiklik uygulamanın bir çok yerini bozuyor ise.

Immobility (Hareketsizlik): Kodunuzun bir takım tekrar eden kısımlarını diğer projelerde kullanabiliyorsanız.

Needless Complexity: Gereksiz kompleks ise

Needless Repetition: Gereksiz tekrar var ise

Opacity (Saydamlık): Okunabilirliği zor ise.

Kod ile ilgili bir tarz sinyaller alıyorsanız, kodunuzda bir takım düzenlemeler ve düzeltmeler yapma zamanı gelmiştir.

İşte burada Refactoring teknikleri devreye giriyor. Kodu nasıl temiz hale getireceğiz, hangi yöntemleri nasıl kullanacağız.