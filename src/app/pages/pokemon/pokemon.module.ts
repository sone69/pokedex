import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from 'src/app/global.module';
import { PokemonComponent } from './pokemon.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonImageCardComponent } from './pokemon-image-card/pokemon-image-card.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { PokemonDetailsCardComponent } from './pokemon-details-card/pokemon-details-card.component';

@NgModule({
	declarations: [PokemonComponent, PokemonImageCardComponent, PokemonDetailsCardComponent],
	imports: [CommonModule, PokemonRoutingModule, GlobalModule, PipesModule],
})
export class PokemonModule {}
