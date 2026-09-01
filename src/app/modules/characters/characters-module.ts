import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing-module';
import { Characters } from './characters';
import { ListCharacters } from './pages/list-characters/list-characters';
import { TableCharacters } from './components/table-characters/table-characters';
import { SharedModule } from '../shared/shared-module';


@NgModule({
  declarations: [
    Characters,
    ListCharacters,
    TableCharacters
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    SharedModule
  ]
})
export class CharactersModule { }
