import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackbar: MatSnackBar) { }

  public showSnackBar(massage: string): void {
    // @ts-ignore
    this.snackbar.open(massage, null, {
      duration: 2000
    });
  }

}
