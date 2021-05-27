import cars from '../../assets/cars.json';
import {FilterableTable} from '../../components';

const MainLayout = (props) => {
  return (
    <FilterableTable data={cars} />
  );
}

export default MainLayout;
