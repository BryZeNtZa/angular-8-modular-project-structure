import { Injectable } from '@angular/core';
import { environment as env } from '@env';

@Injectable({ providedIn: 'root' })
export class AppGlobalSettings {
    readonly appName: string = 'Acajou DSF';
    readonly serverURL: string = env.apiURL;
    readonly appAssetsPath: string = 'MyApplication/';
}
