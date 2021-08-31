import { HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError, of } from "rxjs";

export function tratadorDeErro<T>(resultado?:T) {
  return (erro: HttpErrorResponse): Observable<T> => {
    if (erro.error instanceof ErrorEvent) {
      console.error(`Erro: ${erro.error.message}`);
      return throwError(`Erro: ${erro.error.message}`);
    } else {
      console.error(`Status: ${erro.status} ${erro.statusText}`);
      return of(resultado as T);
    }
  }
}
