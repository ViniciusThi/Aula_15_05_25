document.addEventListener('DOMContentLoaded', () => {
    // Instancia a calculadora
    const calculator = new Calculator();
    
    // Referências aos elementos do DOM
    const form = document.getElementById('formNotas');
    const nomeInput = document.getElementById('nome');
    const nota1Input = document.getElementById('nota1');
    const nota2Input = document.getElementById('nota2');
    const resultadoDiv = document.getElementById('resultado');
    const listaAlunosDiv = document.getElementById('lista-alunos');
    
    // Lista para armazenar os alunos (para o recurso opcional)
    let alunos = [];
    
    // Verifica se há dados no localStorage e carrega
    if (localStorage.getItem('alunos')) {
        alunos = JSON.parse(localStorage.getItem('alunos'));
        atualizarListaAlunos();
    }
    
    // Adiciona validação visual aos campos de nota
    [nota1Input, nota2Input].forEach(input => {
        input.addEventListener('input', (e) => {
            const valor = parseFloat(e.target.value);
            if (!calculator.validarNota(valor)) {
                e.target.classList.add('input-invalido');
                
                // Verifica se já existe uma mensagem de erro
                let mensagemErro = e.target.nextElementSibling;
                if (!mensagemErro || !mensagemErro.classList.contains('mensagem-erro')) {
                    mensagemErro = document.createElement('div');
                    mensagemErro.classList.add('mensagem-erro');
                    mensagemErro.textContent = 'Nota deve estar entre 0 e 10';
                    e.target.parentNode.insertBefore(mensagemErro, e.target.nextSibling);
                }
            } else {
                e.target.classList.remove('input-invalido');
                
                // Remove a mensagem de erro se existir
                const mensagemErro = e.target.nextElementSibling;
                if (mensagemErro && mensagemErro.classList.contains('mensagem-erro')) {
                    mensagemErro.remove();
                }
            }
        });
    });
    
    // Handler para submissão do formulário
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Limpa classes de resultado anterior
        resultadoDiv.classList.remove('aprovado', 'recuperacao', 'reprovado');
        
        const nome = nomeInput.value.trim();
        const nota1 = nota1Input.value;
        const nota2 = nota2Input.value;
        
        // Verifica se o nome foi preenchido
        if (!nome) {
            alert('Por favor, informe o nome do aluno');
            return;
        }
        
        try {
            // Processa as notas
            const resultado = calculator.processarNotas(nota1, nota2);
            
            // Exibe o resultado
            resultadoDiv.innerHTML = `
                <h3>Resultado de ${nome}</h3>
                <p>Média: ${resultado.media}</p>
                <p>Situação: ${resultado.situacao}</p>
            `;
            
            // Adiciona classe de acordo com a situação
            resultadoDiv.classList.add(resultado.situacao.toLowerCase());
            resultadoDiv.style.display = 'block';
            
            // Adiciona o aluno à lista
            const aluno = {
                nome,
                nota1,
                nota2,
                media: resultado.media,
                situacao: resultado.situacao
            };
            
            alunos.push(aluno);
            
            // Salva no localStorage
            localStorage.setItem('alunos', JSON.stringify(alunos));
            
            // Atualiza a lista de alunos
            atualizarListaAlunos();
            
            // Limpa o formulário
            form.reset();
            
        } catch (error) {
            alert(error.message);
        }
    });
    
    // Função para atualizar a lista de alunos
    function atualizarListaAlunos() {
        if (alunos.length === 0) {
            listaAlunosDiv.innerHTML = '';
            return;
        }
        
        let html = '<h2>Alunos Registrados</h2>';
        
        alunos.forEach((aluno, index) => {
            html += `
                <div class="aluno-item ${aluno.situacao.toLowerCase()}">
                    <p><strong>Nome:</strong> ${aluno.nome}</p>
                    <p><strong>Notas:</strong> ${aluno.nota1} e ${aluno.nota2}</p>
                    <p><strong>Média:</strong> ${aluno.media}</p>
                    <p><strong>Situação:</strong> ${aluno.situacao}</p>
                    <button class="remover-aluno" data-index="${index}">Remover</button>
                </div>
            `;
        });
        
        listaAlunosDiv.innerHTML = html;
        
        // Adiciona event listeners aos botões de remover
        document.querySelectorAll('.remover-aluno').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                alunos.splice(index, 1);
                localStorage.setItem('alunos', JSON.stringify(alunos));
                atualizarListaAlunos();
            });
        });
    }
}); 