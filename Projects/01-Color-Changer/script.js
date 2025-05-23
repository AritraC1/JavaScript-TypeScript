// Select Color and canvas
const buttons = document.querySelectorAll('.btn');
const canvas = document.querySelector('.canvas');

buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', (e) => {

        const validColor = ['grey', 'white', 'blue', 'yellow'];
        const color = e.target.id;

        if(validColor.includes(color)){
            canvas.style.backgroundColor = color
        }


        // if (e.target.id === 'grey') {
        //     canvas.style.backgroundColor = e.target.id;
        // }
        // else if (e.target.id === 'white') {
        //     canvas.style.backgroundColor = e.target.id;
        // }
        // else if (e.target.id === 'blue') {
        //     canvas.style.backgroundColor = e.target.id;
        // }
        // else if (e.target.id === 'yellow') {
        //     canvas.style.backgroundColor = e.target.id;
        // } 
    });
})


// Apply color to canvas