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
    user_image:'https://picsum.photos/200/300',
    date:'05-27-2021',
    text:'Questo è un testo di prova del primo post',
    post_image: 'https://picsum.photos/200/300',
    like:40

},
{
    id_post:2,
    user_name: 'Sofia Perlari',
    user_image: 'https://picsum.photos/200/300',
    date: '07-20-2022',
    text:'Questo è un testo di prova del secondo post',
    post_image: 'https://picsum.photos/200/300',
    like: 30

}
];

/* console.log(posts); */

//Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

const socialElement = document.querySelector(".post")


posts.forEach((post, i) =>{
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
       /*  card.innerHTML =  
        `
        <div class="card">
            <div class="name">${post.user_name}</div> 
            <div class="date">${post.date}</div>
            <img src="${post.user_image}" alt="profile-image" >
            <div class="text">${post.text}</div>
            <img src="${post.post_image}" alt="post-image">
            <div>Mi piace</div>
            <div class="like">${post.like}</div>
        </div>  
      
        `;  */

    //appendo quanto creato all'interno di socialElement nella dom
    socialElement.append(card);
   
})
