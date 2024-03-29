import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html'
  
})
export class ByCapitalComponent {



  term: string = "";
  errorFlag: boolean = false;
  countries:Country[]=[];
  constructor(private countryService: CountryService) { }
  search(term:string) {
    this.errorFlag = false;
    this.term=term;
    
    //console.log('punto 1');
    this.countryService.searchCapital(this.term)
      .subscribe({
        next: (ans) =>
         this.countries=ans,
          //console.log(ans),
        error: () =>
          this.errorFlag = true
      });
    // console.log('punto 4');
  }

  
}
