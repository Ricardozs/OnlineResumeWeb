import { Component, OnInit } from '@angular/core';
import { GridSizeChangedEvent } from 'ag-grid-community';
import * as moment from 'moment';
@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {
  gridApi;
  gridColumnApi;
  defaultColDef;
  columnDefs;
  rowData = [];

  constructor() { 
    this.columnDefs = [
      {
        headerName: "ID", field: 'id'
      },
      {
        headerName: "Certificate", field: 'certificate', cellRenderer: function(params){
          return `<a href='./assets/certificates/${params.value.replace(/\s/g, "_").replace(/#/g, "")}.pdf' download='${params.value}.pdf'>`+params.value+"</a>"
        }
      },
      {
        headerName: "Date", field: 'date', valueFormatter: (data) => moment(data.value).format('MMM/YYYY')
      },
      {
        headerName:"Institution", field: 'institution'
      }
    ]
    this.defaultColDef = { filter: true, sortable: true };

  }

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
    this.gridColumnApi = params.columnApi;
    //TODO: Fetch data from an API
    this.rowData = [
      {
        id:1, certificate:"VirtualBox", date: new Date(2018, 1, 3), institution:"udemy"
      },
      {
        id:2, certificate:"Microsoft Programing in C# 70-483", date:this.test(new Date(2019, 11, 18)), institution:'udemy'
      }
    ]
  }
  onGridSizeChanged(params: GridSizeChangedEvent) {
    params.api.sizeColumnsToFit();
  }

  test(params) {
    return 
  }

}
