import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ConsolidatedPositionModule } from './consolidated-position.module';

platformBrowserDynamic()
  .bootstrapModule(ConsolidatedPositionModule)
  .catch(err => console.error(err));
