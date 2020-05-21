import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, ApplicationRef, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader, MissingTranslationHandler} from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

// Import Store utilities for lazy modules independent translation, etc.
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Import our custom Dependencies Injector and missing translations handler
import { AppServiceLocator } from '@app/services/app.service.locator';
import { AppMissingTranslationHelper } from '@shared/helpers/app.missing.translation';

// Import Core and Shared modules
import { AppCoreModules } from '@app/app.core.modules';
import { AppSharedModules } from '@shared/app.shared.modules';

// App modules
import { AppModules } from '@modules/app.modules';

// App root component
import { AppRootComponent } from '@shared/layouts/root/app.root.component';

import { AppI18nModule } from '@app/i18n/app.i18n.module';
import { metaReducers, ROOT_REDUCERS } from '@app/routing/reducers';

// a grid Module for datables display
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';

export let appTranslationHelper = {
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory2,
      deps: [HttpClient]
    },
    missingTranslationHandler: {
      provide: MissingTranslationHandler,
      useClass: AppMissingTranslationHelper
    },
    isolate: true, // For lazy modules indepent translation
    defaultLanguage: 'fr'
  };

@NgModule({
  declarations: [AppRootComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    AppI18nModule,
    TranslateModule.forRoot(appTranslationHelper),
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true
      }
    }),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal
    }),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Book Store App'
    }),
    AppCoreModules.forRoot(),
    AppSharedModules.forRoot(),
    AgGridModule.withComponents([]),
    AppModules,
  ],
  exports: [],
  // providers: [appFakeBackendProvider],
  entryComponents: [AppRootComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

    constructor(private injector: Injector) {}

    // Bootstrap the application with the ngBootstrap
    ngDoBootstrap(applicationRef: ApplicationRef) {

      // Set the application custom DI injector
      AppServiceLocator.setInjector(this.injector);

      // Launch the application root component
      applicationRef.bootstrap(AppRootComponent);
    }
}

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    {prefix: '../assets/i18n/shared/', suffix: '.json'},
  ]);
}

// Provide loading location for the main module translations
export function HttpLoaderFactory2(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/shared/', '.json');
}

// required for AOT compilation
export function HttpLoaderFactory1(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
