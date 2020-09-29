//obtiene la diferencia de años
export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year
}

//calcula el incremento segun la marca del coche
export function calcularMarca(marca) {
    let incremento
    switch (marca) {
        case 'europeo':
            incremento = 1.30
            break
        case 'asiatico':
            incremento = 1.05
            break
        case 'americano':
            incremento = 1.15
            break
        default:
            break
    }
    return incremento

}