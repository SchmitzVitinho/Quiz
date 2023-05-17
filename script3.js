let perguntaUm, perguntaDois, perguntaTres, perguntaQuatro, pontoUm, pontoDois, pontoTres, pontoQuatro, pontoTotal

alert('Seja bem vindo! Você irá agora responder um Quiz de quatro perguntas (cada uma com 4 respostas, e cada resposta vale de 1 até 4 pontos!) Está preparado?')
perguntaUm = prompt('1) Quais séries a seguir englobam melhor a temática de vampiros e assombração? \n A) Van Helsing \n B) Castlevania \n C) The Vampire Diaries \n D) Blade: The Series').toLowerCase()
perguntaDois = prompt('2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia? \n A) Alice no País das Maravilhas \n B) O Hobbit \n C) A Fantástica Fábrica de Chocolates \n D) Coraline').toLowerCase()
perguntaTres = prompt('3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo? \n A) The Legend of Zelda \n B) Kirby \n C) Metroid \n D) Super Mario Bros').toLowerCase()
perguntaQuatro = prompt('4) Quais dos autores citados, representam melhor o gênero de livros de terror? \n A) Stephen King \n B) Edgar Allan Poe \n C) H.P. Lovecraft \n D) Mary Shelley').toLowerCase()

switch (perguntaUm) {
    case 'a':
        pontoUm = 2
        break;

        case 'b':
        pontoUm = 3
        break;

        case 'c':
        pontoUm = 2
        break;

        case 'd':
        pontoUm = 1
        break;


    default:
        alert('Você somou 0 pontos na questão 1 pois não colocou nenhuma opção disponível')
        pontoUm = 0
        break;
}

switch (perguntaDois) {
    case 'a':
        pontoDois = 4
        break;

        case 'b':
        pontoDois = 2
        break;

        case 'c':
        pontoDois = 4
        break;

        case 'd':
        pontoDois = 3
        break;


    default:
        alert('Você somou 0 pontos na questão 2 pois não colocou nenhuma opção disponível')
        pontoDois = 0
        break;
}

switch (perguntaTres) {
    case 'a':
        pontoTres = 3
        break;

        case 'b':
        pontoTres = 2
        break;

        case 'c':
        pontoTres = 2
        break;

        case 'd':
        pontoTres = 4
        break;


    default:
        alert('Você somou 0 pontos na questão 3 pois não colocou nenhuma opção disponível')
        pontoTres = 0
        break;
}

switch (perguntaQuatro) {
    case 'a':
        pontoQuatro = 4
        break;

        case 'b':
        pontoQuatro = 2
        break;

        case 'c':
        pontoQuatro = 3
        break;

        case 'd':
        pontoQuatro = 4
        break;


    default:
        alert('Você somou 0 pontos na questão 4 pois não colocou nenhuma opção disponível')
        pontoQuatro = 0
        break;
}

pontoTotal = pontoUm + pontoDois + pontoTres + pontoQuatro

if (pontoTotal == 15) {
    alert('Você atingiu 15 pontos que é a pontuação máxima! Parabéns!')
}else{
    alert('Você fez ' + pontoTotal + ' pontos')
}
