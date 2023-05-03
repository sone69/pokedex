import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from 'src/app/global.module';
import { CapitalizeAlTextPipe } from './capitalize-all-text.pipe';

@NgModule({
	declarations: [CapitalizeAlTextPipe],
	imports: [CommonModule, GlobalModule],
	exports: [CapitalizeAlTextPipe],
})
export class PipesModule {}
