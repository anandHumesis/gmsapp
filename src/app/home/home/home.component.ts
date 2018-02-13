
import { Component, OnInit } from '@angular/core';

import { Logger } from './../../shared/services/logger.service';

import { Observable } from 'rxjs/Observable';

import { ActivatedRoute } from '@angular/router';


const log = new Logger('home');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  defaultCategory = 'General';

  queryParam$:    Observable<any>;

  errMsg: string;

  constructor(
    private route: ActivatedRoute,
  ) { }


  ngOnInit() {
    log.debug('Home initialized');
  }


}
