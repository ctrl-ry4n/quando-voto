var idade = 16
console.log(`Sua idade é de ${idade}`)
if (idade <16) {
    console.log('Não Vota')
}
else {
    if (idade <18 || idade >60) {
        console.log('Voto Opcional')
    }
    else {
        console.log('O Voto é Obrigatório')
    }
}