let faseAtual = 0;

const fases = [
    {
        dica: "É o componente responsável por controlar e processar as instruções e dados em um computador. Possui 3 principais componentes internos: ULA, UC e registradores.",
        resposta: "CPU"
    },
    {
        dica: "É responsável por realizar cálculos aritméticos e operações lógicas/comparativas (AND, OR e NOT)",
        resposta: "ULA"
    },
    {
        dica: "São memórias com pouca capacidade de armazenamento que guardam os dados que estão sendo usados no momento. Estão fisicamente dentro da CPU.",
        resposta: "REGISTRADORES"
    },
    {
        dica: "É a memória principal e serve pra guardar os softwares e dados que estão sendo usados agora. É volátil (perde tudo se desligar)",
        resposta: "RAM"
    },
    {
        dica: "Serve pra armazenar as instruções de inicialização do computador. É gravada pelo fabricante e não pode ser alterada",
        resposta: "ROM"
    },
    {
        dica: "Evoluiu da ROM. Sua principal diferença é que pode ser regravada utilizando luz ultravioleta.",
        resposta: "EPROM"
    },
    {
        dica: "É a memória secundária, possui grande capacidade de armazenamento, está na base da hierarquia e não perde dados sem energia. DICA EXTRA: MASSA",
        resposta: "MEMÓRIA DE MASSA"
    },
    {
        dica: "Recurso que facilita o acesso de dispositivos a memória sem o processador ter que intermediar tudo. Assume o controle do barramento temporariamente",
        resposta: "DMA"
    },
    {
        dica: "É um pino de controle usado para ativar ou desativar um componente específico, dando permissão pra só um se comunicar por vez.",
        resposta: "CS"
    },
    {
        dica: "É o barramento que transporta dados referentes à localização de informações (pra onde o dado deve ir ou onde está) - EM INGLÊS",
        resposta: "ADRESS BUS"
    },
    {
        dica: "É o barramento que transporta os dados em si - EM INGLÊS",
        resposta: "DATA BUS"
    },
    {
        dica: "Processador da Intel pra uso geral e jogos. Possui menos memória cache comparado ao seu irmão mais forte",
        resposta: "I5"
    },
    {
        dica: "Processador da Intel de alta performance. Tem hyper-threading como foco e lida bem com renderização 3D pesada",
        resposta: "I7"
    },
    {
        dica: "Processador que tem exatamente 2 núcleos físicos",
        resposta: "DUAL CORE"
    },
    {
        dica: "Processador que tem exatamente 4 núcleos físicos e permite maior distribuição de tarefas simultâneas",
        resposta: "QUAD CORE"
    }
];

// Pegar as divs pra serem alteradas
const divHistorico = document.getElementById("historico");
const textoDica = document.getElementById("texto-dica");

// Função de resposta
function hackear(resposta) {
    //Limpar a resposta do usuário e tirar os espaços
    let respostaLimpa = resposta.toUpperCase().trim();
    
    let respostaCerta = fases[faseAtual].resposta;

    if (respostaLimpa == respostaCerta) {
        // Acertou
        console.log("%c[CORRETO] Acesso permitido", "color: #78d076");
        divHistorico.innerHTML += `<p>Fase ${faseAtual} concluída (Senha: ${respostaCerta})</p>`;
        
        // Atualiza pra próxima fase
        faseAtual++;

        // Vê se o jogo não acabou
        if (faseAtual < fases.length) {
            // Atualiza a dica pra proxima dica
            textoDica.innerText = fases[faseAtual].dica;
        } else {
            // Se tiver sido a última, ganhou
            textoDica.innerHTML = `<strong>O SISTEMA FOI INVADIDO</strong><br>O destino do mundo está em suas mãos.<br>Digite no console a sua decisão: <code>decidir("salvar o mundo")</code> ou <code>decidir("destruir o mundo")</code>`;
        }
    } else {
        // Errou a senha
        console.log("%c[ERRADO] Senha incorreta", "color: red");
        divHistorico.innerHTML += `<p class="erro"> resposta errada: ${resposta}</p>`;
    }
}

// Decisão final
function decidir(escolha) {
    // Não deixar usar a função antes de terminar o jogo
    if (faseAtual < fases.length) {
        console.log("Acesse o sistema para ter acesso a essa funcionalidade");
        return;
    }

    if (escolha.toUpperCase() == "DESTRUIR O MUNDO") {
        document.body.style.backgroundColor = "darkred";
        document.querySelector(".tela").style.color = "red";
        document.querySelector(".tela").innerHTML = "<h1 style='font-size: 50px; text-align: center; margin-top: 150px;'>BOOOM!!</h1><p style='text-align:center;'>O mundo foi destruído</p>";
    } else if (escolha.toUpperCase() == "SALVAR O MUNDO") {
        document.body.style.backgroundColor = "#001a4d";
        document.querySelector(".tela").style.color = "#00ffff";
        document.querySelector(".tela").innerHTML = "<h1 style='text-align: center; margin-top: 150px;'>MUNDO SALVO.</h1><p style='text-align:center;'>Você é um herói de Arq Comp</p>";
    } else {
        console.log("Comando inválido. Digite 'salvar o mundo' ou 'destruir o mundo'");
    }
}