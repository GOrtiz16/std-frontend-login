import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcatSymbolPipe } from '../helpers/concatSymbol.pipe';

@NgModule({
  declarations: [ConcatSymbolPipe],
  imports: [CommonModule],  
  exports: [ConcatSymbolPipe] 
})
export class SharedModule {}
