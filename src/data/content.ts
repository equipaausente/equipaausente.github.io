const BASE = '/images';

export const sections = {
  camara: {
    id: 'camara',
    index: 1,
    label: 'Ponto de Partida',
    title: 'A Nossa Câmara',
    text: [
      'A câmara que adquirimos — barata e, infelizmente, pronta para a desmontagem. Um dia uma câmara fotográfica, no outro um projeto universitário. Assim é a vida.',
      'Um facto curioso: tem inscrito "Made in GDR", o que significa que foi fabricada na República Democrática Alemã (Alemanha de Leste). Uma peça de história nas nossas mãos.',
      'Aqui ficam também o primeiro esboço das dimensões, feito enquanto esperávamos que a câmara chegasse, e o primeiro modelo 3D baseado nessas medições iniciais.',
    ],
    images: [
      { src: `${BASE}/anossacamara.png`, alt: 'A nossa câmara', caption: 'A câmara original — fabricada na RDA' },
      { src: `${BASE}/image17-4.png`, alt: 'Esboço das dimensões', caption: 'Primeiro esboço das dimensões antes da câmara chegar' },
      { src: `${BASE}/primeiro.png`, alt: 'Primeiro modelo 3D', caption: 'Primeiro modelo 3D com base nas medidas estimadas' },
    ],
  },

  ideias: {
    id: 'ideias',
    index: 2,
    label: 'Conceito',
    title: 'Ideias Iniciais',
    text: [
      'Para este projeto tivemos várias ideias iniciais baseadas nos nossos gostos pessoais e no material que tínhamos disponível.',
      'Analisámos vários critérios de escolha, como a utilidade atual e a acessibilidade dos componentes. No final, prevaleceu o efeito estético e a sensação vintage que uma câmara analógica oferece — um objeto com história, complexidade mecânica e apelo visual.',
    ],
    images: [
      { src: `${BASE}/berbequim.png`, alt: 'Ideia: berbequim', caption: 'Ideia descartada — berbequim' },
      { src: `${BASE}/guardachuva.png`, alt: 'Ideia: guarda-chuva', caption: 'Ideia descartada — guarda-chuva' },
      { src: `${BASE}/cuco.jpeg`, alt: 'Ideia: relógio cuco', caption: 'Ideia descartada — relógio cuco' },
    ],
  },

  desmontagem: {
    id: 'desmontagem',
    index: 3,
    label: 'Processo',
    title: 'Desmontagem',
    text: [
      'Nesta etapa desmontámos a nossa câmara fotográfica. Depois de apertos, desapertos, chaves minúsculas, um pouco de força física e alguns cabos que já não vão dar a lado nenhum...',
      '...ficámos com o nosso projeto dividido nas peças que precisávamos de modelar. Cada componente foi catalogado e fotografado para posterior referência durante a modelação 3D.',
    ],
    images: [
      { src: `${BASE}/desmcima.png`, alt: 'Desmontagem — parte de cima', caption: 'Tampa superior desmontada' },
      { src: `${BASE}/desmbaixo.png`, alt: 'Desmontagem — parte de baixo', caption: 'Tampa inferior desmontada' },
      { src: `${BASE}/desm3.png`, alt: 'Desmontagem — interior', caption: 'Interior da câmara após desmontagem' },
    ],
  },

  pecas: {
    id: 'pecas',
    index: 4,
    label: 'Modelação 3D',
    title: 'Peças',
    text: [
      'Nesta secção documentamos as peças que fomos modelando ao longo do projeto.',
    ],
    parts: [
      {
        name: 'Parte de Cima',
        description:
          'Em termos de geometria geral, foi copiada da tampa inferior como ponto de partida. O maior desafio foi o posicionamento de todos os braços e a parte poligonal, para a qual foi necessário usar superfícies e diversos sketches 3D. Em termos de features, foram usados extrudes, cuts e posteriormente a aplicação de superfícies.',
        image: { src: `${BASE}/cima.png`, alt: 'Parte de cima', caption: 'Tampa superior modelada em SolidWorks' },
      },
      {
        name: 'Parte de Baixo',
        description:
          'Esta peça exigiu muito trabalho, principalmente pelas medidas e pelos pormenores da geometria escolhida. A complexidade residiu principalmente na precisão das cotas e no rigor geométrico dos detalhes. Em termos de features, foram usados exclusivamente extrudes e cuts.',
        image: { src: `${BASE}/baixo.png`, alt: 'Parte de baixo', caption: 'Tampa inferior modelada em SolidWorks' },
      },
      {
        name: 'Centro / Corpo',
        description:
          'Peça central que une a tampa superior e inferior. Inclui os encaixes para os mecanismos internos e os detalhes da frente da câmara.',
        image: { src: `${BASE}/centro.png`, alt: 'Centro da câmara', caption: 'Corpo central modelado em SolidWorks' },
      },
      {
        name: 'Tampa',
        description:
          'Tampa do compartimento traseiro, onde se acede ao rolo de filme. Modelada com as presilhas de fecho e a superfície curva característica da câmara.',
        image: { src: `${BASE}/tampa.png`, alt: 'Tampa', caption: 'Tampa traseira modelada em SolidWorks' },
      },
      {
        name: 'Visor',
        description:
          'O visor ótico da câmara, com a geometria das lentes e a moldura exterior. Uma das peças com mais detalhe geométrico.',
        image: { src: `${BASE}/visor.png`, alt: 'Visor', caption: 'Visor modelado em SolidWorks' },
      },
      {
        name: 'Assembly — Frente',
        description:
          'Vista frontal do assembly completo. Mostra o resultado da assemblagem de todas as peças modeladas.',
        image: { src: `${BASE}/modelofrente.png`, alt: 'Assembly frente', caption: 'Assembly — vista frontal' },
      },
    ],
  },

  assemblagem: {
    id: 'assemblagem',
    index: 5,
    label: 'Integração',
    title: 'Assemblagem',
    text: [
      'A assemblagem até ao momento presente.',
      'No assembly geral foram usados mates convencionais e alguns com limitações de ângulos. Foi priorizado o aspeto exterior da câmara em relação à sua "montagem correta", pois havia alguma discrepância nas medidas das peças utilizadas.',
      'No assembly foram também feitas as camadas de borracha frontais para finalizar a câmara esteticamente.',
    ],
    images: [
      { src: `${BASE}/modelofrente.png`, alt: 'Assembly — frente', caption: 'Vista frontal do assembly' },
      { src: `${BASE}/modelotras.png`, alt: 'Assembly — traseira', caption: 'Vista traseira do assembly' },
    ],
  },

  desenhos: {
    id: 'desenhos',
    index: 6,
    label: 'Documentação Técnica',
    title: 'Desenhos Técnicos',
    text: [
      'Estes são os desenhos técnicos que cada um de nós realizou de algumas partes da máquina — documentação essencial para qualquer projeto de engenharia.',
    ],
    images: [
      { src: `${BASE}/Adesenhonuno.jpg`, alt: 'Desenho técnico - Nuno', caption: 'Desenho técnico — Nuno' },
      { src: `${BASE}/Adesenho.png`, alt: 'Desenho técnico', caption: 'Desenho técnico da peça' },
      { src: `${BASE}/Asedesenhokika.jpeg`, alt: 'Desenho técnico - Kika', caption: 'Desenho técnico — Kika' },
    ],
  },

  mala: {
    id: 'mala',
    index: 7,
    label: 'Documentação da Mala',
    title: 'Mala',
    text: [
      'E para podermos guardar a câmara e levá-la connosco nos nossos passeios, uma mala. Tentei aplicar formas e ferramentas que ainda não tinha usado, como o Draft ou o Loft, começo a notar maior destreza na modelação. A parte mais demorada foi o rendering, o meu PC não roda o Visualize o que se tornou um desafio um bocado chato. Passar do .step no Solidworks para o .obj no Freecad para depois passar demasiado tempo no Blender a tentar encontrar a mala com a câmarazinha. Fiz os materiais e tentei aplicar às faces, na parte da mala aberta não consegui meter o material na pega como queria, mas de resto até estou contente com o resultado.',
    ],
    images: [
      { src: `${BASE}/mala1.png`, alt: 'Mala — foto 1', caption: 'Modelação inicial' },
      { src: `${BASE}/mala2.png`, alt: 'Mala — foto 2', caption: 'Assemblagem' },
      { src: `${BASE}/mala3.png`, alt: 'Mala — foto 3', caption: 'Implementação de elementos gráficos no SolidWorks' },
      { src: `${BASE}/mala4.png`, alt: 'Mala — foto 1', caption: 'Modelação no blender' },
      { src: `${BASE}/mala5.png`, alt: 'Mala — foto 2', caption: 'Rendering da mala fechada' },
      { src: `${BASE}/mala6.png`, alt: 'Mala — foto 3', caption: 'Rendering da mala aberta' },
    ],
  },

  renderizacao: {
    id: 'renderizacao',
    index: 8,
    label: 'Renderização',
    title: 'Renderização da Câmara',

    blocks: [
      {
        images: [
          { src: `${BASE}/Render_maquina_0.1.jpeg`, alt: 'Renderização inicial da máquina 0.1' },
          { src: `${BASE}/Render_maquina_0.2.jpeg`, alt: 'Renderização inicial da máquina 0.2' },
        ],
      },
      {
        text: [
          'Para começar a dimensionar uma capa para a câmara, foi utilizado um desenho da máquina anteriormente dimensionada. Em seguida, foi feito um esboço, como mostram as imagens.',
        ],
        images: [
          { src: `${BASE}/Render_maquina_1.1.png`, alt: 'Esboço da capa 1.1' },
          { src: `${BASE}/Render_maquina_1.2.png`, alt: 'Esboço da capa 1.2' },
          { src: `${BASE}/Render_maquina_1.3.png`, alt: 'Esboço da capa 1.3' },
        ],
      },
      {
        text: [
          'Esta foi a primeira tentativa de modelação da capa, mas, por ficar demasiado reta e sem a geometria desejada, foi posta de lado e recomeçou-se o processo.',
        ],
        images: [
          { src: `${BASE}/Render_maquina_2.1.png`, alt: 'Primeira tentativa da capa 2.1' },
          { src: `${BASE}/Render_maquina_2.2.png`, alt: 'Primeira tentativa da capa 2.2' },
          { src: `${BASE}/Render_maquina_2.3.png`, alt: 'Primeira tentativa da capa 2.3' },
        ],
      },
      {
        text: [
          'Na segunda tentativa já se obteve algo mais próximo do pretendido. Foi utilizada a ferramenta de 3D sketch, que permitiu uma geometria mais orgânica, embora ainda insuficiente.',
        ],
        images: [
          { src: `${BASE}/Render_maquina_3.1.png`, alt: 'Segunda tentativa da capa 3.1' },
          { src: `${BASE}/Render_maquina_3.2.png`, alt: 'Segunda tentativa da capa 3.2' },
          { src: `${BASE}/Render_maquina_3.3.png`, alt: 'Segunda tentativa da capa 3.3' },
        ],
      },
      {
        text: [
          'Na terceira tentativa, o resultado já estava significativamente mais próximo do desejado, tendo-se recorrido a uma geometria inicial mais ergonómica. Ainda assim, faltava algum refinamento para atingir o resultado final.',
          'Foi então que se decidiu recorrer ao Freeform do Fusion. Infelizmente, por motivos de tempo, não foi possível investir o tempo necessário para criar algo com a qualidade pretendida.',
        ],
        images: [
          { src: `${BASE}/Render_maquina_4.1.png`, alt: 'Tentativa com Freeform 4.1' },
          { src: `${BASE}/Render_maquina_4.2.png`, alt: 'Tentativa com Freeform 4.2' },
        ],
      },
      {
        text: [
          'Por isso, optou-se por melhorar a terceira tentativa e, além disso, criar também um suporte, e não apenas a capa.',
        ],
        images: [
          { src: `${BASE}/Render_maquina_5.1.png`, alt: 'Capa e suporte 5.1' },
          { src: `${BASE}/Render_maquina_5.2.png`, alt: 'Capa e suporte 5.2' },
          { src: `${BASE}/Render_maquina_5.3.png`, alt: 'Capa e suporte 5.3' },
          { src: `${BASE}/Render_maquina_6.1.png`, alt: 'Capa e suporte 6.1' },
          { src: `${BASE}/Render_maquina_6.2.png`, alt: 'Capa e suporte 6.2' },
          { src: `${BASE}/Render_maquina_6.3.png`, alt: 'Capa e suporte 6.3' },
        ],
      },
      {
        text: [
          'Uma das partes mais complicadas foi transformar a câmara num objeto que pudesse ser utilizado para cortar a capa. No entanto, com recurso a extrudes, foi possível transformá-la em dois corpos, que posteriormente foram utilizados para efetuar os cortes nas peças. Mesmo assim, foi ainda necessário realizar um acabamento final da capa.',
        ],
        images: [
          { src: `${BASE}/Render_maquina_7.1.png`, alt: 'Corte e acabamento da capa 7.1' },
          { src: `${BASE}/Render_maquina_7.2.png`, alt: 'Corte e acabamento da capa 7.2' },
          { src: `${BASE}/Render_maquina_7.3.png`, alt: 'Corte e acabamento da capa 7.3' },
          { src: `${BASE}/Render_maquina_8.1.png`, alt: 'Resultado final da capa 8.1' },
          { src: `${BASE}/Render_maquina_8.2.png`, alt: 'Resultado final da capa 8.2' },
          { src: `${BASE}/Render_maquina_8.3.png`, alt: 'Resultado final da capa 8.3' },
        ],
      },
    ],
  },

  animacao: {
    id: 'animacao',
    index: 9,
    label: 'Animação',
    title: 'Animação',

    blocks: [
      {
        text: [
          'Para complementar a câmara, foi decidido modelar uma luva no SolidWorks. Para tal, começámos por fazer um scan da mão de um dos elementos. Como não tínhamos acesso a um scanner 3D, optámos por utilizar uma aplicação de telemóvel, o que nos deu este resultado. Não é mau, mas poderia ser melhor.',
        ],
        images: [
          { src: `${BASE}/Animacao_1.png`, alt: 'Scan inicial da mão' },
        ],
      },
      {
        text: [
          'Devido ao ruído, tentámos modificar a mesh no Blender, SolidWorks e Meshmixer, mas não conseguimos obter o resultado esperado. Por isso, decidimos modelar uma mão do zero em vez de importar diretamente um modelo. Para esta tarefa usámos o Blender. Foi um processo demorado e com algumas dificuldades, mas o resultado agradou a todos, por isso continuámos com este programa.',
        ],
        images: [
          { src: `${BASE}/Animacao_2.png`, alt: 'Modelação da mão no Blender' },
          { src: `${BASE}/Animacao_3.png`, alt: 'Modelação da mão no Blender' },
        ],
      },
      {
        text: [
          'Depois de ter o modelo da mão, exportámo-lo como STL para o SolidWorks, onde tentámos transformar a geometria em superfícies do SolidWorks para conseguirmos manipular a geometria e modelar a luva a partir da mesma. No entanto, depois de muitas tentativas com metodologias diferentes, este foi o melhor resultado, embora ainda não tenha ficado com o rigor que esperávamos.',
        ],
        images: [
          { src: `${BASE}/Animacao_4.png`, alt: 'Tentativa de conversão da mão para SolidWorks' },
        ],
      },
      {
        text: [
          'Para conseguirmos continuar com o projeto para a fase seguinte, focada na renderização, decidimos deixar a ideia da luva em pausa e começar a explorar melhor os limites do Blender. Decidimos tentar animar a mão e, posteriormente, se ainda fizesse sentido, modelar a luva, seja no Blender ou no Freeform do Fusion.',
          'Para esta animação, começámos por dar um esqueleto à mão e tentar animá-la com uma metodologia de cinemática inversa. No entanto, esta abordagem não produzia um movimento suficientemente fluido. Com isto, passámos para uma metodologia de cinemática direta, em que mexíamos cada osso individualmente. Esta metodologia produziu um movimento muito mais natural e consistente.',
        ],
        images: [
          { src: `${BASE}/Animacao_5.png`, alt: 'Rigging e animação da mão' },
        ],
      },
      {
        text: [
          'Depois de estarmos satisfeitos com a animação base, começámos a pintar as mãos. Depois de alguma tentativa e erro, e de bastante trabalho perdido por ficheiros corrompidos, conseguimos chegar a um resultado interessante.',
        ],
        images: [
          { src: `${BASE}/Animacao_6.png`, alt: 'Pintura da mão' },
        ],
      },
      {
        text: [
          'Por fim, passámos para a renderização. Aqui tivemos de preparar o ficheiro com luzes e outros elementos para obtermos um bom resultado final.',
        ],
        images: [
          { src: `${BASE}/Animacao_7.png`, alt: 'Preparação da renderização' },
          { src: `${BASE}/Animacao_8.png`, alt: 'Renderização da animação' },
        ],
      },
      {
        text: [
          'Como já tínhamos a câmara renderizada, conseguimos usá-la, juntamente com os materiais já definidos, para obter a imagem final.',
        ],
        images: [
          { src: `${BASE}/Animacao_9.png`, alt: 'Resultado final da animação' },
        ],
      },
      {
        text: [
          'Como produto final, ajustámos a animação, renderizámos o vídeo e adicionámos som, tudo usando o Blender.',
        ],
        videos: [
          {
            src: `${BASE}/Animacao_video.mp4`,
            type: 'video/mp4',
            caption: 'Vídeo final da animação',
          },
        ],
      },
    ],
  },

  simulacao: {
    id: 'simulacao',
    index: 10,
    label: 'Simulação',
    title: 'Simulação',
    blocks: [
      {
        text: [
          'No âmbito do módulo de simulação desta cadeira, e mantendo o tema da máquina fotográfica, decidimos usar um tripé como sujeito de testes. Este tripé foi obtido através do Grabcad, já que nesta fase o objetivo não era modelação, mas sim explorar as simulações existentes no SolidWorks.',
        ],
        images: [
          { src: `${BASE}/simulacao/tripe-modelo.png`, alt: 'Tripé modelo', caption: 'Tripé modelo' },
          { src: `${BASE}/simulacao/tripe-real.jpeg`, alt: 'Tripé real', caption: 'Tripé real' },
        ],
      },
      {
        text: [
          'Começamos com simulações de pequenas peças do tripé.',
        ],
        images: [
          { src: `${BASE}/simulacao/sim-1.png`, alt: 'Simulação inicial 1', caption: 'Simulação inicial 1' },
          { src: `${BASE}/simulacao/sim-2.png`, alt: 'Simulação inicial 2', caption: 'Simulação inicial 2' },
        ],
      },
      {
        text: [
          'De seguida, passamos a uma abordagem mais crítica e mais pensada, onde efetuamos cálculos baseados no peso que a câmara iria exercer no tripé. Usamos o valor de 5kg por ser o especificado pelo fabricante.',
        ],
        images: [
          { src: `${BASE}/simulacao/contas-1.png`, alt: 'Cálculos de forças 1', caption: 'Cálculos de forças 1' },
          { src: `${BASE}/simulacao/contas-2.png`, alt: 'Cálculos de forças 2', caption: 'Cálculos de forças 2' },
          { src: `${BASE}/simulacao/contas-3.png`, alt: 'Cálculos de forças 3', caption: 'Cálculos de forças 3' },
        ],
      },
      {
        text: [
          'E realizamos testes para ver como essas forças iriam afetar as peças que consideramos mais críticas.',
        ],
      },
      {
        title: 'Peça do meio',
        text: [
          'Antes de termos acesso ao tripé, pensamos que as forças se iriam fazer sentir nas paredes do meio, por se tocarem no modelo que tínhamos do GrabCad.',
        ],
        images: [
          { src: `${BASE}/simulacao/meio-0.png`, alt: 'Peça do meio 0', caption: 'Peça do meio 0' },
        ],
      },
      {
        text: [
          'Após vermos como funcionava num tripé real, concluímos que tínhamos de mudar a abordagem nesta peça, já que as forças apenas se iriam fazer sentir através de pinos inseridos nas "orelhas" da peça.',
          'Criámos pinos e usamos fixamentos por simetria e num ponto da peça, para tentar simular aquilo que observámos no tripé real.',
          'Nesta peça usamos para a compressão, tripé semi-fechado, a força calculada de 5,5 N. Para a tração, já que nesta posição, tripé totalmente aberto, as forças sentidas por esta peça vão depender de quanto atrito as pernas fazem com o chão, usámos 50 N, para também tentar perceber se esta peça aguentaria uma situação onde as pernas fossem deliberadamente puxadas.',
        ],
        images: [
          { src: `${BASE}/simulacao/meio-1.png`, alt: 'Preparação da peça do meio', caption: 'Preparação da peça do meio' },
        ],
      },
      {
        title: 'Compressão',
        images: [
          { src: `${BASE}/simulacao/meio-2.png`, alt: 'Compressão 1', caption: 'Compressão 1' },
          { src: `${BASE}/simulacao/meio-3.png`, alt: 'Compressão 2', caption: 'Compressão 2' },
        ],
      },
      {
        title: 'Tração',
        images: [
          { src: `${BASE}/simulacao/meio-4.png`, alt: 'Tração 1', caption: 'Tração 1' },
          { src: `${BASE}/simulacao/meio-5.png`, alt: 'Tração 2', caption: 'Tração 2' },
        ],
      },
      {
        text: [
          'No entanto, esta forma de fixar a peça causava algum deslocamento vertical, que, nomeadamente nos testes de tração, não nos deixou satisfeitos. Assim adicionamos um apoio móvel ao topo do pino para tentar simular que o pino não se movia verticalmente. Aqui podemos ver que o deslocamento passa a ser horizontal, o que mostra melhor a realidade',
        ],
        images: [
          { src: `${BASE}/simulacao/meio-6.png`, alt: 'Apoio móvel 1', caption: 'Apoio móvel 1' },
          { src: `${BASE}/simulacao/meio-7.png`, alt: 'Apoio móvel 2', caption: 'Apoio móvel 2' },
        ],
      },
      {
        title: 'Perna',
        text: [
          'Para iniciar as simulações por partes, começou-se por aplicar a força no topo da perna, em 6061 Alloy, utilizando um Fixed Geometry na parte inferior e uma mesh com tamanho máximo de 10 mm e mínimo de 8 mm.',
        ],
        images: [
          { src: `${BASE}/simulacao/perna-1.jpg`, alt: 'Perna 1', caption: 'Perna 1' },
        ],
      },
      {
        text: [
          'Através da simulação, obteve-se uma tensão máxima de (3.365 \\times 10^4) Pa, sendo que a tensão de cedência do material é (5.515 \\times 10^7)Pa.',
          'Para a segunda simulação foi utilizado o mesmo procedimento, mas com uma mesh de metade do tamanho da anterior, ou seja, 5 mm de máximo e 4 mm de mínimo.',
        ],
        images: [
          { src: `${BASE}/simulacao/perna-2.jpg`, alt: 'Perna 2', caption: 'Perna 2' },
        ],
      },
      {
        text: [
          'Nesta simulação obteve-se uma tensão de (3.713 \\times 10^4), o que representa um aumento de 10,3%.',
          'O processo foi novamente repetido, reduzindo para metade a mesh anteriormente utilizada.',
        ],
        images: [
          { src: `${BASE}/simulacao/perna-3.jpg`, alt: 'Perna 3', caption: 'Perna 3' },
        ],
      },
      {
        text: [
          'Esta simulação apresentou uma tensão de (4.722 \\times 10^4) Pa, correspondente a um aumento de 27,2%.',
          'Como se verificou um aumento contínuo da tensão sem convergência, concluiu-se que existia uma singularidade numérica. Para resolver esta situação, foi aplicado um tipo de apoio diferente, uma vez que o Fixed Geometry estava a concentrar todas as as tensões na zona de contacto com o chão. O apoio aplicado foi o On Cylindrical Faces, impedindo a rotação sobre si na parte cilíndrica da perna, e o Roller na zona de contacto com o chão.',
          'O processo foi então repetido, começando novamente com a mesh de 10 mm.',
        ],
        images: [
          { src: `${BASE}/simulacao/perna-4.jpg`, alt: 'Perna 4', caption: 'Perna 4' },
        ],
      },
      {
        text: [
          'Obteve-se uma tensão de (3.269 \\times 10^4) Pa.',
          'Novamente, foi utilizada uma mesh de 5 mm.',
        ],
        images: [
          { src: `${BASE}/simulacao/perna-5.jpg`, alt: 'Perna 5', caption: 'Perna 5' },
        ],
      },
      {
        text: [
          'Obteve-se uma tensão de (3.294 \\times 10^4) Pa, correspondente a um aumento de 0,8%.',
          'De seguida, foi utilizada uma mesh de 2,5 mm.',
        ],
        images: [
          { src: `${BASE}/simulacao/perna-6.jpg`, alt: 'Perna 6', caption: 'Perna 6' },
        ],
      },
      {
        text: [
          'Obteve-se uma tensão de (3.316 \\times 10^4) Pa, correspondente a um aumento de 0,7%.',
          'Por fim, foi utilizada uma mesh de 1,25 mm.',
        ],
        images: [
          { src: `${BASE}/simulacao/perna-7.jpg`, alt: 'Perna 7', caption: 'Perna 7' },
        ],
      },
      {
        text: [
          'Obteve-se uma tensão de (3.335 \\times 10^4) Pa, correspondente a um aumento de 0,6%.',
          'Concluiu-se, assim, que a utilização destes dois últimos tipos de fixações constitui um método mais eficaz e mais realista, visto que a perna de um tripé não se encontra rigidamente fixa.',
        ],
      },
      {
        title: 'Simulação geral',
        text: [
          'Inicialmente foi realizada uma simulação geral apenas para obter uma perceção preliminar do comportamento da estrutura. Durante essa análise foi identificada uma singularidade numérica numa das peças. Na última tentativa já foi aplicado o apoio Roller e, devido ao facto de os pés não estarem paralelos, não foi necessária qualquer fixação adicional.',
          'Começou-se com uma malha de 10 mm máximo e 8 mm mínimo.',
        ],
        images: [
          { src: `${BASE}/simulacao/tripe-1.jpg`, alt: 'Tripé 1', caption: 'Tripé 1' },
        ],
      },
      {
        text: [
          'A tensão máxima foi de (9.585 \\times 10^5) Pa.',
          'Foi então realizada outra simulação com malha de 5 mm.',
        ],
        images: [
          { src: `${BASE}/simulacao/tripe-2.jpg`, alt: 'Tripé 2', caption: 'Tripé 2' },
        ],
      },
      {
        text: [
          'A tensão máxima foi de (1.436 \\times 10^6) Pa, correspondente a um aumento de 49,8%.',
          'De seguida, foi utilizada uma malha de 2,5 mm. A partir desta malha foi aplicado um control mesh na zona crítica, de forma a reduzir o esforço computacional mantendo a fidelidade da simulação. No restante tripé foi mantida a malha de 5 mm.',
        ],
        images: [
          { src: `${BASE}/simulacao/tripe-3.jpg`, alt: 'Tripé 3', caption: 'Tripé 3' },
        ],
      },
      {
        text: [
          'A tensão máxima foi de (2.008 \\times 10^6) Pa, correspondente a um aumento de 39,8%.',
          'Posteriormente, foi utilizada uma control mesh de 1,25 mm.',
        ],
        images: [
          { src: `${BASE}/simulacao/tripe-4.jpg`, alt: 'Tripé 4', caption: 'Tripé 4' },
        ],
      },
      {
        text: [
          'Obteve-se uma tensão máxima de (2.027 \\times 10^6) Pa, correspondente a um aumento de 0,9%.',
          'Concluiu-se, assim, que a simulação convergiu, permitindo considerar este valor como fiável.',
          'Comparando as tensões obtidas no tripé completo com as tensões analisadas peça a peça, verifica-se uma diferença muito significativa. Por exemplo, nas pernas, quando o tripé é analisado como um conjunto, as tensões obtidas são bastante inferiores. Conclui-se, assim, que a análise individual das partes constitui uma etapa fundamental no processo de análise de um objeto.',
        ],
      },
      {
        title: 'Simulação não linear',
        text: [
          'Ao mesmo tempo que estávamos a modelar o tripé de uma forma mais convencional, decidimos também estudar as peças responsáveis por fixar as pernas do tripé na altura desejada. Como este estudo envolvia movimento, contacto entre corpos e alguma deformação, percebemos que uma simulação linear não seria suficiente para representar corretamente o comportamento esperado.',
          'Por isso, decidimos explorar a simulação não linear, começando por um objeto com o qual já estávamos mais familiarizados: um alicate sem partes móveis, que fecha apenas através da deformação de zonas específicas do próprio modelo. Com este plano em mente, começámos a explorar diferentes abordagens e a perceber quais os parâmetros que mais influenciavam os resultados.',
        ],
        images: [
          { src: `${BASE}/simulacao/nuno/nonlinear-40n-inicial.png`, alt: 'Estudo não linear com 40 N - estado inicial', caption: 'Estudo não linear com 40 N — estado inicial' },
          { src: `${BASE}/simulacao/nuno/nonlinear-40n-final.png`, alt: 'Estudo não linear com 40 N - estado final', caption: 'Estudo não linear com 40 N — estado final' },
        ],
      },
      {
        text: [
          'Depois de fazermos um estudo linear apenas para comprovar que não era a abordagem mais adequada ao que pretendíamos analisar, tentámos começar pelo mais simples dentro das opções dos estudos não lineares. Dividimos o alicate em três partes diferentes, fixámos as zonas necessárias e introduzimos uma força de 40 N.',
          'Inicialmente, foi estranho verificar que o alicate não fechava como esperávamos, mas esta acabou por ser uma boa primeira tentativa, porque nos permitiu perceber que a forma como as forças e as condições de fronteira são aplicadas tem uma influência muito grande no comportamento final da simulação.',
        ],
        images: [
          { src: `${BASE}/simulacao/nuno/nonlinear-12mm-inicial.png`, alt: 'Estudo por deslocamento de 12 mm - estado inicial', caption: 'Deslocamento de 12 mm — estado inicial' },
          { src: `${BASE}/simulacao/nuno/nonlinear-12mm-final.png`, alt: 'Estudo por deslocamento de 12 mm - estado final', caption: 'Deslocamento de 12 mm — estado final' },
        ],
      },
      {
        text: [
          'Com isto, passámos para uma abordagem baseada em deslocamento em vez de força. Esta tentativa foi interessante, porque permitia controlar melhor o movimento imposto ao modelo, mas não se revelou viável desta forma. O principal problema foi o facto de o sentido do deslocamento não se atualizar ao longo do estudo, ao contrário do que acontece com uma força aplicada sobre uma superfície.',
          'Como resultado, surgiram deformações pouco realistas, que não representavam corretamente o movimento natural de fecho do alicate.',
        ],
        images: [
          { src: `${BASE}/simulacao/nuno/nonlinear-20n-inicial.png`, alt: 'Estudo não linear com 20 N - estado inicial', caption: 'Estudo não linear com 20 N — estado inicial' },
          { src: `${BASE}/simulacao/nuno/nonlinear-20n-final.png`, alt: 'Estudo não linear com 20 N - estado final', caption: 'Estudo não linear com 20 N — estado final' },
        ],
      },
      {
        text: [
          'Depois tentámos um estudo geral do alicate, fixando uma das pegas e introduzindo 20 N na outra, para observar a deformação e o comportamento do alicate como um todo. Neste caso, o modelo comportou-se de uma forma mais próxima do esperado.',
          'No entanto, foi estranho verificar que o deslocamento da pega era pouco diferente do primeiro teste, apesar de esse primeiro ensaio estar sujeito ao dobro da força. Isto mostrou-nos a inconsistência desta abordagem quando usamos apenas forças aplicadas diretamente e também a superficialidade com que, nesta fase inicial, ainda estávamos a explorar as definições automáticas do SolidWorks.',
        ],
        images: [
          { src: `${BASE}/simulacao/nuno/nonlinear-40mm-inicial.png`, alt: 'Estudo por deslocamento de 40 mm - estado inicial', caption: 'Deslocamento de 40 mm — estado inicial' },
          { src: `${BASE}/simulacao/nuno/nonlinear-40mm-final.png`, alt: 'Estudo por deslocamento de 40 mm - estado final', caption: 'Deslocamento de 40 mm — estado final' },
        ],
      },
      {
        text: [
          'Com isto em mente, voltámos à abordagem por deslocamento, mas desta vez utilizando um corpo diferente, responsável por sofrer o deslocamento vertical e, através do contacto, transferir esse movimento para a pega do alicate. Esta solução tornou-se muito mais eficaz e controlada, porque o deslocamento não era imposto diretamente na peça deformável, mas sim transmitido por contacto, aproximando melhor a simulação de uma situação física real.',
        ],
        videos: [
          { src: `${BASE}/simulacao/nuno/alicate-dinamico.mp4`, type: 'video/mp4', caption: 'Alicate — estudo não linear dinâmico' },
        ],
      },
      {
        text: [
          'Também foram realizados estudos dinâmicos e estáticos do alicate para comparar diferentes formas de aplicar cargas e deslocamentos. Estes testes permitiram perceber melhor a influência das fixações e confirmar que pequenas alterações nas condições de fronteira podem alterar bastante os resultados obtidos.',
        ],
        videos: [
          { src: `${BASE}/simulacao/nuno/alicate-estatico-forca.mp4`, type: 'video/mp4', caption: 'Alicate — estudo estático com força' },
          { src: `${BASE}/simulacao/nuno/alicate-estatico-deslocamento.mp4`, type: 'video/mp4', caption: 'Alicate — estudo estático com deslocamento' },
          { src: `${BASE}/simulacao/nuno/alicate-estatico-forca-direta.mp4`, type: 'video/mp4', caption: 'Alicate — estudo estático com força direta' },
        ],
      },
      {
        title: 'Aplicação ao gripper do tripé',
        text: [
          'Com tudo isto que aprendemos, tentámos então modelar a peça que fixa uma das pernas do tripé na altura desejada. Esta peça tinha um comportamento mais difícil de simular, porque envolve deformação, contacto e uma função mecânica muito específica: pressionar a perna do tripé de forma a impedir o seu movimento.',
          'Fizemos várias tentativas, mas os resultados ainda não estavam de acordo com o que esperávamos. Por isso, decidimos começar do zero, simplificando o modelo e tentando representar melhor a realidade.',
          'Com este novo modelo, mais realista e ao mesmo tempo mais simples, conseguimos obter uma simulação muito mais ilustrativa do funcionamento real da peça. No último teste, a parte exterior encontra-se fixa e funciona como base da simulação. Usámos novamente a técnica do corpo auxiliar com deslocamento, de forma a introduzir uma força na peça desejada através do contacto.',
          'Nesta versão, conseguimos ainda observar o contacto entre a peça que aperta a perna e a própria perna do tripé, bem como os esforços associados a essa interação. Este foi um avanço importante em relação ao estudo do alicate, onde ainda não tínhamos conseguido representar este tipo de contacto de forma tão clara.',
        ],
        videos: [
          { src: `${BASE}/simulacao/nuno/gripper-fixo-em-eixo-pivot.mp4`, type: 'video/mp4', caption: 'Gripper — fixo no eixo pivot' },
          { src: `${BASE}/simulacao/nuno/gripper-fixo-em-parede.mp4`, type: 'video/mp4', caption: 'Gripper — fixo em parede' },
          { src: `${BASE}/simulacao/nuno/gripper-expacao-radial.mp4`, type: 'video/mp4', caption: 'Gripper — expansão radial' },
          { src: `${BASE}/simulacao/nuno/gripper-v2-primeiro-teste.mp4`, type: 'video/mp4', caption: 'Gripper v2 — primeiro teste' },
          { src: `${BASE}/simulacao/nuno/gripper-v2-segundo-teste.mp4`, type: 'video/mp4', caption: 'Gripper v2 — segundo teste' },
          { src: `${BASE}/simulacao/nuno/gripper-v2-ultimo-teste.mp4`, type: 'video/mp4', caption: 'Gripper v2 — último teste' },
        ],
      },
      {
        text: [
          'Esta imagem serve apenas como exemplo do que pode acontecer quando as condições de fronteira e as forças são colocadas sem grande pensamento crítico. Resultados estranhos ou pouco realistas não significam necessariamente que a simulação esteja errada por completo, mas sim que é necessário rever a forma como o problema foi definido.',
          'Esta foi uma das principais aprendizagens deste processo: não desistir quando os resultados não são os esperados, mas sim explorar mais, testar novas abordagens e perceber o que cada definição está realmente a fazer. No fundo, foi preciso persistência, algo que acabou por ser verdade em todos os elementos deste grupo.',
        ],
        images: [
          { src: `${BASE}/simulacao/nuno/erro-condicoes-fronteira.png`, alt: 'Exemplo de erro nas condições de fronteira', caption: 'Exemplo de condições de fronteira mal definidas' },
        ],
      },
    ],
  },

  sobre: {
    id: 'sobre',
    index: 11,
    label: 'A Equipa',
    title: 'A Equipa',
    text: [
      'A equipa "Ausente" é composta por três estudantes dedicados de engenharia mecânica que abraçaram este projeto de reverse engineering com paixão e rigor.',
      'Através da colaboração, inovação e perseverança, conseguimos transformar uma câmara fotográfica antiga numa oportunidade de aprendizagem e crescimento técnico.',
    ],
    team: [
      {
        name: 'Miguel',
        role: 'Modelação da Mala',
        image: { src: `${BASE}/fotomig.png`, alt: 'Miguel' },
      },
      {
        name: 'Nuno',
        role: 'modelação da Assemby e no blender',
        image: { src: `${BASE}/nunofoto.png`, alt: 'Nuno' },
      },
      {
        name: 'Kika',
        role: 'Renderização da Câmara',
        image: { src: `${BASE}/kikafoto.png`, alt: 'Kika' },
      },
    ],
    images: [],
  },
};
