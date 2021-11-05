import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar'; 
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Cep } from './cep.model';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private snackBar : MatSnackBar, private http : HttpClient) {

   }

    showMessage(msg: string, isError : boolean = false): void{
      this.snackBar.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: isError ? ['msg-error']: ['msg-succes']
      } )
    }

    errorHandler(e: any): Observable<any>{
      this.showMessage('Informe um CEP válido', true);
      return EMPTY
    }

    getCep(cep: string) : Observable<Cep>{   
      return this.http.get<Cep>('https://viacep.com.br/ws/'+cep+'/json').pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
      );
      }

}
