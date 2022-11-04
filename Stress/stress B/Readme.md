## @040 Estressados B: Contagem
***
**Introdução**

- Na entrada de um evento de um experimento social, os participantes ganhavam uma pulseira especial que precisavam ficar utilizando.
- A pulseira informava, num pequeno visor, um número inteiro que representava o nível de stress daquele participante.
- O número 1 significava totalmente tranquilo e vai aumentando conforme o stress do participante aumentava até o valor máximo de infinito.
- Para fazer uma representação lógica de homens e mulheres em um vetor de inteiros, os números positivos representam os homens e os números negativos representam mulheres.
- Precisamos escrever os algorítmos que identifiquem informações importantes sobre os participantes da fila.

**Exemplos:**

- `{}` equivale a uma fila vazia.
- `{-1, -50, -99}` equivale a uma mulher totalmente tranquila, uma mulher médio estressada e uma mulher extremamente estressada.
- `{80, 70, 90, -4}` equivale a três homens estressados e uma mulher tranquila. 

**Funções**:

- **count**: quantas vezes o valor X apareceu na fila?
- **sum**: qual a soma de todos os valores de stress da fila?
- **average**: qual a média de stress?
- **half_compare**: qual metade da lista é mais estressada? A primeira metade ou a segunda metade? A quantidade de elementos na lista sempre será par. [draw, first, second]
- **more_men_or_women**: existem mais homens ou mulheres? [draw, men, women]
- **sex_battle**: quem é mais estressado em média? [draw, men, women]