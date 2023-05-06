const education = {
    content:[{
        nama: "SMAK Penabur Summarecon Bekasi",
        gambar:"https://storage.cloud.google.com/genfamen-submission-dicoding1/penabur.png",
        deskripsi: "2017-2020"
    },
    {
        nama: "sepuluh Nopember Institute of Technology",
        gambar:"https://storage.cloud.google.com/genfamen-submission-dicoding1/ITS.png",
        deskripsi: "2020-NOW"
    },
    {
        nama: "Bangkit Program 2023",
        gambar:"https://storage.cloud.google.com/genfamen-submission-dicoding1/bangkit.png",
        deskripsi: "2023-NOW"
    }
]
}

const educationContent = document.querySelector("#education-content");

var inisiasi = "";

education.content.forEach(element => {
    inisiasi += `
    <div class="education-item"> 
        <div class="logo-image">
            <img src="${element.gambar}">
        </div>
        <div class="description">
            <h3> ${element.nama} </h3>
            <p> ${element.deskripsi} </p>
        </div>  
    </div>
    `
    }
)

educationContent.innerHTML += inisiasi