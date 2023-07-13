//kullanıcı tarafından girilen bir kelimenin (prompt)

let userData= prompt("Lütfen bir şeyler yazınız");
//S-1) Kaç karakterlidir ? (length)

console.log(userData.length);

//S-2) boşluklar alınarak Kaç karakterlidir ? (trim)

console.log(userData.trim().length);

// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())

console.log(userData.toLowerCase());

// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase())

console.log(userData.toUpperCase());

// S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, indexOf)

console.log(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript"));

// S-6) yazdığınız kelimede "javascript" ile mi başlıyor" ? (startsWith()) 

console.log(userData.startsWith("javascript"));

// S-7) yazdığınız kelimede "javascript" ile mi bitiyor" ? (endsWith())

console.log(userData.endsWith("javascript"));

// S-8) ilk harf nedir  ? (charAt())

console.log(userData.charAt(0));

// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())

console.log(userData.concat(" ben js öğreniyorum"));

// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())

console.log(userData.substring(0,4));