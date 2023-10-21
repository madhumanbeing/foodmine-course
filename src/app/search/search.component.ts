import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  private searchTerms = new Subject<string>();

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.searchTerm = params['searchTerm'];
        this.onSearchInputChange(); // Trigger the search when initializing the component with a search term
      }
    });

    this.searchTerms
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(term => {
          if (term || term === '') {
            // Navigate to the search route with the new search term
            this.router.navigateByUrl('/search/' + term);
          }
          // You can add additional logic here if needed
          return [];
        })
      )
      .subscribe();
  }

  onSearchInputChange(): void {
    this.searchTerms.next(this.searchTerm);
  }
}
