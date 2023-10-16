class ValidadorCPFCNPJ {
  static validarCPF(cpf) {
      cpf = cpf.replace(/\D/g, '');

      if (cpf.length !== 11) {
          console.log('CPF inválido: deve conter 11 dígitos');
          return;
      }

      if (/^(\d)\1{10}$/.test(cpf)) {
          console.log('CPF inválido: todos os dígitos são iguais');
          return;
      }

      let soma = 0;
      for (let i = 0; i < 9; i++) {
          soma += parseInt(cpf.charAt(i)) * (10 - i);
      }
      let resto = soma % 11;
      const digitoVerificador1 = (resto < 2) ? 0 : 11 - resto;

      soma = 0;
      for (let i = 0; i < 10; i++) {
          soma += parseInt(cpf.charAt(i)) * (11 - i);
      }
      resto = soma % 11;
      const digitoVerificador2 = (resto < 2) ? 0 : 11 - resto;

      if (parseInt(cpf.charAt(9)) === digitoVerificador1 && parseInt(cpf.charAt(10)) === digitoVerificador2) {
          console.log('CPF válido');
      } else {
          console.log('CPF inválido');
      }
  }

  static validarCNPJ(cnpj) {
      cnpj = cnpj.replace(/\D/g, '');

      if (cnpj.length !== 14) {
          console.log('CNPJ inválido: deve conter 14 dígitos');
          return;
      }

      if (/^(\d)\1{13}$/.test(cnpj)) {
          console.log('CNPJ inválido: todos os dígitos são iguais');
          return;
      }

      let soma = 0;
      let peso = 2;
      for (let i = 11; i >= 0; i--) {
          soma += parseInt(cnpj.charAt(11 - i)) * peso;
          peso = (peso === 9) ? 2 : peso + 1;
      }
      const digitoVerificador1 = (soma % 11 < 2) ? 0 : 11 - (soma % 11);

      soma = 0;
      peso = 2;
      for (let i = 12; i >= 0; i--) {
          soma += parseInt(cnpj.charAt(12 - i)) * peso;
          peso = (peso === 9) ? 2 : peso + 1;
      }
      const digitoVerificador2 = (soma % 11 < 2) ? 0 : 11 - (soma % 11);

      if (parseInt(cnpj.charAt(12)) === digitoVerificador1 && parseInt(cnpj.charAt(13)) === digitoVerificador2) {
          console.log('CNPJ válido');
      } else {
          console.log('CNPJ inválido');
      }
  }
}

// Exemplos de uso:
ValidadorCPFCNPJ.validarCPF('123.456.789-09');
ValidadorCPFCNPJ.validarCNPJ('12.345.678/0001-01');
