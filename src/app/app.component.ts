import { Component } from '@angular/core';
import { translate, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = translate('HELLO_WORLD'); // bug appears
  // title = this.translateService.translate('HELLO_WORLD'); // bug does not appear, but key is not translated
  constructor(private translateService: TranslocoService) {}
}
