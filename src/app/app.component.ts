import { Component, OnInit } from '@angular/core';
import { Genres, serialsMock } from './app.data';
import { Filters, Serial, SortOptions } from './app.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  allSerials: Serial[] = [];
  filteredSerials: Serial[] = [];
  sortedSerials: Serial[] = [];
  serials: Serial[] = [];
  filters: Filters = {
    name: '',
    genre: '',
    premier: ''
  };

  sortOptions: SortOptions = {
    field: '',
    order: 'asc'
  };

  genreTypes = Genres;
  years: number[] = [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];

  page = 1;

  perPageVariants: number[] = [4, 7, 10];
  perPage = null;

  constructor() {
    this.perPage = this.perPageVariants[0];
    this.allSerials = this.getAllSerials();
    this.sortedSerials = [...this.allSerials];
  }

  ngOnInit(): void {
    this.getSerials();
  }

  getAllSerials(): Serial[] {
    return serialsMock;
  }

  getSerials(): void {
    this.filteredSerials = [...this.sortedSerials];
    Object.keys(this.filters).map(key => {
      this.filteredSerials = this.filteredSerials.filter((serial) => {
        if (this.filters[key]) {
          switch (key) {
            case 'name':
              return new RegExp(this.filters.name.toLowerCase()).test(serial.name.toLowerCase());
              break;
            case 'genre':
              return serial.genres.indexOf(this.filters.genre) >= 0;
              break;
            case 'premier':
              return new Date(serial.premier).getFullYear() === +this.filters.premier;
              break;
          }
        } else {
          return true;
        }
      });
    });

    const pages = this.pages;
    if (pages < this.page) {
      this.page = pages;
    }
    const start: number = (this.page - 1) * this.perPage;
    this.serials = this.filteredSerials.slice(start, start + this.perPage);
  }

  sortSerials(field): void {
    if (this.sortOptions.field === field) {
      this.sortedSerials.reverse();
      this.sortOptions.order = this.sortOptions.order === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortOptions.field = field;
      this.sortOptions.order = 'asc';
      this.sortedSerials.sort((a, b) => {
        if (field === 'networks') {
          const first: string[] = [...a[field]];
          const second: string[] = [...b[field]];
          return this.sortFn(first.sort()[0], second.sort()[0]);
        }
        return this.sortFn(a[field], b[field]);
      });
    }
    this.getSerials();
  }

  goToPage(page): void {
    this.page = page;
    this.getSerials();
  }

  changePerPage(value): void {
    this.perPage = value;
    this.getSerials();
  }

  counter(pages: number): number[] {
    return new Array(pages);
  }

  filterSerials(): void {
    this.getSerials();
  }

  get pages(): number {
    return Math.ceil(this.filteredSerials.length / this.perPage) || 1;
  }

  private sortFn(a: string | number, b: string | number): number {
    if (typeof a === 'string' && typeof b === 'string') {
      a = a.toLowerCase();
      b = b.toLowerCase();
    }
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  }
}
