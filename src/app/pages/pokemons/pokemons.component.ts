import {
	AfterViewInit,
	Component,
	OnDestroy,
	OnInit,
	ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import {
	debounceTime,
	map,
	merge,
	of,
	startWith,
	Subject,
	Subscription,
	switchMap,
	tap,
} from 'rxjs';
import { HttpService } from 'src/app/services';

@Component({
	selector: 'app-pokemons',
	templateUrl: './pokemons.component.html',
	styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent implements OnInit, OnDestroy, AfterViewInit {
	pokemons: any[] = [];
	types: any[] = [];
	options: string[] = [
		'all',
		'type',
		'normal',
		'fire',
		'water',
		'electric',
		'grass',
		'ice',
		'fighting',
		'poison',
		'ground',
		'flying',
		'psychic',
		'bug',
		'rock',
		'ghost',
		'dragon',
		'dark',
		'steel',
		'fairy',
	];

	public filterSubject: Subject<void> = new Subject();
	public filterStr = '';
	public filterType = '';
	activeType = '';

	private subscription = new Subscription();

	@ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

	public pageSize: number = 20;
	public pageIndex: number = 0;
	public length: number = 0;

	constructor(private http: HttpService) {}

	ngAfterViewInit(): void {
		const filterChange$ = this.filterSubject.pipe(debounceTime(500));
		const changesEvent$ = merge(filterChange$).pipe(
			tap(() => (this.paginator.pageIndex = 0))
		);

		this.subscription = merge(changesEvent$, this.paginator.page)
			.pipe(
				startWith({}),
				switchMap(() =>
					this.http
						.getPokemons(100000, 0)
						.pipe(
							map((data) => (!data.results ? [] : data.results))
						)
				),
				switchMap((results) => {
					const filterRes = this.filterPokemon(
						this.filterStr,
						this.activeType,
						results
					);
					this.length = filterRes.length;
					return of(
						filterRes.slice(
							this.pageIndex * this.pageSize,
							(this.pageIndex + 1) * this.pageSize
						)
					);
				})
			)
			.subscribe((results) => {
				this.pokemons = results;
			});
	}
	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
	ngOnInit(): void {
		this.http.getPokemonTypes('').subscribe((data) => {
			this.types = data.results;
		});
	}
	handlePageEvent(event: PageEvent): void {
		this.length = event.length;
		this.pageSize = event.pageSize;
		this.pageIndex = event.pageIndex;
	}
	filterPokemon(search: string, type: string, pokemons: any[]): any[] {
		return pokemons.filter((result: any) => {
			const nameMatch = String(result.name)
				.toLowerCase()
				.replace('-', ' ')
				.includes(search.toLowerCase());
			const typeMatch =
				type === 'all' ||
				type === 'type' ||
				type === 'normal' ||
				type === 'fire' ||
				type === 'water' ||
				type === 'electric' ||
				type === 'grass' ||
				type === 'ice' ||
				type === 'fighting' ||
				type === 'poison' ||
				type === 'ground' ||
				type === 'flying' ||
				type === 'psychic' ||
				type === 'bug' ||
				type === 'rock' ||
				type === 'ghost' ||
				type === 'dragon' ||
				type === 'dark' ||
				type === 'steel' ||
				type === 'fairy' ||
				(result.types &&
					result.types.some((t: any) => t.type.name === type));
			return nameMatch && typeMatch;
		});
	}
	public setActiveType(type: string) {
		this.activeType = type;
		this.filterSubject.next();
	}
	public getActiveType(type: string) {
		this.activeType = type;
		this.http.setActiveType(type);
	}
}
