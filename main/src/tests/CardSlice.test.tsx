import reducer, { selectItem, unselectItem, CardsState } from '../store/cardsSlice';
import { Planet } from '../utils/types';

describe('cardsSlice', () => {
  const initialState: CardsState = {
    page: [],
    selectedCards: [],
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should select an item', () => {
    const planet: Planet = {
      name: 'Earth',
      diameter: '12742',
      rotation_period: '24',
      orbital_period: '365',
      climate: 'temperate',
      terrain: 'mountains',
      gravity: '1',
      population: '7800000000',
      surface_water: '71%',
      created: '2014-12-10T12:45:06.577Z',
    };
    const newState = reducer(initialState, selectItem(planet));
    expect(newState.selectedCards).toEqual([planet]);
  });

  it('should unselect an item', () => {
    const planet: Planet = {
      name: 'Earth',
      diameter: '12742',
      rotation_period: '24',
      orbital_period: '365',
      climate: 'temperate',
      terrain: 'mountains',
      gravity: '1',
      population: '7800000000',
      surface_water: '71%',
      created: '2014-12-10T12:45:06.577Z',
    };
    const stateWithSelectedItem = {
      ...initialState,
      selectedCards: [planet],
    };

    const newState = reducer(stateWithSelectedItem, unselectItem(planet));
    expect(newState.selectedCards).toEqual([]);
  });

  it('should not unselect an item that is not selected', () => {
    const planet1: Planet = {
      name: 'Earth',
      diameter: '12742',
      rotation_period: '24',
      orbital_period: '365',
      climate: 'temperate',
      terrain: 'mountains',
      gravity: '1',
      population: '7800000000',
      surface_water: '71%',
      created: '2014-12-10T12:45:06.577Z',
    };
    const planet2: Planet = {
      name: 'Alderaan',
      diameter: '12333',
      rotation_period: '24',
      orbital_period: '365',
      climate: 'tropical',
      terrain: 'mountains',
      gravity: '1',
      population: '7800000000',
      surface_water: '71%',
      created: '2014-12-10T12:45:06.577Z',
    };

    const stateWithSelectedItem = {
      ...initialState,
      selectedCards: [planet1],
    };

    const newState = reducer(stateWithSelectedItem, unselectItem(planet2));
    expect(newState.selectedCards).toEqual([planet1]);
  });
});
