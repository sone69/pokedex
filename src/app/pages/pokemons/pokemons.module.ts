import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsComponent } from './pokemons.component';
import { GlobalModule } from 'src/app/global.module';
import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
	declarations: [PokemonsComponent, PokemonCardComponent],
	imports: [
		CommonModule,
		PokemonsRoutingModule,
		GlobalModule,
		PipesModule,
		MatSelectModule,
	],
})
export class PokemonsModule {}
