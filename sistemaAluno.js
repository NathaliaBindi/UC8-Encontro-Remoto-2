let nomeDeAluno = ["Marcel", "Franklin", "Rita", "Afrânio"]

for (let nome of nomeDeAluno) {
    console.log(`Essa pessoa se chama ${nome}`)
} 

let numeroDeAlunos = 10;

let contador = 0;

while(contador <= numeroDeAlunos) {
    //console.log(contador)

    if (contador == 0){
        console.log("O número atual é zero")
    } else if (contador %2 != 0){
        console.log("O número " + contador + " é Impar")
    } else {
        console.log(`O número ${contador} é Par`)
    }
    contador++;    
}