import { Pipe, PipeTransform } from '@angular/core';
import { PokemonFormattingService } from '../services';

@Pipe({
	name: 'capitalizeAllText',
})
export class CapitalizeAlTextPipe implements PipeTransform {
	constructor(private format: PokemonFormattingService) {}

	transform(text: string): string {
		return this.format.getFormattedPokemonName(text);
	}
}
