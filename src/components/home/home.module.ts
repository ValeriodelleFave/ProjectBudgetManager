import { NgModule } from '@angular/core';
import { MaterialModule } from './../../material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    MaterialModule,
    HomeRoutingModule
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
