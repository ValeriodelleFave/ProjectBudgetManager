import { Component } from '@angular/core';
import { SnackBarService } from 'src/assets/services/snack-bar.service';

export interface PeriodicElement {
  project: string;
  position: number;
  cost: number;
  yearCost: number;
}

let ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, project: 'Hydrogen', cost: 1.0079, yearCost: 1.0079 },
  { position: 2, project: 'Helium', cost: 4.0026, yearCost: 4.0026 },
  { position: 3, project: 'Lithium', cost: 6.941, yearCost: 6.941 },
  { position: 4, project: 'Beryllium', cost: 9.0122, yearCost: 9.0122 },
  { position: 5, project: 'Boron', cost: 10.811, yearCost: 10.811 },
  { position: 6, project: 'Carbon', cost: 12.0107, yearCost: 12.0107 },
  { position: 7, project: 'Nitrogen', cost: 14.0067, yearCost: 14.0067 },
  { position: 8, project: 'Oxygen', cost: 15.9994, yearCost: 15.9994 },
  { position: 9, project: 'Fluorine', cost: 18.9984, yearCost: 18.9984 },
  { position: 10, project: 'Neon', cost: 20.1797, yearCost: 20.1797 },
];

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public displayedColumns: string[] = ['position', 'project', 'cost', 'yearCost', 'actions'];
  public dataSource: any;

  constructor(private snackBar: SnackBarService) {

  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataSource = ELEMENT_DATA;
  }

  info(element: any) {
    alert("Info pressed!");
  }

  add() {
    alert("Added element!");
  }

  delete(element: any) {
    ELEMENT_DATA = ELEMENT_DATA.filter((elemento: any) => element.position !== elemento.position);
    this.loadData();
    this.snackBar.openSnackBar("Hello")
  }
}
