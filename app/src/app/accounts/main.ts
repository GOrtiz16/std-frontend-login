import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AccountsModule } from './accounts.module';

platformBrowserDynamic()
  .bootstrapModule(AccountsModule)
  .catch(err => console.error(err));
