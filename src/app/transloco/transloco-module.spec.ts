import { TranslocoConfig, TranslocoTestingModule } from '@ngneat/transloco';
import en from '../../assets/i18n/en.json';

export function getTranslocoModule(config: Partial<TranslocoConfig> = {}) {
  return TranslocoTestingModule.withLangs(
    { en },
    {
      availableLangs: ['en'],
      defaultLang: 'en',
      ...config
    }
  );
}
