// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';
// import { loadAsset } from './app/helpers/asset-loader.helper';

// loadAsset(`styles.css`);

// platformBrowserDynamic().bootstrapModule(AppModule,{ngZone:(window as any).ngZone})
//   .catch(err => console.error(err));

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ConsolidatedPositionModule } from './app/consolidated-position/consolidated-position.module';

platformBrowserDynamic()
  .bootstrapModule(ConsolidatedPositionModule)
  .catch(err => console.error(err));
