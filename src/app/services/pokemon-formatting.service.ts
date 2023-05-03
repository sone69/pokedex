import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class PokemonFormattingService {
	constructor() {}

	getFormattedPokemonName(text: string = ''): string {
		return text
			.replace(/-/g, ' ')
			.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
	}
}
