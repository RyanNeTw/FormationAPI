let movies = [
  {
    id: '1',
    title: 'Oceans 8',
    category: 'Comedy',
    image: 'http://lorempixel.com/640/360'
  }, {
    id: '2',
    title: 'Midnight Sun',
    category: 'Comedy',
    image: 'http://lorempixel.com/640/360'
  }, {
    id: '3',
    title: 'Les indestructibles 2',
    category: 'Animation',
    image: 'http://lorempixel.com/640/360'
  }, {
    id: '4',
    title: 'Sans un bruit',
    category: 'Thriller',
    image: 'http://lorempixel.com/640/360'
  }, {
    id: '5',
    title: 'Creed II',
    category: 'Drame',
    image: 'http://lorempixel.com/640/360'
  }, {
    id: '6',
    title: 'Pulp Fiction',
    category: 'Thriller',
    image: 'http://lorempixel.com/640/360'
  }, {
    id: '7',
    title: 'Pulp Fiction',
    category: 'Thriller',
    image: 'http://lorempixel.com/640/360'
  }, {
    id: '8',
    title: 'Seven',
    category: 'Thriller',
    image: 'http://lorempixel.com/640/360'
  }, {
    id: '9',
    title: 'Inception',
    category: 'Thriller',
    image: 'http://lorempixel.com/640/360'
  }, {
    id: '10',
    title: 'Gone Girl',
    category: 'Thriller',
    image: 'http://lorempixel.com/640/360'
  },
]

export const getMovies = () => new Promise((resolve) => {
setTimeout(() => {
  resolve(movies)
}, 1000)
})
