import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

import { MatTableDataSource } from '@angular/material/table/table-data-source';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {
  public displayedColumns: string[] = ['id', 'role', 'firstName', 'lastName', 'aamount'];
  public dataSource: MatTableDataSource<Customer>;
  public customerTotal: number;
  public noData: boolean;
  public error$: Observable<boolean>;

  constructor(public store: Store<GlobalState>) { }

  public ngOnInit(): void {
    this.loadCustomers();
  }

  public ngOnDestroy(): void { }

  public retry(): void { 
    this.loadCustomers();
  }

}