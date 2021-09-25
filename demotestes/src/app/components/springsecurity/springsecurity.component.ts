import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SpringsecurityService } from '../../services/springsecurity.service';

@Component({
  selector: 'app-springsecurity',
  templateUrl: './springsecurity.component.html',
  styleUrls: ['./springsecurity.component.css']
})
export class SpringsecurityComponent implements OnInit {
  hello$: Observable<String>;
  constructor(private service: SpringsecurityService) {
    this.hello$ = of('');
  }

  ngOnInit(): void {
    this.hello$ = this.service.getAloAuth('admin', 'password');
  }

}
