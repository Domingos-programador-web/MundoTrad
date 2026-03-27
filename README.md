# Mundo Trad. - Documentação Técnica


## 1. 📄 Resumo do Projeto
O **Mundo Trad.** é uma aplicação web de alto desempenho dedicada à tradução instantânea de textos. O projeto foi concebido para oferecer uma alternativa leve, sem anúncios e extremamente rápida aos tradutores convencionais, focando na integração direta com APIs de tradução neural e uma interface de usuário otimizada para produtividade.

---

## 2. 🏛️ Arquitetura do Sistema

A aplicação segue o modelo de arquitetura **Single Page Application (SPA)** simplificada, onde todo o processamento e interação ocorrem em uma única carga de página, eliminando refreshs desnecessários.

### 2.1. Camada de Apresentação (UI)
* **Design Minimalista:** Interface focada no conteúdo, utilizando uma paleta de cores sóbrias para evitar a fadiga visual.
* **Responsividade Fluida:** Implementação de `Flexbox` e `CSS Grid`, garantindo que a ferramenta seja perfeitamente utilizável em smartphones, tablets e desktops de alta resolução.
* **Feedback de Estado:** Inclusão de estados visuais para "Carregando", "Sucesso" e "Erro", mantendo o usuário informado sobre o processo de tradução.

### 2.2. Camada de Lógica (Engine)
* **Processamento Assíncrono:** Utilização extensiva de `Async/Await` para gerenciar as requisições à API, permitindo que a interface permaneça responsiva mesmo durante grandes volumes de dados.
* **Sanitização de Dados:** Filtros de entrada que tratam espaços em branco e caracteres especiais antes do envio para o servidor de tradução.
* **Manipulação de DOM:** Atualização dinâmica dos resultados via JavaScript Vanilla, garantindo baixo consumo de memória.

---

## 3. 🛠️ Especificações Técnicas

| Tecnologia | Descrição |
| :--- | :--- |
| **HTML5** | Estruturação semântica e acessível. |
| **CSS3** | Estilização avançada com variáveis nativas e animações suaves. |
| **JavaScript (ES6+)** | Lógica de negócio, manipulação de eventos e chamadas de API. |
| **MyMemory API** | Motor externo para tradução de textos com suporte a múltiplos idiomas. |
| **Fetch API** | Interface moderna para requisições HTTP (`request` e `response`). |

---

## 4. 🧠 Temas Abordados no Desenvolvimento

O desenvolvimento deste projeto envolveu a resolução de problemas complexos de engenharia de software:

### 4.1. Integração com APIs de Terceiros
A aplicação consome a API REST do MyMemory. Foi necessário implementar um sistema de **URL Encoding** robusto para que textos longos e com acentuação específica (como o português) fossem transmitidos sem corrupção de dados.

### 4.2. Tratamento de Erros e Exceções
Foi desenvolvido um sistema de *error handling* - manipulação de erros, que antecipa falhas comuns:
* **Offline Mode:** Alerta o usuário caso a conexão de internet caia.
* **Timeout:** Gerencia respostas lentas do servidor para não deixar a interface travada.
* **Empty Input:** Impede requisições desnecessárias para campos vazios.

### 4.3. Experiência do Usuário (UX)
* **Atalhos de Produtividade:** Implementação de suporte a `Ctrl + Enter` para disparar a tradução.
* **Read-only Output:** O campo de tradução é bloqueado para edição, garantindo a integridade do resultado retornado pela `API`.

---

## 5. 🚀 Possibilidades de Evolução

O projeto foi estruturado de forma modular, permitindo futuras expansões como:
1.  **Detecção Automática de Idioma:** Implementação de algoritmos de identificação de linguagem.
2.  **Histórico de Consultas:** Armazenamento das últimas 10 traduções utilizando `LocalStorage`.
3.  **Voz para Texto (TTS):** Integração com a Web Speech API para leitura em voz alta da tradução.

---

## 6. 🏁 Conclusão
O **Mundo Trad.** é uma demonstração de como tecnologias web fundamentais (HTML/CSS/JS) podem ser combinadas para criar ferramentas de utilidade global. O projeto não apenas resolve um problema de comunicação, mas faz isso com elegância técnica e eficiência de código.

---
*Dev:* Domingos Dias
---
*Design:* Rosária Tualungo
---
**Data:** janeiro de 2026  
---
**Local:** Luanda, Angola
---