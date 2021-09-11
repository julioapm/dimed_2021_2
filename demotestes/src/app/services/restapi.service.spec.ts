import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RestapiService } from './restapi.service';

describe('RestapiService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let restapiService: RestapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RestapiService]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    restapiService = TestBed.inject(RestapiService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(restapiService).toBeTruthy();
  });

  describe('#get', () => {
    const dummyResponse = {
      name: 'test',
      age: 10
    };

    it('should return an Observable<any>', () => {
      restapiService.get<any>('/test').subscribe(
        data => expect(data).toEqual(dummyResponse),
        fail
      );
      const req = httpTestingController.expectOne('/test');
      expect(req.request.method).toEqual('GET');
      req.flush(dummyResponse);
    });

    it('should return an error when the server returns a 404', () => {
      restapiService.get<any>('/test').subscribe(
        data => fail('expected to fail'),
        error => {
          expect(error.mensagem).toEqual('O servidor retornou o erro: 404 Not Found');
        }
      );
      const req = httpTestingController.expectOne('/test');
      expect(req.request.method).toEqual('GET');
      req.flush('', { status: 404, statusText: 'Not Found' });
    });

    it('should return an error when network errors', () => {
      const emsg = 'simulated network error';
      restapiService.get<any>('/test').subscribe(
        data => fail('expected to fail'),
        error => {
          expect(error.mensagem).toEqual(`Ocorreu um erro: ${emsg}`);
        }
      );
      const req = httpTestingController.expectOne('/test');
      expect(req.request.method).toEqual('GET');
      const mockError = new ErrorEvent('Network error', { message: emsg });
      req.error(mockError);
    });
  });

});
