import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, switchMap, zip } from 'rxjs';
import { HttpService } from 'src/app/services';

@Component({
	selector: 'app-pokemon',
	templateUrl: './pokemon.component.html',
	styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
	constructor(
		private route: ActivatedRoute,
		private httpService: HttpService,
		private activeRoute: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.activeRoute.params.subscribe((routeParams) => {
			this.loadPokemonData();
		});
	}

	public pokemonMainData: any = null;
	public pokemonSpecieData: any = null;
	public loadPokemonData(): void {
		const pokemonId = this.getPokemonId();

		this.httpService
			.getPokemon(pokemonId)
			.pipe(
				switchMap((pokemonMainData) => {
					return zip([
						of(pokemonMainData),
						this.httpService.getPokemonSpecies(pokemonId),
					]);
				}),
				switchMap(([pokemonMainData, pokemonSpecieData]) => {
					return zip([of(pokemonMainData), of(pokemonSpecieData)]);
				})
			)
			.subscribe({
				next: ([pokemonMainData, pokemonSpecieData]) => {
					this.pokemonMainData = pokemonMainData;
					this.pokemonSpecieData = pokemonSpecieData;
				},
			});
	}
	public getPokemonId(): string {
		return String(this.route.snapshot.paramMap.get('pokemon')) || '';
	}
}
