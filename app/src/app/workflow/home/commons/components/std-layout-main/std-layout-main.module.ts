import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StdHomeSidebarModule } from '../std-home-sidebar/std-home-sidebar.module';
import { StdHomeHeaderModule } from '../std-home-header/std-home-header.module';
import { StdHomeFooterModule } from '../std-home-footer/std-home-footer.module';
import { StdHomeSecurityModule } from '../std-home-security/std-home-security.module';

import { StdLayuotComponent } from './std-layout-main.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [StdLayuotComponent],
  imports: [CommonModule, StdHomeSidebarModule, StdHomeHeaderModule, StdHomeFooterModule, StdHomeSecurityModule],
  exports: [StdLayuotComponent]
})
export class StdLayutMainModule {}
