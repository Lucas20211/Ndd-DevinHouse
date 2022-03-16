const btn = document.querySelector("#send");

btn.addEventListener("click", function(e) {

    e.preventDefault();

    const name = document.querySelector("#name");
    const idade = document.querySelector("#idade");

    const value = name.value +  idade.value;
   


    console.log(value);

});