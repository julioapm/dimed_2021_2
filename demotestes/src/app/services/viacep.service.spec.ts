import { TestBed } from '@angular/core/testing';
import { ViacepService } from './viacep.service';
import { RestapiService } from './restapi.service';
import { asyncData, asyncError } from '../testing/async-observable-helpers';

//Teste unitário do serviço ViacepService
//Usando o serviço RestapiService através de um spy/mock/stub
describe('ViacepService', () => {
  let service: ViacepService;
  let restapiServiceSpy: jasmine.SpyObj<RestapiService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('RestapiService', ['get']);
    TestBed.configureTestingModule({
      providers: [
        ViacepService,
        { provide: RestapiService, useValue: spy }
      ]
    });
    service = TestBed.inject(ViacepService);
    restapiServiceSpy = TestBed.inject(RestapiService) as jasmine.SpyObj<RestapiService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getAddress should call RestapiService.get and return an object', (done) => {
    const cep = '01001000';
    const expectedAddress = {
      cep: '01001-000',
      logradouro: 'Praça da Sé',
      complemento: 'lado ímpar',
      bairro: 'Sé',
      localidade: 'São Paulo',
      uf: 'SP',
      ibge: '3550308',
      gia: '1004',
      ddd: '11',
      siafi: '7107'
    };
    restapiServiceSpy.get.and.returnValue(asyncData(expectedAddress));
    service.getAddress(cep).subscribe(
      address => {
        expect(address).toEqual(expectedAddress);
        done();
      },
      done.fail
    );
    expect(restapiServiceSpy.get).toHaveBeenCalledTimes(1);
    expect(restapiServiceSpy.get).toHaveBeenCalledWith(`https://viacep.com.br/ws/${cep}/json/`);
  });

  it('#getAddress should return an error when the server returns a 400', (done) => {
    const cep = '0';
    const expectedError = {
      erro: '400 Bad Request',
      mensagem: 'O servidor retornou o erro: 400 Bad Request',
      mensagemOriginal: '400 Bad Request'
    };
    restapiServiceSpy.get.and.returnValue(asyncError(expectedError));
    service.getAddress(cep).subscribe(
      address => done.fail('should have failed with the 400 error'),
      error => {
        expect(error).toEqual(expectedError);
        done();
      }
    );
  });
});
