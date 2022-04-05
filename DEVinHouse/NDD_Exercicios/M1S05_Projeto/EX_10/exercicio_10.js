let sleep = (valor)=>{
    return new  Promise((resolve , reject)=>{
      (valor >= 60)?setTimeout(() => resolve(console.log("Você  é idoso "+ valor )), 3000):setTimeout(() => reject(console.log("Você ainda esta na fase adulta" + valor )), 3000 );
      });
};
sleep(65).then(resolve => {
resolve ;
}).catch(reject => {
reject;
});