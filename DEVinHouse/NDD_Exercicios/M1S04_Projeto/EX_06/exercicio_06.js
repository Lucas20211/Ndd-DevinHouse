// while

var impar = 0;
var par = 0;

while(impar < 10){
    if(impar%2 != 0){
        console.log(`${impar} é impar!`);
    }else if(impar%2 === 0) {
        par = impar;
        console.log(`${par} é par`);
    }
    impar++
}
