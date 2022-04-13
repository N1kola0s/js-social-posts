/* Descrizione:
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post. 

Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore,
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
-numero di likes.

Non è necessario creare date casuali
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)

Milestone 2

Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

Milestone 3

Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like. */


//Creiamo il nostro array di oggetti che rappresentano ciascun post. 

//Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
const posts = [
{
    id_post:1,
    user_name: 'Phil Mangione',
    user_image:'https://picsum.photos/60/60',
    date:'05/27/2021',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet voluptates molestias nisi corrupti excepturi saepe nemo repudiandae',
    post_image: 'https://picsum.photos/200/100',
    like:40

},
{
    id_post:2,
    user_name: 'Sofia Perlari',
    user_image: 'https://picsum.photos/60/60',
    date: '07/20/2022',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet voluptates molestias nisi corrupti excepturi saepe nemo repudiandae',
    post_image: 'https://picsum.photos/200/100',
    like: 30

},
{
    id_post:3,
    user_name: 'Terza Persona',
    user_image: 'https://picsum.photos/60/60',
    date: '11/15/2022',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet voluptates molestias nisi corrupti excepturi saepe nemo repudiandae',
    post_image: '',
    like: 90

}
];

/* console.log(posts); */

//Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

const socialElement = document.querySelector(".post")

//dichiaro un array vuoto dove andranno gli ID dei post ai quali abbiao messo i like 
const postLiked = [];



posts.forEach((post,i) =>{ 
    post = posts[i]; 

    /* console.log(typeof post);  */

   /*  console.log(post.id_post)
    console.log(post.user_name)
    console.log(post.user_image)
    console.log(post.date)
    console.log(post.text)
    console.log(post.post_image)
    console.log(post.like)
    console.log("_____________________")  */


    let card = document.createElement("div");


    //stampo il contenuto al suo interno
        card.innerHTML =  

        `
        <div class="card my-5">
            <div class="card_top d-flex align-items-center pt-4">

                <div class="icon_image d-inline-block">
                        <img class="rounded-circle"src="${post.user_image}" alt="profile-image" >
                </div>

                <div class="profile_info d-inline-block">
                        <h5 class="name">${post.user_name}</h5> 
                        <div class="date">${post.date}</div>
                </div>
            </div>
                
            <p class="text px-4 mb-0">${post.text}</p>

            <img class="p-4" src="${post.post_image}">

            <div class="post_like d-flex justify-content-around align-items-center pb-4">

                <div class="like" role="button"><i class="fa-solid fa-thumbs-up"></i> Mi piace
                </div>  

                <div id="${post.id_post}" class="like_counter">Piace a <strong>${post.like}</strong> persone
                </div>
            </div>

        </div>
      
        `; 

    //appendo quanto creato all'interno di socialElement nella dom
    socialElement.append(card);

    //Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.

    //dichiaro una variabile in cui richiamo i like 
    const btn = card.querySelector(".like");

    //all'evento click imposto una funzione per eseguire delle azioni
    btn.addEventListener("click", addLike);

    function addLike () {
        //aggiungo il toggle con classe active
        this.classList.toggle("active");

        const myLike = document.getElementById(post.id_post)

        //imposto la condizione che verifica se il mio ogetto contiene la classe active
        
        if(this.classList.contains("active")){

            //incremento il numero dei like sul post
            post.like = post.like + 1 

            //lo stampo nella DOM
            myLike.innerHTML= 
            `
            <div id="${post.id_post}" class="like_counter">
            Piace a <strong>${post.like}</strong>persone
            </div>
            `
            //Salviamo nell'arrey postLiked gli id dei post ai quali abbiamo messo il like.
            postLiked.push(post.id_post);
        

        } else {

            //decremento il numero dei like del post
            post.like = post.like -1

            //stampo nella DOM
            myLike.innerHTML= 
            `
            <div id="${post.id_post}" class="like_counter">
            Piace a <strong>${post.like}</strong> persone
            </div>

            `
            //rimuovo all'array postLiked gli id dei post ai quali abbiamo tolto il like.
            postLiked.pop(post.id_post);
        };

        //stampo gli elementi dell'array postLiked
        console.log(postLiked);

    };
    
   
});
