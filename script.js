// Aula 5 Exercicio 2
// comparar datos obtenidos con Prompt

let name1 = prompt ("Digite o nome da primeira pessoa")
let age1 = Number(prompt ("Digite a idade da primeira pessoa"))
let name2 = prompt ("Digite o nome da primeira pessoa") 
let age2 = Number(prompt ("Digite a idade da segunda pessoa"))

console.log ("Registros de " + name1 + " e " + name2)

console.log ("Idade de " + name1 + ": " + age1)

console.log ("Idade de " + name2 + ": " + age2)


if (age1 >  age2) {
  console.log (name1 + " é mais velho/a que " + name2)
}

else if(age1 <  age2) {
  console.log (name1 + " é mais novo/a que " + name2)
}

else if(age1 == age2) {
  console.log (name1 + " tem a mesma idade que " + name2)
}

else {
  console.log ("Eles morreram :´( ")
}
// else existe, caso respodam diferente a um número