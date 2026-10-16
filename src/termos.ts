// =============================================================
// termos.ts — o conteúdo do glossário.
// Para acrescentar um termo, copia um bloco { ... } e muda os valores.
// A ordem não importa: a app ordena por nome.
// =============================================================

import type { Termo } from "./tipos.ts";

export const TERMOS: Termo[] = [
  // ---------------- Siglas e jargão ----------------
  {
    nome: "WOD",
    categoria: "jargao",
    aliases: ["Workout of the Day"],
    descricao: "Workout of the Day: o treino do dia. É a parte principal da aula, normalmente um metcon.",
  },
  {
    nome: "Box",
    categoria: "jargao",
    descricao: "O ginásio de CrossFit. Costuma ser um espaço amplo, com rigs, barras e pouco equipamento de máquinas.",
  },
  {
    nome: "Metcon",
    categoria: "jargao",
    aliases: ["Metabolic conditioning"],
    descricao: "Metabolic conditioning: treino de intensidade alta que mistura vários movimentos para trabalhar a capacidade cardiovascular e muscular ao mesmo tempo.",
  },
  {
    nome: "RX",
    categoria: "jargao",
    aliases: ["Rx'd", "As prescribed"],
    descricao: "Fazer o treino exatamente como está escrito: com as cargas, alturas e movimentos prescritos, sem adaptações.",
  },
  {
    nome: "Scaled",
    categoria: "jargao",
    aliases: ["Escalado", "Scaling"],
    descricao: "Versão adaptada do treino, com menos carga, menos repetições ou movimentos mais simples, para se ajustar ao nível de cada pessoa.",
  },
  {
    nome: "PR",
    categoria: "jargao",
    aliases: ["PB", "Personal record", "Personal best"],
    descricao: "Personal record: o melhor resultado pessoal num movimento ou treino (mais carga, mais repetições ou menos tempo).",
  },
  {
    nome: "1RM",
    categoria: "jargao",
    aliases: ["One rep max", "Repetição máxima"],
    descricao: "One rep max: a carga máxima que se consegue levantar numa única repetição. Muitas percentagens de treino são calculadas a partir dela.",
  },
  {
    nome: "Rep",
    categoria: "jargao",
    aliases: ["Repetição"],
    descricao: "Uma repetição completa de um movimento.",
  },
  {
    nome: "Set",
    categoria: "jargao",
    aliases: ["Série"],
    descricao: "Um conjunto de repetições feitas seguidas. Ex.: 5 sets de 3 reps.",
  },
  {
    nome: "Round",
    categoria: "jargao",
    aliases: ["Ronda", "RD"],
    descricao: "Uma volta completa a todos os movimentos de um treino. Ex.: 5 rounds de 10 burpees e 15 air squats.",
  },
  {
    nome: "Time cap",
    categoria: "jargao",
    aliases: ["TC", "Tempo limite"],
    descricao: "Tempo máximo para acabar um treino. Quem não acaba dentro do time cap regista as repetições que fez.",
  },
  {
    nome: "Unbroken",
    categoria: "jargao",
    aliases: ["UB"],
    descricao: "Fazer todas as repetições de um set sem parar nem largar a barra ou o equipamento.",
  },
  {
    nome: "Touch and go",
    categoria: "jargao",
    aliases: ["TnG", "T&G"],
    descricao: "Encadear repetições com barra sem pausa no chão: a barra toca e sobe logo para a repetição seguinte.",
  },
  {
    nome: "No rep",
    categoria: "jargao",
    descricao: "Repetição que não conta por não cumprir o padrão do movimento (ex.: agachamento sem profundidade suficiente).",
  },
  {
    nome: "Standard",
    categoria: "jargao",
    aliases: ["Movement standard", "Padrão"],
    descricao: "Os critérios que definem uma repetição válida: posição de início, fim e amplitude obrigatória.",
  },
  {
    nome: "ROM",
    categoria: "jargao",
    aliases: ["Range of motion", "Amplitude"],
    descricao: "Range of motion: a amplitude do movimento. Fazer \"full ROM\" é fazer o movimento completo.",
  },
  {
    nome: "Kipping",
    categoria: "jargao",
    aliases: ["Kip"],
    descricao: "Usar um balanço do corpo (da anca e dos ombros) para gerar impulso em movimentos de ginástica, como pull-ups ou toes-to-bar.",
  },
  {
    nome: "Strict",
    categoria: "jargao",
    aliases: ["Estrito"],
    descricao: "Fazer o movimento só com força, sem balanço nem impulso das pernas. Ex.: strict pull-up, strict press.",
  },
  {
    nome: "Butterfly",
    categoria: "jargao",
    descricao: "Variante de kipping em que o corpo faz um movimento circular contínuo. Muito usada em pull-ups para encadear repetições mais depressa.",
  },
  {
    nome: "Buy-in",
    categoria: "jargao",
    descricao: "Exercício feito obrigatoriamente no início do treino, antes da parte principal. Ex.: buy-in de 1000 m de remo.",
  },
  {
    nome: "Cash-out",
    categoria: "jargao",
    descricao: "Exercício feito no fim do treino, depois da parte principal.",
  },
  {
    nome: "Partition",
    categoria: "jargao",
    aliases: ["Partitioned", "Dividir"],
    descricao: "Dividir as repetições de um treino em blocos mais pequenos, pela ordem que se quiser. Ex.: fazer o Murph em 20 rondas de 5-10-15.",
  },
  {
    nome: "DNF",
    categoria: "jargao",
    aliases: ["Did not finish"],
    descricao: "Did not finish: não terminou o treino dentro do time cap.",
  },

  // ---------------- Formatos de treino ----------------
  {
    nome: "AMRAP",
    categoria: "formatos",
    aliases: ["As many rounds as possible", "As many reps as possible"],
    descricao: "As many rounds/reps as possible: fazer o maior número de rondas ou repetições possível num tempo fixo. O resultado são as rondas e repetições completadas.",
  },
  {
    nome: "EMOM",
    categoria: "formatos",
    aliases: ["Every minute on the minute", "E1MOM"],
    descricao: "Every minute on the minute: no início de cada minuto faz-se um trabalho definido; o tempo que sobra até ao minuto seguinte é descanso.",
  },
  {
    nome: "E2MOM",
    categoria: "formatos",
    aliases: ["E3MOM", "Every 2 minutes", "EXMOM"],
    descricao: "Como o EMOM, mas a cada 2 minutos (ou 3, no E3MOM). Dá mais tempo para trabalhos maiores.",
  },
  {
    nome: "For time",
    categoria: "formatos",
    aliases: ["FT"],
    descricao: "Fazer todo o trabalho prescrito o mais depressa possível. O resultado é o tempo final.",
  },
  {
    nome: "RFT",
    categoria: "formatos",
    aliases: ["Rounds for time"],
    descricao: "Rounds for time: completar um número fixo de rondas o mais depressa possível. Ex.: 5 RFT.",
  },
  {
    nome: "Tabata",
    categoria: "formatos",
    descricao: "8 rondas de 20 segundos de trabalho e 10 de descanso (4 minutos). Num Tabata de CrossFit, a pontuação costuma ser a ronda com menos repetições.",
  },
  {
    nome: "Chipper",
    categoria: "formatos",
    descricao: "Treino com uma lista longa de movimentos, cada um com muitas repetições, feitos uma única vez de cima para baixo. Vai-se \"lascando\" a lista.",
  },
  {
    nome: "Ladder",
    categoria: "formatos",
    aliases: ["Escada"],
    descricao: "Treino em que as repetições ou a carga sobem (ou descem) a cada ronda. Ex.: 1-2-3-4-5... ou 21-15-9.",
  },
  {
    nome: "Death by",
    categoria: "formatos",
    descricao: "EMOM progressivo: no minuto 1 faz-se 1 repetição, no minuto 2 fazem-se 2, e assim por diante, até não se conseguir completar o minuto.",
  },
  {
    nome: "Interval",
    categoria: "formatos",
    aliases: ["Intervalos"],
    descricao: "Blocos de trabalho intercalados com descanso definido. Ex.: 5 × (3 min de trabalho + 1 min de descanso).",
  },
  {
    nome: "Benchmark",
    categoria: "formatos",
    descricao: "Treino padronizado que se repete de tempos a tempos para medir a evolução. Os mais conhecidos são as \"Girls\" e os Hero WODs.",
  },
  {
    nome: "The Girls",
    categoria: "formatos",
    aliases: ["Girl WODs"],
    descricao: "Conjunto de benchmarks com nomes de mulher (Fran, Grace, Cindy, Helen...), criados para medir a condição física ao longo do tempo.",
  },
  {
    nome: "Hero WOD",
    categoria: "formatos",
    descricao: "Benchmark criado em homenagem a militares, polícias ou bombeiros que morreram em serviço. Costumam ser treinos longos e duros, como o Murph.",
  },
  {
    nome: "Open",
    categoria: "formatos",
    aliases: ["CrossFit Open"],
    descricao: "Primeira fase dos CrossFit Games, aberta a qualquer pessoa. Durante algumas semanas sai um treino por semana, feito no box e submetido online.",
  },
  {
    nome: "Partner WOD",
    categoria: "formatos",
    aliases: ["Team WOD", "Treino a pares"],
    descricao: "Treino feito a dois ou em equipa, em que o trabalho é dividido entre os elementos.",
  },

  // ---------------- Benchmarks ----------------
  {
    nome: "Fran",
    categoria: "benchmarks",
    descricao: "21-15-9 repetições de thrusters (43/29 kg; 95/65 lb) e pull-ups, for time. Curto e muito intenso.",
  },
  {
    nome: "Grace",
    categoria: "benchmarks",
    descricao: "30 clean and jerks for time, com 61/43 kg (135/95 lb).",
  },
  {
    nome: "Isabel",
    categoria: "benchmarks",
    descricao: "30 snatches for time, com 61/43 kg (135/95 lb).",
  },
  {
    nome: "Cindy",
    categoria: "benchmarks",
    descricao: "AMRAP de 20 minutos: 5 pull-ups, 10 push-ups e 15 air squats.",
  },
  {
    nome: "Helen",
    categoria: "benchmarks",
    descricao: "3 rondas for time: 400 m de corrida, 21 kettlebell swings (24/16 kg) e 12 pull-ups.",
  },
  {
    nome: "Diane",
    categoria: "benchmarks",
    descricao: "21-15-9 repetições de deadlift (102/70 kg; 225/155 lb) e handstand push-ups, for time.",
  },
  {
    nome: "Karen",
    categoria: "benchmarks",
    descricao: "150 wall balls for time (9/6 kg; 20/14 lb).",
  },
  {
    nome: "Annie",
    categoria: "benchmarks",
    descricao: "50-40-30-20-10 repetições de double-unders e sit-ups, for time.",
  },
  {
    nome: "Murph",
    categoria: "benchmarks",
    descricao: "Hero WOD for time: 1 milha (1,6 km) de corrida, 100 pull-ups, 200 push-ups, 300 air squats e mais 1 milha de corrida, com colete de 9/6 kg (20/14 lb). As repetições do meio podem ser divididas (partition).",
  },

  // ---------------- Ginástica ----------------
  {
    nome: "Pull-up",
    categoria: "ginastica",
    aliases: ["Elevação"],
    descricao: "Elevação na barra: partir com os braços esticados e subir até o queixo passar acima da barra. Pode ser strict, kipping ou butterfly.",
  },
  {
    nome: "Chest-to-bar",
    categoria: "ginastica",
    aliases: ["C2B", "CTB"],
    descricao: "Pull-up em que o peito tem de tocar na barra, abaixo das clavículas.",
  },
  {
    nome: "Toes-to-bar",
    categoria: "ginastica",
    aliases: ["T2B", "TTB"],
    descricao: "Pendurado na barra, levar os pés a tocar na barra ao mesmo tempo, entre as mãos.",
  },
  {
    nome: "Knees-to-elbows",
    categoria: "ginastica",
    aliases: ["K2E", "KTE"],
    descricao: "Pendurado na barra, levar os joelhos a tocar nos cotovelos. Variante mais acessível do toes-to-bar.",
  },
  {
    nome: "Muscle-up",
    categoria: "ginastica",
    aliases: ["Ring muscle-up", "RMU", "MU"],
    descricao: "Nas argolas: passar de pendurado para apoio acima das argolas, com os braços esticados. Junta um pull-up e um dip numa só repetição.",
  },
  {
    nome: "Bar muscle-up",
    categoria: "ginastica",
    aliases: ["BMU"],
    descricao: "Muscle-up na barra: subir até ficar em apoio acima da barra, com os braços esticados.",
  },
  {
    nome: "Handstand push-up",
    categoria: "ginastica",
    aliases: ["HSPU", "Flexão em pino"],
    descricao: "Flexão em pino, normalmente de costas para a parede: baixar até a cabeça tocar no chão e voltar a esticar os braços.",
  },
  {
    nome: "Handstand walk",
    categoria: "ginastica",
    aliases: ["HSW", "Andar em pino"],
    descricao: "Andar com as mãos, em pino, sem apoio. Mede-se em metros.",
  },
  {
    nome: "Push-up",
    categoria: "ginastica",
    aliases: ["Flexão"],
    descricao: "Flexão de braços. No CrossFit o peito costuma ter de tocar no chão e os braços esticam por completo em cima.",
  },
  {
    nome: "Ring dip",
    categoria: "ginastica",
    aliases: ["Dip"],
    descricao: "Nas argolas, em apoio: baixar dobrando os cotovelos até os ombros ficarem abaixo dos cotovelos e voltar a subir.",
  },
  {
    nome: "Rope climb",
    categoria: "ginastica",
    aliases: ["Subida à corda", "Legless rope climb"],
    descricao: "Subir à corda, normalmente usando os pés para prender a corda. Na versão \"legless\" sobe-se só com os braços.",
  },
  {
    nome: "Air squat",
    categoria: "ginastica",
    aliases: ["Agachamento"],
    descricao: "Agachamento sem carga: a anca desce abaixo da linha dos joelhos e volta a subir até ficar em pé, com a anca estendida.",
  },
  {
    nome: "Pistol",
    categoria: "ginastica",
    aliases: ["Pistol squat", "Agachamento a uma perna"],
    descricao: "Agachamento completo numa só perna, com a outra esticada à frente.",
  },
  {
    nome: "Burpee",
    categoria: "ginastica",
    descricao: "Deitar o peito no chão, levantar e terminar com um pequeno salto e palmas acima da cabeça. Há variantes como o burpee over the bar.",
  },
  {
    nome: "Box jump",
    categoria: "ginastica",
    aliases: ["BJ", "Box jump-over", "Box step-up"],
    descricao: "Saltar com os dois pés para cima de uma caixa e ficar em pé com a anca estendida. No box jump-over passa-se para o outro lado.",
  },
  {
    nome: "Sit-up",
    categoria: "ginastica",
    aliases: ["Abdominal", "AbMat sit-up"],
    descricao: "Abdominal completo, normalmente com um AbMat nas costas: as mãos tocam no chão atrás da cabeça e depois à frente dos pés.",
  },
  {
    nome: "GHD sit-up",
    categoria: "ginastica",
    descricao: "Abdominal feito no GHD, com amplitude muito grande: o tronco desce até abaixo da horizontal. Exigente; convém começar com poucas repetições.",
  },
  {
    nome: "L-sit",
    categoria: "ginastica",
    descricao: "Sustentar o corpo com os braços esticados (em paralelas, argolas ou no chão) e as pernas esticadas à frente, formando um L.",
  },
  {
    nome: "Hollow",
    categoria: "ginastica",
    aliases: ["Hollow hold", "Hollow rock"],
    descricao: "Posição deitada de costas com a lombar colada ao chão e ombros e pernas levantados. É a base do kipping e de muitos movimentos de ginástica.",
  },

  // ---------------- Halterofilismo ----------------
  {
    nome: "Snatch",
    categoria: "halterofilismo",
    aliases: ["Arranque"],
    descricao: "Levar a barra do chão até acima da cabeça num só movimento, com pega larga. É um dos dois movimentos do halterofilismo olímpico.",
  },
  {
    nome: "Clean",
    categoria: "halterofilismo",
    aliases: ["Cargada"],
    descricao: "Levar a barra do chão até aos ombros (posição de front rack) num só movimento.",
  },
  {
    nome: "Jerk",
    categoria: "halterofilismo",
    aliases: ["Arremesso"],
    descricao: "Levar a barra dos ombros até acima da cabeça com um impulso das pernas, encaixando por baixo dela. Pode ser push jerk ou split jerk.",
  },
  {
    nome: "Clean and jerk",
    categoria: "halterofilismo",
    aliases: ["C&J"],
    descricao: "Um clean seguido de um jerk. É o segundo movimento do halterofilismo olímpico.",
  },
  {
    nome: "Power",
    categoria: "halterofilismo",
    aliases: ["Power clean", "Power snatch"],
    descricao: "Receber a barra acima do paralelo, sem agachar por completo. Ex.: power clean, power snatch.",
  },
  {
    nome: "Squat clean",
    categoria: "halterofilismo",
    aliases: ["Full clean", "Squat snatch"],
    descricao: "Receber a barra num agachamento completo. Quando só se diz \"clean\" ou \"snatch\", normalmente quer dizer a versão squat.",
  },
  {
    nome: "Hang",
    categoria: "halterofilismo",
    aliases: ["Hang clean", "Hang snatch", "Hang power clean"],
    descricao: "Começar o movimento com a barra parada acima dos joelhos (ex.: na anca ou a meio da coxa) em vez de no chão.",
  },
  {
    nome: "Thruster",
    categoria: "halterofilismo",
    descricao: "Front squat seguido, sem pausa, de um press acima da cabeça, usando o impulso da subida do agachamento.",
  },
  {
    nome: "Overhead squat",
    categoria: "halterofilismo",
    aliases: ["OHS"],
    descricao: "Agachamento completo com a barra segura acima da cabeça, braços esticados e pega larga.",
  },
  {
    nome: "Push press",
    categoria: "halterofilismo",
    descricao: "Levar a barra dos ombros acima da cabeça com um pequeno impulso das pernas, sem voltar a fletir para a receber.",
  },
  {
    nome: "Push jerk",
    categoria: "halterofilismo",
    descricao: "Como o push press, mas depois do impulso flete-se de novo as pernas para receber a barra por baixo, com os braços já esticados.",
  },
  {
    nome: "Split jerk",
    categoria: "halterofilismo",
    descricao: "Jerk em que se recebe a barra com as pernas abertas em tesoura, uma à frente e outra atrás.",
  },
  {
    nome: "Front rack",
    categoria: "halterofilismo",
    descricao: "Posição da barra apoiada à frente dos ombros, com os cotovelos altos e apontados para a frente. Usada no front squat, no thruster e no jerk.",
  },

  // ---------------- Força ----------------
  {
    nome: "Back squat",
    categoria: "forca",
    aliases: ["Agachamento com barra"],
    descricao: "Agachamento com a barra apoiada nas costas, sobre os trapézios.",
  },
  {
    nome: "Front squat",
    categoria: "forca",
    aliases: ["Agachamento frontal"],
    descricao: "Agachamento com a barra em front rack, à frente dos ombros.",
  },
  {
    nome: "Deadlift",
    categoria: "forca",
    aliases: ["DL", "Peso morto"],
    descricao: "Levantar a barra do chão até ficar em pé, com as costas neutras e a anca estendida.",
  },
  {
    nome: "Sumo deadlift high pull",
    categoria: "forca",
    aliases: ["SDHP"],
    descricao: "Deadlift com as pernas afastadas e pega estreita, que termina a puxar a barra até à altura do queixo.",
  },
  {
    nome: "Shoulder press",
    categoria: "forca",
    aliases: ["Strict press", "Press", "Military press"],
    descricao: "Levar a barra dos ombros até acima da cabeça só com a força dos braços e ombros, sem usar as pernas.",
  },
  {
    nome: "Bench press",
    categoria: "forca",
    aliases: ["Supino"],
    descricao: "Deitado num banco, baixar a barra até ao peito e empurrá-la de volta até esticar os braços.",
  },

  // ---------------- Kettlebell e halteres ----------------
  {
    nome: "Kettlebell swing",
    categoria: "kettlebell",
    aliases: ["KBS", "American swing", "Russian swing"],
    descricao: "Balançar a kettlebell entre as pernas e projetá-la com a anca. No \"russian\" sobe até à altura dos olhos; no \"american\" (o padrão do CrossFit) sobe até acima da cabeça.",
  },
  {
    nome: "Goblet squat",
    categoria: "kettlebell",
    descricao: "Agachamento com uma kettlebell ou halter seguro junto ao peito.",
  },
  {
    nome: "Turkish get-up",
    categoria: "kettlebell",
    aliases: ["TGU"],
    descricao: "Passar de deitado a de pé, e voltar, com uma kettlebell sempre segura acima da cabeça com o braço esticado.",
  },
  {
    nome: "Dumbbell snatch",
    categoria: "kettlebell",
    aliases: ["DB snatch"],
    descricao: "Levar um halter do chão até acima da cabeça num só movimento, com uma mão.",
  },
  {
    nome: "Devil press",
    categoria: "kettlebell",
    descricao: "Burpee com as mãos em dois halteres, seguido de levar os halteres do chão até acima da cabeça num só movimento.",
  },
  {
    nome: "Wall ball",
    categoria: "kettlebell",
    aliases: ["Wall ball shot", "WB"],
    descricao: "Agachar com uma bola medicinal à frente do peito e, ao subir, lançá-la contra um alvo na parede (normalmente a 3 m ou 2,7 m).",
  },
  {
    nome: "Farmer carry",
    categoria: "kettlebell",
    aliases: ["Farmer's walk"],
    descricao: "Caminhar a segurar um peso pesado em cada mão (kettlebells ou halteres), com os braços ao lado do corpo.",
  },

  // ---------------- Cardio ----------------
  {
    nome: "Double-under",
    categoria: "cardio",
    aliases: ["DU", "Dubs"],
    descricao: "Salto à corda em que a corda passa duas vezes por baixo dos pés em cada salto.",
  },
  {
    nome: "Single-under",
    categoria: "cardio",
    aliases: ["SU"],
    descricao: "Salto à corda normal, com uma passagem da corda por salto. É a versão escalada do double-under.",
  },
  {
    nome: "Row",
    categoria: "cardio",
    aliases: ["Remo", "Rower", "Concept2"],
    descricao: "Remo na máquina de remo (normalmente uma Concept2). Mede-se em metros ou calorias.",
  },
  {
    nome: "Assault bike",
    categoria: "cardio",
    aliases: ["Echo bike", "Air bike"],
    descricao: "Bicicleta com ventoinha e braços móveis: quanto mais força se faz, mais resistência tem. Mede-se normalmente em calorias.",
  },
  {
    nome: "Ski erg",
    categoria: "cardio",
    aliases: ["SkiErg"],
    descricao: "Máquina que imita o movimento dos bastões no esqui de fundo, puxando duas pegas de cima para baixo.",
  },
  {
    nome: "Shuttle run",
    categoria: "cardio",
    aliases: ["Vaivém"],
    descricao: "Corrida de ida e volta entre duas marcas, tocando no chão ou na linha em cada ponta.",
  },

  // ---------------- Equipamento ----------------
  {
    nome: "Rig",
    categoria: "equipamento",
    descricao: "Estrutura metálica do box com barras para pull-ups, suportes para argolas e racks para agachamentos.",
  },
  {
    nome: "Barbell",
    categoria: "equipamento",
    aliases: ["Barra olímpica", "Barra"],
    descricao: "Barra olímpica: 20 kg a masculina e 15 kg a feminina, mais fina.",
  },
  {
    nome: "Bumper plates",
    categoria: "equipamento",
    aliases: ["Bumpers", "Discos"],
    descricao: "Discos revestidos de borracha que se podem largar no chão sem estragar o piso nem a barra.",
  },
  {
    nome: "Rings",
    categoria: "equipamento",
    aliases: ["Argolas"],
    descricao: "Argolas de ginástica penduradas no rig, usadas em muscle-ups, ring dips e ring rows.",
  },
  {
    nome: "Plyo box",
    categoria: "equipamento",
    aliases: ["Caixa", "Box"],
    descricao: "Caixa para saltos e step-ups, normalmente com alturas de 50, 60 e 75 cm conforme o lado.",
  },
  {
    nome: "AbMat",
    categoria: "equipamento",
    descricao: "Almofada curva colocada na lombar durante os sit-ups, para proteger a coluna e aumentar a amplitude.",
  },
  {
    nome: "GHD",
    categoria: "equipamento",
    aliases: ["Glute-ham developer"],
    descricao: "Glute-ham developer: aparelho para sit-ups, extensões de anca e de costas com amplitude total.",
  },
  {
    nome: "Medicine ball",
    categoria: "equipamento",
    aliases: ["Med ball", "Bola medicinal"],
    descricao: "Bola com peso usada nas wall balls e noutros lançamentos.",
  },
  {
    nome: "Chalk",
    categoria: "equipamento",
    aliases: ["Magnésio"],
    descricao: "Pó de magnésio para secar as mãos e agarrar melhor a barra.",
  },
  {
    nome: "Grips",
    categoria: "equipamento",
    descricao: "Proteções de couro ou tecido para as mãos, usadas na barra e nas argolas para evitar calos e feridas.",
  },
];
