import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Imports all the widgets
import { AppSnackBarComponent } from '@shared/widgets/snackbar/app.snackbar.widget';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
    AppSnackBarComponent
  ],
  providers: [
    AppSnackBarComponent
  ],
  exports: [
    AppSnackBarComponent
  ]
})
export class AppWidgetsModule {
  /*static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppWidgetsModule,
      providers: [
        AppSnackBarComponent,
      ]
    };
  }*/
}
