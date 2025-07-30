let saldo = 1000;

function validarInput() {
  console.log("Bem-vindo ao Caixa eletrônico");

  let opcao = prompt(
    "Menu de opções\n 1 - Depósito\n 2 - Saque\n 3 - Consultar saldo\n 0 - Sair"
  );

  while (opcao === "" || opcao === null) {
    alert("Escolha um código.");
    opcao = prompt(
      "Menu de opções\n 1 - Depósito\n 2 - Saque\n 3 - Consultar saldo\n 0 - Sair"
    );
  }

  while (!["1", "2", "3", "0"].includes(opcao.trim())) {
    alert("Você deve escolher uma opção válida.");
    opcao = prompt(
      "Menu de opções\n 1 - Depósito\n 2 - Saque\n 3 - Consultar saldo\n 0 - Sair"
    );
  }

  return { isValid: true, opcao: opcao.trim() };
}

function menu(opcao) {
  switch (opcao) {
    case "1": // Depósito
      let valorDeposito = Number(prompt("Insira um valor para o depósito:"));

      while (isNaN(valorDeposito) || valorDeposito <= 0) {
        alert("Valor inválido. Digite um número maior que 0.");
        valorDeposito = Number(prompt("Insira um valor para o depósito:"));
      }

      saldo += valorDeposito;
      alert(`Depósito de R$${valorDeposito} realizado com sucesso!`);
      break;

    case "2": // Saque
      let valorSaque = Number(prompt("Insira um valor para saque:"));

      while (isNaN(valorSaque) || valorSaque <= 0 || valorSaque > saldo) {
        if (isNaN(valorSaque) || valorSaque <= 0) {
          alert("Valor inválido. Digite um número maior que 0.");
        } else if (valorSaque > saldo) {
          alert("Saldo insuficiente.");
        }
        valorSaque = Number(prompt("Insira um valor para saque:"));
      }

      saldo -= valorSaque;
      alert(`Saque de R$${valorSaque} realizado com sucesso!`);
      break;

    case "3": // Consultar saldo
      alert(`Seu saldo atual é de R$${saldo}`);
      break;

    case "0": // Sair
      alert("Saindo do sistema...");
      break;
  }
}

let continuar = true;

while (continuar) {
  let resultado = validarInput();
  menu(resultado.opcao);

  if (resultado.opcao === "0") {
    continuar = false;
  }
}
