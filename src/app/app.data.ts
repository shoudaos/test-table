import { Serial } from './app.interface';

export const Genres = {
  horror: 'dark-gray',
  drama: 'light-violet',
  crime: 'violet',
  tragedy: 'red',
  'dark comedy': 'gray',
};

export const serialsMock: Serial[] = [
  {
    name: 'The Terror',
    season: 3,
    networks: ['AMC'],
    genres: ['horror', 'drama'],
    premier: new Date(2019, 10, 20)
  },
  {
    name: 'Better Call Saul',
    season: 2,
    networks: ['AMC', 'Netflix'],
    genres: ['crime', 'tragedy'],
    premier: new Date(2017, 1, 25)
  },
  {
    name: 'Preacher',
    season: 5,
    networks: ['Hulu'],
    genres: ['drama', 'dark comedy'],
    premier: new Date(2016, 3, 15)
  },
  {
    name: 'Fleabag',
    season: 1,
    networks: ['HBO'],
    genres: ['horror', 'drama'],
    premier: new Date(2011, 12, 2)
  },
  {
    name: 'The Boys',
    season: 3,
    networks: ['Showtime'],
    genres: ['drama'],
    premier: new Date(2017, 5, 27)
  },
  {
    name: 'Watchmen',
    season: 4,
    networks: ['Amazon'],
    genres: ['dark comedy'],
    premier: new Date(2015, 5, 13)
  },
  {
    name: 'Russian Doll',
    season: 2,
    networks: ['HBO'],
    genres: ['horror'],
    premier: new Date(2019, 7, 7)
  },
  {
    name: 'Chernobyl',
    season: 6,
    networks: ['Kinopoisk', 'Amazon'],
    genres: ['horror', 'crime'],
    premier: new Date(2013, 8, 17)
  },
  {
    name: 'Mindhunter',
    season: 2,
    networks: ['IVI'],
    genres: ['crime', 'drama'],
    premier: new Date(2013, 9, 29)
  },
  {
    name: 'Homecoming',
    season: 4,
    networks: ['Megogo'],
    genres: ['tragedy', 'dark comedy'],
    premier: new Date(2015, 1, 22)
  },
];
