import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RickyAndMortyService } from '../services/ricky-and-morty.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [RickyAndMortyService],
})
export class SharedModule {}
