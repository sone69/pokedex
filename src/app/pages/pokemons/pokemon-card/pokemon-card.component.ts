import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { HttpService } from 'src/app/services';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
	selector: 'app-pokemon-card',
	templateUrl: './pokemon-card.component.html',
	styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
	@Input() id: string | undefined;

	pokemon: any | undefined;
	color: string | undefined;

	constructor(private http: HttpService, public poke: PokemonService) {}

	ngOnInit(): void {
		this.http
			.getPokemon(this.id as string)
			.pipe(tap((pokemon) => (this.pokemon = pokemon)))
			.subscribe();
	}
	public getPokemonImage(pokemon: any, isHome: boolean = false) {
		if (isHome) {
			return pokemon.sprites.other.home.front_default;
		}
		return pokemon.sprites.front_default;
	}
}
