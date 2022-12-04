## Lapiseira
***
**Introdução**

Faça o modelo de uma lapiseira que pode conter vários.

- Iniciar lapiseira
  - Inicia uma lapiseira de determinado calibre sem grafite.
  - Lapiseiras possuem um bico e um tambor.
  - O bico guarda o grafite que está em uso.
  - O tambor guarda os grafites reservas.
- Inserir grafite
  - Insere um grafite passando
    - o calibre: float.
    - a dureza: string.
    - o tamanho em mm: int.
  - Não deve aceitar um grafite de calibre não compatível.
  - O grafite é colocado como o ÚLTIMO grafite do tambor.
- Puxar grafite
  - Puxa o grafite do tambor para o bico.
  - Se já tiver um grafite no bico, esse precisa ser removido primeiro.
- Remover grafite
  - Retira o grafite do bico.
- Escrever folha
  - Não é possível escrever se não há grafite no bico.
  - Quanto mais macio o grafite, mais rapidamente ele se acaba. Para simplificar, use a seguinte regra:
    - Grafite HB: 1mm por folha.
    - Grafite 2B: 2mm por folha.
    - Grafite 4B: 4mm por folha.
    - Grafite 6B: 6mm por folha.
  - O último centímetro de um grafite não pode ser aproveitado, quando o grafite estiver com 10mm, não é mais possível escrever e o grafite deve ser retirado.
  - Se não houver grafite suficiente para terminar a folha, avise que o texto ficou incompleto.


## Relatório de Código

- O que fez?
  - Fiz tudo e passei em todos os testes.
- Com quem fez?
  - Fiz sozinha com base na questão anterior do grafite e através de exemplos de códigos dados em aula e disponibilizados pelo professor.
- O que aprendeu?
  - Aprimorei meus conhecimentos sobre Arrays.
- Quanto tempo levou?
  - Entre 1 hora a 2 horas.