import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
     li{cursor:pointer;} 
    `
  ]

})
export class ByCountryComponent {

  term: string = "";
  errorFlag: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  showSuggestion:boolean=false;
  constructor(private countryService: CountryService) { }
  search(term: string) {
    this.showSuggestion=false;
    this.errorFlag = false;
    this.term = term;

    //console.log('punto 1');
    this.countryService.searchCountry(this.term)
      .subscribe({
        next: (ans) =>
          this.countries = ans,
        //console.log(ans),
        error: () =>
          this.errorFlag = true
      });
    // console.log('punto 4');
  }

  suggestions(term: string) {
    this.errorFlag = false;
    this.term = term;
    this.showSuggestion=true;
    this.countryService.searchCountry(term)
    .subscribe({
      next: (ans) =>
        this.suggestedCountries = ans.splice(0,3),
      error: () =>
        this.suggestedCountries = []
    });
  }

  searchSuggested(term:string){
    this.search(term);    
  }
}
