export function aleatorio(lista) {
    const posicao = Math.random()* lista.length;
    return lista[posicao];
}