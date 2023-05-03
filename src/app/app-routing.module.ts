import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/pokemons',
		pathMatch: 'full',
	},
	{
		path: 'pokemons',
		loadChildren: () =>
			import('./pages/pokemons/pokemons.module').then((m) => m.PokemonsModule),
	},
	{
		path: 'pokemons/:pokemon',
		loadChildren: () => import('./pages/pokemon/pokemon.module').then((m) => m.PokemonModule),
	},
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
