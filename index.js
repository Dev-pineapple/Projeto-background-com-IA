// Objetivo:
// Enviar um texto de um formulário para uma API do n8n e exibir o resultado o código html, css e colocar a animação no fundo da tela do site.
// Passos:



// 5. Receber a resposta da API do n8n (esperando um JSON com o código HTML/CSS do background).
// 6. Se a resposta for válida, exibir o código HTML/CSS retornado na tela:
//Mostrar o HTML gerado em uma área de preview.
//-Inserir o CSS retornado dinamicamente na página para aplicar o background.
// 7. Remover o indicador de carregamento após o recebimento da resposta.

function setloading(isloading) {
  
  const btnSpan = document.getElementById("generate-btn");
  if (isloading) {
    btnSpan.innerHTML = "Gerando background..."
  } else {
    btnSpan.innerHTML = "Gerar Background Mágico"
  }
  
}

document.addEventListener('DOMContentLoaded', function() {
  
  // 1. No JavaScript, pegar o evento de submit do formulário para evitar o recarregamento da página.
  
  const form = document.querySelector('.form-group');
  const textArea = document.getElementById('description')
  const htmlCode = document.getElementById("html-code");
  const cssCode = document.getElementById("css-code");
  
  
  form.addEventListener('submit', async function(event) {
    event.preventDefault();
    
    // 2. Obter o valor digitado pelo usuário no campo de texto.
    const description = textArea.value.trim();
    
    if (!description) {
      return;
    }
    
    // 3. Exibir um indicador de carregamento enquanto a requisição está sendo processada.
    setloading(true);
    
    // 4. Fazer uma requisição HTTP (POST) para a API do n8n, enviando o texto do formulário no corpo da requisição em formato JSON.
    
    try{
      const response = await fetch('link do site', {
        method:'POST',
        headers:{'content-type': 'application/json'},
        body: JSON.stringify({description})
      });
      const data = await response.JSON();
      htmlCode.textContent = data.code;
      
    }catch{
    
    }finally{

    }
   
  });
});