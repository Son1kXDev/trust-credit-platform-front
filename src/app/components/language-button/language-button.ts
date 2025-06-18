import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-button',
  imports: [TranslateModule],
  templateUrl: './language-button.html',
  standalone: true,
  styleUrl: './language-button.css',
})
export class LanguageButton {
  currentLang: string;
  protected readonly langs;

  constructor(private translate: TranslateService) {
    this.currentLang =
      translate.currentLang || translate.getDefaultLang() || 'en';
    this.langs = translate.getLangs();
  }

  protected changeLanguage(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const lang = selectElement.value;
    this.currentLang = lang;
    this.translate.use(lang);
  }
}
