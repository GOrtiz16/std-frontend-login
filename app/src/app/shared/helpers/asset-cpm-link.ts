//
/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Constructor } from '@utils/types/constructor.type';
import { environment } from 'environments/environment';

export function AssetLink<TBase extends Constructor>(Base: TBase = class {} as any) {
  return class extends Base {
    asset(url: string) {
      return `${environment.cdn}/${url}`;
    }
  };
}
