class Api {
  search(plate) {
    if (plate.length !== 7) {
      throw new Error('plate length should be 7');
    }
    if (plate[0] === 'F') {
      return {
        mensagemRetorno: 'Sem erros.',
        situacao: 'Furto',
        modelo: 'FIAT/PALIO',
        marca: 'FIAT/UNO',
        cor: 'PRATA',
        ano: '2012',
        anoModelo: '2012',
        placa: plate,
        uf: 'PA',
        municipio: 'BELEM',
        chassi: '99092',
        dataAtualizacaoCaracteristicasVeiculo: '07/05/2020',
        dataAtualizacaoRouboFurto: '07/05/2020',
        dataAtualizacaoAlarme: '07/05/2020',
      };
    }
    if (plate[0] === 'P') {
      return {
        mensagemRetorno: 'Sem erros.',
        situacao: 'Pendências administrativas',
        modelo: 'FIAT/UNO MILLE EP',
        marca: 'FIAT/UNO MILLE EP',
        cor: 'BRANCA',
        ano: '1996',
        anoModelo: '1996',
        placa: plate,
        uf: 'PA',
        municipio: 'BELEM',
        chassi: '99092',
        dataAtualizacaoCaracteristicasVeiculo: '07/05/2020',
        dataAtualizacaoRouboFurto: '07/05/2020',
        dataAtualizacaoAlarme: '07/05/2020',
      };
    }
    if (plate[0] === 'S') {
      const status = {
        mensagemRetorno: 'Sem erros.',
        situacao: 'Sem restrição',
        modelo: 'FOX/CROSSFOX',
        marca: 'FOX/CROSSFOX',
        cor: 'VERMELHO',
        ano: '2016',
        anoModelo: '2016',
        placa: plate,
        uf: 'PARA',
        municipio: 'BELEM',
        chassi: '99092',
        dataAtualizacaoCaracteristicasVeiculo: '07/05/2020',
        dataAtualizacaoRouboFurto: '07/05/2020',
        dataAtualizacaoAlarme: '07/05/2020',
      };
      return status;
    }
    throw new Error('Invalid car plate');
  }
}

export default new Api();
