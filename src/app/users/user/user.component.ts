import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/users.model';
import { loadUser } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public user: User;

  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>
    ) { }

  ngOnInit(): void {

    this.store.select('user').subscribe( ({user }) =>{
      this.user = user;
    })

    this.router.params.subscribe(({id}) => {
      this.store.dispatch( loadUser({id}) )
    })
  }

}
