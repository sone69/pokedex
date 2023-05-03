import { Component, Input, OnChanges } from '@angular/core';
import { PokemonImage } from 'src/app/interfaces/pokemon-page.interface';
import { PokemonService } from 'src/app/services';

@Component({
	selector: 'app-pokemon-image-card',
	templateUrl: './pokemon-image-card.component.html',
	styleUrls: ['./pokemon-image-card.component.scss'],
})
export class PokemonImageCardComponent implements OnChanges {
	@Input() pokemon: any;

	public images: Array<PokemonImage> = [];

	constructor(public poke: PokemonService) {}

	ngOnChanges(): void {
		this.loadPokemonImageData();
	}

	public loadPokemonImageData(): void {
		this.images = [];

		if (this.pokemon.sprites.front_default) {
			this.images.push({
				source: this.pokemon.sprites.front_default,
				alt: '',
			});
		}
	}
}
