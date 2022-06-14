# DIA 03 BLOCO 03

_Na terceira parte da jornada através do HTML & CSS, aprendi na prática como alterar o layout da página utilizando o CSS, assim como utilizar regras de seleção bem definidas para escolher exatamente o tipo de elemento a estilizar._

_Este dia capacita a:_

* Compreender como funciona o Box Model do CSS e como os elementos da página se relacionam visualmente
* Posicionar elementos na página de diferentes formas
* Combinar e agrupar seletores de CSS para criar regras bem definidas

_Na parte de conteudo Box Model - Modelo de caixas no CSS, em style.css linkado a index.html, inseri diferentes margens, paddings bordas, alturas e larguras, em caixas/div, em classes expecificas para cada div, a partir de uma classe em comum contendo propriedades iniciais iguais._

_Na parte do conteudo Posicionamento de elementos, aprendi como funciona a propriedade CSS position, z-index, top, left, posicionando imagens de maneira ordenada na tela(mario.html e style_mario.css)_

_Na parte do conteudo Agrupamento de seletores e Pseudoclasses, vi como podemos economizar linhas de código simplesmente agrupando estilos,  agrupando os seletores que sofrerão as mesmas mudanças, e vi pseudoclasses, como :hover, :focus, :active, :nth-of-type e transition_

_Para fixar I, em agrupamento.html:_

1 - Adicione uma lista ordenada dos 3 melhores sites que você conhece.

2 - Crie um arquivo no mesmo diretório e nomeie-o de 'agru_style.css'.

3 - Nesse arquivo .css, adicione os estilos para que:
  * O texto das tags 'h1' e 'p' estejam centralizados.
  * A cor de fundo da sua lista mude quando o cursor estiver sobre o item.
  * A fonte do item mude quando ele for clicado.

4 - Adicione uma lista não ordenada com, pelo menos, 3 características que você gosta.

5 - No 'agru_style.css', adicione a propriedade 'list-style: none' para ambas as listas.

Dica: Nesse [link](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-classes), você irá encontrar a documentação sobre todas as pseudoclasses do CSS.

_Para fixar II :foguete:, você não deve atribuir nenhuma classe ou id aos componentes, mas apenas utilizar pseudoclasses para individualizar cada elemento(fix.html e fixa_style.css):_

1 - Estilize as divs para que, ao passar o cursor por cima das mesmas, elas ganhem uma borda.

2 - Faça cada div ter uma cor própria.

3 - Estilize cada uma das tags h3.

4 - Faça a terceira div ser maior que as demais.

5 - Deixe as tags ímpares h3 com o texto em itálico.

_Na parte do conteudo Combinações e Classes Descendentes, dei um passo mais a fundo na dinâmica do CSS, aprendendo sobre combinações de classes em elementos HTML e também a como utilizar a descendência para aplicar estilizações à elementos específicos._

_Para fixar :foguete:_
(combClasseFilhos.html e comb_style.css)

1 - Faça com que todos os itens de Listas Ordenadas tenham uma cor de fundo amarela. Se a numeração do item for PAR, faça a cor de fonte ser verde. Se o número for considerado ÍMPAR, utilize a propriedade text-transform para deixar o texto maiúsculo. (Dica: combinar classes pode ser útil aqui).
2 - Faça todas as tags Header (h1, h2...) possuírem cor de fonte vermelha e, se alguma delas estiver em itálico, aumente seu tamanho para 40px e acrescente uma borda de 1px preta e sólida.
3 - Faça todas as li's terem 20px de tamanho de fonte e, para todo texto em itálico dentro de alguma li, utilize a propriedade font-weight para deixá-lo negrito.
4 - Na listagem de linguagens de programação, faça com que as 3 primeiras da lista possuam cor de fonte azul e, se alguma possuir "java*" no texto, utilize uma cor de fundo rosa.
5 - (Bônus) Para cada link na lista de aliados da pessoa desenvolvedora, faça com que ao passar o mouse sobre cada um, o texto fique em negrito e assuma a cor de fonte "temática do site"

Dica: :nth-child(even) e nth-child(odd)

O objetivo dos exercí­cios desse dia finalizar a primeira versão do seu Portfólio Web adicionando seletores e CSS de layout e atualizar meu Portfólio Web no no GitHub Pages[ConanGoodwin.github.io], aplicando layout mais consistente usando elementos de bloco e inline e salvando todas as estilizações dentro de um arquivo externo style.css.

Os requisitos do exercício são:

1. Entre no diretório que você criou no dia anterior.

2. Procure a tag <style></style>, onde você fez as alterações ontem. Mova todo o conteúdo da tag style e coloque em um arquivo style.css.

3. Adicione as novas alterações dentro do arquivo style.css.
Não se esqueça de importar esse arquivo na sua página;

4. Depois de importar o arquivo style.css, você já pode remover a tag style do seu documento.

5. O Portfólio Web deve ser estilizado usando as informações a seguir::
  * Coloque seu nome, sua foto e a descrição que você escreveu sobre você dentro de blocos.
  * A descrição deve ficar ao lado da foto.
  * Centralize seu nome na página.
  * Use padding e coloque uma cor de fundo na sua foto que seja diferente da cor de fundo do resto da página.
  * Adicione margin e padding nos elementos que julgar necessário.
  * Coloque estilo somente nos itens ímpares da lista das suas habilidades.