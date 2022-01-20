/**
 * CUSTO DE UM PRODUTO E VALOR DE VENDA
 */

let custo_do_produto = 100;
let valor_de_venda = 400;

if (custo_do_produto < 0 || valor_de_venda < 0) {
    console.log("ERROR: Verifique a entrada dos valores")
} else{
    let imposto =1.2;
    let produtosVendidos = 1000;
    let custoTotal = custo_do_produto * imposto;
    let lucro = valor_de_venda - custoTotal;
    let lucroMilProdutos = lucro * produtosVendidos;
    console.log(lucroMilProdutos);
}