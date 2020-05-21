import { IBrowserData } from '@entity/model/browserData/IBrowserData';

export interface IBankBrowserData extends IBrowserData {
   // Name of the unit
   name: string;
   // Adresse of the business unit
   address: string;
   // Phone number
   phone: string;
}
