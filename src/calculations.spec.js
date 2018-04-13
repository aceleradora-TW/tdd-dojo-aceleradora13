import { expect } from 'chai';
import { max } from './calculations';

describe('calculations', () => {
  describe('max', () => {
    it('nao deve aceitar string', () => {
      expect(max('12345')).to.be.eq('Mensagem de erro.');
    });

    it('deve aceitar um array sem retornar erro', () => {
      expect(max([1, 2, 3])).to.not.be.eq('Mensagem de erro.');
    });

    it ('o array nao deve ser vazio', ()=> {
      expect(max([])).to.be.eq('Mensagem de erro.');
    }); 

    it ('o array nao deve conter caracter', () =>{
      expect(max([1,'w',2,'r'])).to.be.eq('Mensagem de erro.');
    });
    it('Deve retornar o maior', () => {
        expect(max([1,2])).to.be.eq(2)
    }
  )
  });
});
