import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';

import { HttpService } from './services';
import { PokemonService } from './services/pokemon.service';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [],
	imports: [
		FormsModule,
		CommonModule,
		HttpClientModule,

		MatIconModule,
		MatToolbarModule,
		MatListModule,
		MatSidenavModule,
		MatButtonModule,
		MatMenuModule,
		MatInputModule,
		MatFormFieldModule,
		MatTooltipModule,
		MatCardModule,
		MatDialogModule,
		MatStepperModule,
		MatGridListModule,
		MatSnackBarModule,
		MatBadgeModule,
		MatProgressBarModule,
		MatPaginatorModule,
	],
	exports: [
		FormsModule,

		MatIconModule,
		MatToolbarModule,
		MatListModule,
		MatSidenavModule,
		MatButtonModule,
		MatMenuModule,
		MatInputModule,
		MatFormFieldModule,
		MatTooltipModule,
		MatCardModule,
		MatDialogModule,
		MatGridListModule,
		MatSnackBarModule,
		MatBadgeModule,
		MatProgressBarModule,
		MatPaginatorModule,
	],
	providers: [HttpService, PokemonService],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	bootstrap: [],
})
export class GlobalModule {}
