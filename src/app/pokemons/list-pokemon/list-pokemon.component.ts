import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonsService } from '../pokemons.service';
  
@Component({
    selector: 'list-pokemon',
    templateUrl: 'list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit {
  
    pokemons: Pokemon[] = null;
  
    constructor(private router: Router, private PokemonsService: PokemonsService) { }
  
    ngOnInit(): void {
        this.PokemonsService.getPokemons()
        .subscribe(pokemons => this.pokemons = pokemons);
    }
  
    selectPokemon(pokemon: Pokemon): void {
        console.log('Vous avez selectionné ' + pokemon.name);
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }
  
}