import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import our routing module
import { AppRoutingModule } from './routing/app.routing.module';

// Import our translation module
import { AppI18nModule } from '@app/i18n/app.i18n.module';

// Import our http interceptors
import { appTokenInterceptor } from './http/interceptors/app.token.interceptor';
import { appFakeBackendProvider } from './http/interceptors/app.fake-backend.interceptor';
import { appErrorInterceptor } from './http/interceptors/app.error.interceptor';

// Import our routes guards
import { AppAuthGuard } from './guards/app.auth.guard';
import { AppNoAuthGuard } from './guards/app.no-auth.guard';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    AppI18nModule
  ],
  exports: [
    CommonModule,
    AppRoutingModule,
    AppI18nModule
  ]
})
export class AppCoreModules {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppCoreModules,
      providers: [
        appFakeBackendProvider,
        appErrorInterceptor,
        appTokenInterceptor,
        AppAuthGuard,
        AppNoAuthGuard
      ]
    };
  }
}
