import { Component, Input, OnChanges } from '@angular/core';

@Component({
	selector: 'app-pokemon-details-card',
	templateUrl: './pokemon-details-card.component.html',
	styleUrls: ['./pokemon-details-card.component.scss'],
})
export class PokemonDetailsCardComponent implements OnChanges {
	@Input() pokemon: any;
	@Input() specie: any;

	public species: string = '';
	public height: string = '';
	public weight: string = '';
	public abilities: string = '';

	constructor() {}

	ngOnChanges(): void {
		this.loadPokemonDetails();
	}

	public loadPokemonDetails(): void {
		const height = String(this.pokemon.height);
		const weight = String(this.pokemon.weight);
		let sliceHeight = this.slice(height, height.length - 1, '.');
		let sliceWeight = this.slice(weight, weight.length - 1, '.');

		if (sliceHeight.indexOf('.') === 0) {
			sliceHeight = '0' + sliceHeight;
		}
		if (sliceWeight.indexOf('.') === 0) {
			sliceWeight = '0' + sliceWeight;
		}
		this.species = this.specie.genera.find((rec: any) => rec.language.name === 'en').genus;
		this.height = `${sliceHeight}`;
		this.weight = `${sliceWeight}`;
		this.abilities = this.pokemon.abilities.map((rec: any) => `${rec.ability.name}`).join(', ');
	}
	public slice(text: string, position: number, inc: string): string {
		return text.slice(0, position) + inc + text.slice(position);
	}
}
