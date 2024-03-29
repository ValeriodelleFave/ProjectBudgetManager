import { NgModule } from '@angular/core';
import { MaterialModule } from './../../material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SnackBarService } from 'src/assets/services/snack-bar.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    MaterialModule,
    HomeRoutingModule
  ],
  bootstrap: [HomeComponent],
  providers: [SnackBarService]
})
export class HomeModule { }
