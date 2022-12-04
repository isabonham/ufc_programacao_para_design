## Tarifas
***
**Introdução**

O objetivo dessa atividade é implementar uma classe responsável por gerenciar a account bancária de um único cliente. Faremos operações de withdraw, depósito e extrato.

Seu sistema deverá ser capaz de:

- **Iniciar**
  - Iniciar a account passando número da account.
  - Se a account já existir, resete todos os valores para uma nova account.
  - Inicia a account com a operação de "abertura".
  - Para facilitar a visualização dos dados, utilize inteiros para registrar as operações financeiras.
- **Saque, Depósito e Tarifas**
  - Verifique se o valor é válido.
  - No caso da tarifa, o valor final de saldo poderá ser negativo.
  - No caso do saque, verifique se há saldo suficiente efetuar a operação.
- **Retornar o extrato**.
  - Retornar todas as movimentações da conta.
  - A descrição pode ser "opening", "withdraw", "deposit", "fee", "reverse", "error".
  - Os saques devem ter valor negativo e os depósitos positivos.
  - Se a quantidade for fornecida, retorne apenas as últimas movimentações.
- **Extornar tarifas**.
  - Deve ser possível extornar, pagando de volta, tarifas passando uma lista de índices.
  - Apenas efetue a operação de extorno dos índices válidos que forem tarifas.

## Relatório de Código

- O que fez?
  - Fiz tudo e passei em todos os testes.
- Com quem fez?
  - Fiz grande parte do código sozinha, mas tive um pouco de dificuldade na hora de retornar o extrato e extornar tarifas e pedi ajuda ao professor.
- O que aprendeu?
  - Aprimorei meus conhecimentos sobre manipulação de Arrays.
- Quanto tempo levou?
  - Entre 2 a 3 horas distribuidos em 2 dias.