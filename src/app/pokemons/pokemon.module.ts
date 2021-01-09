import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from './pokemon-routing.module';
  
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonsService } from './pokemons.service';
import { AuthGuard } from '../auth-guard.service';
import { AuthService } from '../auth.service';

import { FormsModule } from '@angular/forms';
import { EditPokemonComponent } from './edit-pokemon.component';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { LoaderComponent } from '../loader.component';

  
@NgModule({
    imports: [
        CommonModule,
        PokemonRoutingModule,
        FormsModule
    ],
    declarations: [
        ListPokemonComponent,
        DetailPokemonComponent,
        BorderCardDirective,
        PokemonTypeColorPipe,
        PokemonFormComponent,
        SearchPokemonComponent,
        EditPokemonComponent,
        LoaderComponent,
    ],
    providers: [
        PokemonsService,
        AuthGuard,
        AuthService,
    ]
})
export class PokemonsModule { }