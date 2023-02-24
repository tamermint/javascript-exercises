const container = document.querySelector('#container');

//adding <p> with a red text that says "Hey I'm red!"

const pRedText = document.createElement('p');
pRedText.textContent = "Hey I'm red!";
pRedText.style.color = 'red';

container.appendChild(pRedText);

//adding a <h3> with a blue text that says "I'm a blue h3"

const h3Text = document.createElement('h3')
h3Text.textContent = "I'm a blue h3!";
h3Text.style.color = 'blue';

container.appendChild(h3Text);

//making a div element with black border and pink background with h1 and p

const divArea = document.createElement('div');
divArea.style.backgroundColor = 'pink';
divArea.style.border = '5px solid black';
container.appendChild(divArea);

const h1DivText = document.createElement('h1');
h1DivText.textContent = "I'm in a div";
divArea.appendChild(h1DivText);

const pDivText = document.createElement('p');
pDivText.textContent = "ME TOO!";
divArea.appendChild(pDivText);

//appending the div to the body 
