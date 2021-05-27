import {Container} from '@material-ui/core';
import {SearchBar, TableUI, FilterPanel} from '../../components';
import React from 'react';
import {createFilter, filterByRange} from '../../utils';

const FilterableTable = (props) => {

  const [data, setData] = React.useState([...props.data]);
  const [yearRange, setYearRange] = React.useState([1990, 2025]);
  const [priceRange, setPriceRange] = React.useState([0, 200000]);

  const [filterParams, setFilterParams] = React.useState({
    brand: [],
    fuel: [],
    bodyType: []
  });

  const applyFilters = () => {
    let filteredData = [...props.data];
    for (const filter in filterParams) {
      if (filterParams[filter].length > 0) {
        filteredData = createFilter(filter)(filteredData, filterParams[filter]);
      }
    }
    filteredData = filterByRange(priceRange, filteredData, 'price');
    filteredData = filterByRange(yearRange, filteredData, 'year');
    return filteredData;
  }

  const handleChange = (type, value) => {
    const index = filterParams[type].indexOf(value);

    if (index === -1) {
      setFilterParams({...filterParams, [type]: [...filterParams[type], value]});

    } else {
      filterParams[type].splice(index, 1);
      setFilterParams({...filterParams, [type]: [...filterParams[type]]});
    }
  }

  const handleInputChange = (text) => {
    const searchData = [...props.data];

    return searchData.filter(el => (
      el.model.toLowerCase().indexOf(text.toLowerCase()) > -1 ||
      el.brand.toLowerCase().indexOf(text.toLowerCase()) > -1
    ))
  }

  return (
    <Container maxWidth='md'>
      <SearchBar
        onInputTextChange={text => setData(handleInputChange(text))}
      />
      <FilterPanel
        filtersFor={{
          brand: ['AvtoVAZ', 'Volvo', 'Audi', 'Porsche', 'Mitsubishu'],
          fuel: ['Diesel', 'Petrol', 'Hybrid', 'Electric'],
          bodyType: ['MPV', 'SUV', 'Pickup', 'Hatchback', 'Cabrio']
        }}
        onChange={(type, value) => handleChange(type, value)}
        onApplyFilter={() => setData(applyFilters())}
        sliderYearRange={yearRange}
        onYearChange={(range) => setYearRange(range)}

        sliderPriceChange={priceRange}
        onPriceChange={(range) => setPriceRange(range)}
      />
      <TableUI cars={data} />
    </Container>
  );
}

export default FilterableTable;
