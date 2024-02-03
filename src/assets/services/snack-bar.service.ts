import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class SnackBarService {
    constructor(private _snakeBar: MatSnackBar) { }

    public openSnackBar(message: string) {
        this._snakeBar.open(message);
    }
}