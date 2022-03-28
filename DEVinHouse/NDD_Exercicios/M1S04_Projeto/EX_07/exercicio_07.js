const temperaturaF = [0, 32, 45, 50, 75, 80, 99, 120];


const temperaturaC = temperaturaF.map(x => (x - 32 ) * 5 / 9);

console.log(temperaturaC);
