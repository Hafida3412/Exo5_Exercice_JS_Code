/*Cette fonction commence par récupérer l'élément du DOM avec l'ID 'quotes-container' 
et le stock dans une variable appelée quotesContainer. Ensuite, elle effectue une 
boucle for..in sur un objet appelé quotes.*/

const quotesContainer = document.getElementById('quotes-container');

for (const author in quotes) { /*À chaque itération de la boucle, elle récupère le texte de la citation pour un auteur 
donné à partir de l'objet quotes et le stocke dans une variable appelée quoteText.*/
const quoteText = quotes[author];

/*Ensuite, elle crée un élément de type div avec la méthode document.createElement() 
et lui assigne la classe 'quote' à l'aide de la méthode classList.add(). 
Cet élément div représentera une citation.*/
const quoteDiv = document.createElement('div');
quoteDiv.classList.add('quote');

/*Ensuite, elle crée un élément de paragraphe avec la méthode document.createElement() 
et lui assigne le texte de la citation entre guillemets à l'aide de la propriété textContent. 
Cet élément de paragraphe représentera le texte de la citation. Elle insère ensuite 
cet élément de paragraphe dans l'élément div créé précédemment en utilisant appendChild().*/
const quoteParagraph = document.createElement('p');
quoteParagraph.textContent = '"' + quoteText + '"';
quoteDiv.appendChild(quoteParagraph);

/*Ensuite, elle crée un autre élément de paragraphe pour stocker le nom de l'auteur de la citation. 
Elle assigne le nom de l'auteur à la propriété textContent de cet élément et lui assigne 
la classe 'author' à l'aide de la méthode classList.add(). Cet élément de paragraphe représentera 
le nom de l'auteur. Elle l'insère ensuite dans l'élément div créé précédemment en utilisant appendChild().*/
const authorParagraph = document.createElement('p');
authorParagraph.textContent = author;
authorParagraph.classList.add('author');
quoteDiv.appendChild(authorParagraph);


const heartParagraph = document.createElement ('span');
heartParagraph.innerHTML= '<i class="fa-regular fa-heart"></i>';
heartParagraph.style.color = "blue";
heartParagraph.style.fontsize = "20px";
heartParagraph.classList.add('heart')
quoteDiv.appendChild(heartParagraph);

heartParagraph.addEventListener('click', function() {
    // Vérifier si le coeur est déjà rempli (s'il a la classe 'filled')
    if (heartParagraph.classList.contains('filled')) {
      // Si oui, le vider en retirant la classe 'filled'
      heartParagraph.classList.remove('filled');
    } else {
      // Sinon, le remplir en ajoutant la classe 'filled'
      heartParagraph.classList.add('filled');
    }
  });


/*Enfin, elle insère l'élément div contenant la citation et son auteur dans l'élément représentant le
conteneur des citations (quotesContainer) en utilisant appendChild().*/
quotesContainer.appendChild(quoteDiv);
}

/*En résumé, cette fonction crée et affiche les citations et les noms d'auteurs stockés dans
l'objet quotes dans l'élément avec l'ID 'quotes-container' du DOM.*/

