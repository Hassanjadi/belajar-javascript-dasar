// merubah text pada id judul
const judul = document.getElementById("judul");
judul.innerHTML = "John Doe";

// merubah section a menjadi hello world
const sectionA = document.querySelector("section#a");
sectionA.innerHTML = "Helllo World";

// menggunakan style
const judul = document.querySelector("#judul");
judul.style.color = "lightblue";
judul.style.backgroundColor = "salmon";

// menngelola class
const p2 = document.querySelector(".p2");
p2.classList.add("label");
p2.classList.remove("label");

// membahkan class dan jika dijalankan 1x menghapus class
document.body.classList.toggle("biru-muda");

// melihat item
p2.classList.item("2"); // menggunakan index
p2.classList.contains("dua"); // menggunakan nama class (boolean)

// mengganti class
p2.classList.replace("dua", "tiga"); // mengganti class 'dua' menjadi 'tiga'
