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

  sobre: {
    id: 'sobre',
    index: 10,
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
        role: 'renderisação da maquina',
        image: { src: `${BASE}/kikafoto.png`, alt: 'Kika' },
      },
    ],
    images: [],
  },
};
