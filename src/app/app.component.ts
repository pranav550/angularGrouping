import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularGrouping';

  countryDetails:any=[
    {
      'country':'India',
      'people':[
        {
          'name':'aaaa'
        },
        {
          'name':'bbbbbb'
        },
        {
          'name':'ccccccc'
        }
      ]
    },

    {
      'country':'Uk',
      'people':[
        {
          'name':'ABC'
        },
        {
          'name':'PQR'
        },
        {
          'name':'XYZ'
        }
      ]
    },
    
  ]
}
