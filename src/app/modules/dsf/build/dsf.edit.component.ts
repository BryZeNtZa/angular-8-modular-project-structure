import {
    Component,
    ViewChild,
    OnInit,
    ElementRef,
    ChangeDetectorRef,
    Input
  } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import * as fromI18n from '@app/i18n/reducers';

@Component({
  selector: 'app-dsf-edit',
  templateUrl: './dsf.edit.component.html',
  styleUrls: ['./dsf.edit.component.css']
})
export class DsfEditComponent implements OnInit {

  @Input() datas;

  constructor(
    private router: Router,
    private el: ElementRef,
    readonly store: Store<fromI18n.State>,
    readonly translate: TranslateService,
    private ref: ChangeDetectorRef,
    public activeModal: NgbActiveModal,
    private modalService: NgbModal
  ) {
    translate.setDefaultLang('fr');
  }

  ngOnInit() {
    console.log('Hello je suis DSF -> Build');
  }


}
