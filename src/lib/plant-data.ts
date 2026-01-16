import placeholderImages from './placeholder-images.json';

export const plants = [
  {
    id: 1,
    name: 'Basil',
    species: 'Ocimum basilicum',
    daysOld: 25,
    health: 'Healthy',
    stage: 'Vegetative',
    image: placeholderImages.plants[0],
  },
  {
    id: 2,
    name: 'Mint',
    species: 'Mentha spicata',
    daysOld: 42,
    health: 'Needs Water',
    stage: 'Flowering',
    image: placeholderImages.plants[1],
  },
  {
    id: 3,
    name: 'Lettuce',
    species: 'Lactuca sativa',
    daysOld: 18,
    health: 'Healthy',
    stage: 'Seedling',
    image: placeholderImages.plants[2],
  },
  {
    id: 4,
    name: 'Cherry Tomato',
    species: 'Solanum lycopersicum var. cerasiforme',
    daysOld: 55,
    health: 'Needs Nutrients',
    stage: 'Fruiting',
    image: placeholderImages.plants[3],
  },
];
