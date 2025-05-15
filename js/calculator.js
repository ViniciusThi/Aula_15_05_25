/**
 * Módulo Calculator - Contém a lógica para cálculo de notas e avaliação de alunos
 */
class Calculator {
    /**
     * Valida se uma nota está dentro do intervalo válido (0-10)
     * @param {number} nota - A nota a ser validada
     * @returns {boolean} true se a nota for válida, false caso contrário
     */
    validarNota(nota) {
        return nota !== null && 
               nota !== undefined && 
               !isNaN(nota) && 
               nota >= 0 && 
               nota <= 10;
    }

    /**
     * Calcula a média entre duas notas
     * @param {number} nota1 - Primeira nota
     * @param {number} nota2 - Segunda nota
     * @returns {number} A média calculada
     * @throws {Error} Se alguma das notas for inválida
     */
    calcularMedia(nota1, nota2) {
        // Converte strings para números
        const n1 = typeof nota1 === 'string' ? parseFloat(nota1) : nota1;
        const n2 = typeof nota2 === 'string' ? parseFloat(nota2) : nota2;
        
        if (!this.validarNota(n1) || !this.validarNota(n2)) {
            throw new Error('As notas devem estar entre 0 e 10');
        }
        
        return (n1 + n2) / 2;
    }

    /**
     * Determina a situação do aluno com base na média
     * @param {number} media - A média calculada
     * @returns {string} A situação do aluno (Aprovado, Recuperação ou Reprovado)
     */
    determinarSituacao(media) {
        if (media >= 7) {
            return 'Aprovado';
        } else if (media >= 5) {
            return 'Recuperação';
        } else {
            return 'Reprovado';
        }
    }

    /**
     * Processa as notas do aluno
     * @param {number} nota1 - Primeira nota
     * @param {number} nota2 - Segunda nota
     * @returns {object} Um objeto com a média e a situação do aluno
     */
    processarNotas(nota1, nota2) {
        const media = this.calcularMedia(nota1, nota2);
        const situacao = this.determinarSituacao(media);
        
        return {
            media: media.toFixed(1),
            situacao
        };
    }
}

// Exporta a classe Calculator se estiver em um ambiente de módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Calculator;
} 