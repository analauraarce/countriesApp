import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {


  private apiUrl: string = 'https://restcountries.com/v3.1 '; //https://restcountries.com/v3.1/name

  get httpParams(){
    return new HttpParams().set('fields','name,capital,flags,population,cca2');
  }

  constructor(private http: HttpClient) { }

  searchCountry(term: string): Observable<Country[]> {
    // console.log(term);
    //console.log('punto 2');
    // const url=`${this.apiUrl}/name/${term}`; 
    const url = `https://restcountries.com/v3.1/name/${term}`; //works
    //const url=`${this.apiUrl}/name/${term}`;
    //const url='https://restcountries.com/v3.1/name/venezuela';
    // console.log('punto 3');
    return this.http.get<Country[]>(url,{params:this.httpParams});
  }
  searchCapital(term: string): Observable<Country[]> {
    const url = `https://restcountries.com/v3.1/capital/${term}`; 
    return this.http.get<Country[]>(url,{params:this.httpParams});
  }

  getCountryByAlpha(id: string): Observable<Country> {
    const url = `https://restcountries.com/v2/alpha/${id}`; 
    return this.http.get<Country>(url);
  }

  searchRegion(region:string):Observable<Country[]> {
  
    const url = `https://restcountries.com/v3.1/region/${region}`;
    return this.http.get<Country[]>(url,{params:this.httpParams})
    .pipe(
      tap(console.log)
    )
  }
}
