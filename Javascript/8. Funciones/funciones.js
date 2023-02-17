function func(){
   return true;
}

async function after5Seconds(){
   return setTimeout(() => {
      console.log("Hola, soy una promesa");
   }, 5000);
}

function* pares(){
   let num = 0;
   while (true){
      yield num += 2;
   }
}