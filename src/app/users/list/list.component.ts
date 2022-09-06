import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/users.model';
import { AppState } from 'src/app/store/app.reducers';
import { loadUsers } from '../../store/actions/users.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public users: User[] = [];
  public loading: boolean = false;
  public error: any;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.select('users').subscribe( ({ users, loading, error }) => {
        this.users = users;
        this.loading = loading;
        this.error = error;
    })


    this.store.dispatch( loadUsers() );

  }

}
