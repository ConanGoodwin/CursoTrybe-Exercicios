let custo = 130, venda =200;
let imposto =(custo*20)/100;
let valorCustoTotal = custo + imposto;
let lucro = venda - valorCustoTotal;

if (custo < 0 || venda < 0) {
    console.log("Erro: Valor de custo e/ou venda inferiores a 0.");
}else {
    console.log("Custo:",custo);
    console.log("Imposto:",imposto);
    console.log("Custo total:",valorCustoTotal);
    console.log("Preço de venda por unidade:",venda);
    console.log("Lucro por venda:",lucro);
    console.log("Lucro po 1.000 unidades vendidas:",lucro * 1000);
}
