let registrou_cedo = false
let idade_corredor = 23
let race_number = Math.floor(Math.random() * 1000)

function checaIdadeERegistro(registrou_cedo, idade_corredor, race_number){
    if (idade_corredor > 18 && registrou_cedo){
        race_number += 1000
    } 
    return race_number
}

function defineHorarioCorrida(registrou_cedo, idade_corredor) {
    let horario_corrida = ""
    if (idade_corredor > 18 && registrou_cedo){
        horario_corrida = "9H30"
    } else if (idade_corredor > 18 && !registrou_cedo) {
        horario_corrida = "11H00"
    } else if (idade_corredor < 18) {
        horario_corrida = "12h30"
    } else {
        horario_corrida = "undefined"
    }
    return horario_corrida
}

function logHorarios(race_number, horario_corrida, idade_corredor) {
    if (idade_corredor === 18){
        console.log(`Competidor: nº ${race_number}\nHorário: Favor consultar mesa de registro`)
    } else {
        console.log(`Competidor: nº ${race_number}\nHorário: $${horario_corrida}`)
    }
}

let new_race_number = checaIdadeERegistro(registrou_cedo, idade_corredor, race_number)
let horario_corrida = defineHorarioCorrida(registrou_cedo, idade_corredor)
logHorarios(new_race_number, horario_corrida, idade_corredor)