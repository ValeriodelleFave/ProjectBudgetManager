import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    declarations: [],
    imports: [
        MatTableModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
    ],
    exports: [
        MatTableModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
    ]
})
export class MaterialModule { }
