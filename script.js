"use static";

// const greeting = document.getElementById("greeting"),
//   java = document.getElementsByTagName("p"), // collection yani massiv ichida oladi yani malumotlar jamlanmasini oladi
//   wrap = document.getElementsByClassName("wrap"); // collection yani massiv ichida oladi yani malumotlar jamlanmasini oladi
// // yani bunga tugridam tugri style berib bulmaydi

// // greeting.style.color = "red";
// // greeting.style.backgroundColor = "#555";
// // greeting.style.padding = "20px";
// // greeting.style.margin = "30px";
// // greeting.style.cssText = "margin: 50px;";

// greeting.classList.add("cssH1"); // css ni  qushadi
// greeting.classList.remove("cssH1"); // cssni uchitsdi
// console.log(greeting);

const greeting = document.querySelector("#greeting"),
  // bu orqali faqatgina bitta kodni olishimiz m-n

  btns = document.querySelectorAll("button");
// // bu orqali esa bir nechta kodni olishimiz m-m
// // faqat kodlar massiv ichida buladi
// btn[0].style.backgroundColor = "red";
// // bu orqali bittadan massiv ichiga style berishimiz m-n
btns.forEach((btn) => {
  btn.style.background = "blue";
  btn.style.color = "white";
});
// forEach orqali masivga style bera olamiza

for (i = 0; i < btns.length; i++) {
  btns[i].style.padding = "15px";
}
// bu ham massiv ichiga style berish usuli

console.log(btns);
