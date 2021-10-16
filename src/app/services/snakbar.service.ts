import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnakbarService {

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 2000
    });
    // this._snackBar.openFromComponent(AppComponent, {
    //   duration: 5 * 1000,
    // });
  }
}
