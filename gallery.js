/*==================================================
        GALERÍA INSTALACIONES JJ GOLE
==================================================*/


const galleries = {


    oficinas: [

        "img/INSTALS/ENTR.png",
        "img/INSTALS/ins5.png",
        "img/INSTALS/ins4.png",
        "img/INSTALS/ins3.png",
        "img/INSTALS/ins2.png",
        "img/INSTALS/ins1.png",

    ],


    produccion: [

        "img/INSTALS/DJ1.jpg",
        "img/INSTALS/DJ2.jpg",
        "img/INSTALS/DJ4.png",
        "img/INSTALS/DJ5.jpg",
        "img/INSTALS/DJ6.jpeg",

    ]


};



let currentGallery = [];

let currentIndex = 0;



/*==================================================
            ABRIR GALERÍA
==================================================*/


function openGallery(name){


    console.log("Abriendo galería:", name);


    currentGallery = galleries[name];

    currentIndex = 0;


    document.getElementById("galleryModal").style.display="flex";


    showImage();


}



/*==================================================
            MOSTRAR IMAGEN
==================================================*/


function showImage(){


    document.getElementById("galleryImage").src =
    currentGallery[currentIndex];


    document.getElementById("galleryCounter").innerHTML =

    (currentIndex + 1) +

    " / " +

    currentGallery.length;


}





/*==================================================
            SIGUIENTE
==================================================*/


function nextImage(){


    currentIndex++;


    if(currentIndex >= currentGallery.length){

        currentIndex = 0;

    }


    showImage();


}





/*==================================================
            ANTERIOR
==================================================*/


function prevImage(){


    currentIndex--;


    if(currentIndex < 0){

        currentIndex = currentGallery.length - 1;

    }


    showImage();


}





/*==================================================
            CERRAR
==================================================*/


function closeGallery(){


    document.getElementById("galleryModal").style.display="none";


}