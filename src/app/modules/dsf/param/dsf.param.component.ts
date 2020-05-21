import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-module-view',
  templateUrl: './dsf.param.component.html',
  styleUrls: ['./dsf.param.component.css']
})
export class DsfParamComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('Hello je suis DSF -> Param');
  }

}
