/*Cette fonction commence par récupérer l'élément du DOM avec l'ID 'quotes-container' 
et le stock dans une variable appelée quotesContainer. Ensuite, elle effectue une 
boucle for..in sur un objet appelé quotes.*/

const quotesContainer = document.getElementById('quotes-container');

for (let author in quotes) { /*À chaque itération de la boucle, elle récupère le texte de la citation pour un auteur 
donné à partir de l'objet quotes et le stocke dans une variable appelée quoteText.*/
const quoteText = quotes[author];

//Ensuite, elle crée un élément de type div avec la méthode document.createElement() 
 const quoteDiv = document.createElement('div');
//et lui assigne la classe 'quote' à l'aide de la méthode classList.add(). 
quoteDiv.classList.add('quote');
//Cet élément div représentera une citation.

/*Ensuite, elle crée un élément de paragraphe avec la méthode document.createElement() */
const quoteParagraph = document.createElement('p');
//et lui assigne le texte de la citation entre guillemets à l'aide de la propriété textContent.
//Cet élément de paragraphe représentera le texte de la citation
quoteParagraph.textContent = '"' + quoteText + '"';
//Elle insère ensuite cet élément de paragraphe dans l'élément div créé précédemment en utilisant appendChild().*/
quoteDiv.appendChild(quoteParagraph);

//Ensuite, elle crée un autre élément de paragraphe pour stocker le nom de l'auteur de la citation. 
const authorParagraph = document.createElement('p');
//Elle assigne le nom de l'auteur à la propriété textContent de cet élément
authorParagraph.textContent = author;
//et lui assigne la classe 'author' à l'aide de la méthode classList.add(). Cet élément de paragraphe 
//représentera le nom de l'auteur.
authorParagraph.classList.add('author');
//Elle l'insère ensuite dans l'élément div créé précédemment en utilisant appendChild().*/
quoteDiv.appendChild(authorParagraph);


/*Cette fonction crée un nouvel élément <span> dans le document et lui assigne la classe CSS heartParagraph. */
const heartParagraph = document.createElement ('span');
//Ensuite, l'élément <span> est rempli avec une icône de cœur représentée par une balise <i>
heartParagraph.innerHTML= '<i class="fa-regular fa-heart"></i>';
//Définition de la taille de l'élément <span>;
heartParagraph.style.fontsize = "20px";
/*la classe CSS heart est ajoutée à l'élément <span> en utilisant la méthode classList.add()*/
heartParagraph.classList.add('heart')
//et l'élément <span> est ajouté en tant que fils de l'élément quoteDiv.
quoteDiv.appendChild(heartParagraph);

heartParagraph.addEventListener('click', ()=> {
    // Vérifier si le coeur est déjà rempli (s'il a la classe 'filled')
    if (heartParagraph.classList.contains('filled')) {
      // Si oui, le vider en retirant la classe 'filled'
      heartParagraph.classList.remove('filled');
      //Supprimer le favori du localStorage
      localStorage.removeItem('favorite');
    } else {
      // Sinon, le remplir en ajoutant la classe 'filled'
      heartParagraph.classList.add('filled');
      // Ajouter le favori au localStorage
      localStorage.setItem('favorite', 'true'); 
    }
  });
  
/*Enfin, elle insère l'élément div contenant la citation et son auteur dans l'élément représentant le
conteneur des citations (quotesContainer) en utilisant appendChild().*/
quotesContainer.appendChild(quoteDiv);
}

/*En résumé, cette fonction crée et affiche les citations et les noms d'auteurs stockés dans
l'objet quotes dans l'élément avec l'ID 'quotes-container' du DOM.*/

