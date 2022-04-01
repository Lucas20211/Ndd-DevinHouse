

const minhaPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Deu certo!'), 2000);
});

console.log(minhaPromise);
setTimeout(() => console.log(minhaPromise), 2000);
