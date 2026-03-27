// Função de Tradução (Interação com API)
        async function handleTranslate() {
          const text = document.getElementById('textInput').value;
          const from = document.getElementById('langFrom').value;
          const to = document.getElementById('langTo').value;
          const output = document.getElementById('textOutput');
          const loader = document.getElementById('loader');
          
          if (!text.trim()) return;
          
          loader.style.display = 'block';
          output.style.opacity = '0.5';
          
          try {
            const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`);
            const data = await response.json();
            
            output.value = data.responseData.translatedText;
            output.style.opacity = '1';
          } catch (error) {
            output.value = "Erro ao conectar.";
          } finally {
            loader.style.display = 'none';
          }
        }
        
        // Função de Voz (Interatividade Extra)
        function speakText() {
          const text = document.getElementById('textOutput').value;
          const lang = document.getElementById('langTo').value;
          if (!text) return;
          
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.lang = lang === 'zh' ? 'zh-CN' : lang; // Ajuste para mandarim
          window.speechSynthesis.speak(utterance);
        }
        
        // Função para inverter idiomas
        function swapLanguages() {
          const fromSelect = document.getElementById('langFrom');
          const toSelect = document.getElementById('langTo');
          const temp = fromSelect.value;
          fromSelect.value = toSelect.value;
          toSelect.value = temp;
        }
        
        // Atalho de teclado (Enter traduz)
        document.addEventListener('keypress', (e) => {
          if (e.key === 'Enter' && e.ctrlKey) {
            e.preventDefault();
            handleTranslate();
          }
        });
        const btnStart = document.querySelector('button.start')
        btnStart.addEventListener('click', function(e){
          setTimeout(()=>{
            remover(this)
          },1200)
          
        })
        
        function remover(capa) {
            capa.parentNode.remove(true)
        }