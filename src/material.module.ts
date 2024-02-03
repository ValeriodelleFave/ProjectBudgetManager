import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
    declarations: [],
    imports: [
        MatTableModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatSnackBarModule,
    ],
    exports: [
        MatTableModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatSnackBarModule,
    ]
})
export class MaterialModule { }
