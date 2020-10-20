import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslocoService } from '@ngneat/transloco';
import { AppComponent } from './app.component';
import { TranslocoRootModule } from './transloco/transloco-root.module';

export function preloadUser(transloco: TranslocoService) {
  return () => {
    transloco.setActiveLang('en');
    return transloco.load('en').toPromise();
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, TranslocoRootModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: preloadUser,
      deps: [TranslocoService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
