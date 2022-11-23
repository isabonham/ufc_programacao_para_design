## Topic
***
**Introdução**

O objetivo dessa atividade é exercitar o que vocês aprenderam no cinema com algumas variações. Aqui, vamos implementar um sistema de alocação de passageiros em uma topic. Nossa topic tem uma quantidade máxima de passageiros, mas também define alguns assentos preferenciais.

Seu sistema deverá:

- **Inicializar e Mostrar.**
  - Iniciar a topic solicitando a lotação máxima e a quantidade de cadeiras preferenciais.
  - Mostrar o estado do trem
    - Coloque @ na frente das cadeiras preferenciais
    - Coloque = na frente das cadeiras normais.
- **Inserir.**
  - Inserir passageiros informando id e idade
    - Se o passageiro for idoso:
      - Se houver cadeiras preferenciais
        - O coloque na primeira cadeira preferência.
    - Senão
      - O coloque na primeira cadeira normal.
    - Se o passageiro não for idoso.
      - Se houver cadeiras não preferenciais
        - O coloque na primeira não preferencial.
      - Se não
        - O coloque na primeira cadeira preferencial.
- **Remover.**
  - Remover passageiros por id

Existe uma lista para as cadeiras normais e outra para as preferenciais. Para facilitar nas operações de busca e inserção, você deverá criar vários métodos privados para simplificar a lógica dos métodos principais.

## Relatório de Código

- O que fez?
  - Fiz tudo e passei em todos os testes.
- Com quem fez?
  - Fiz sozinha e não tive dificuldades.
- O que aprendeu?
  - Aprimorei meus conhecimentos sobre manipulação de Arrays.
- Quanto tempo levou?
  - Entre 20 a 40 minutos.