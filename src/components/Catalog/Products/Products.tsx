import Close from 'assets/svg/ei_close.svg?react';
import Card from 'components/Shared/Card';
import { Container } from 'components/Shared/Shared.styled';
import {
  ICategory,
  IFilterSection,
  IProduct,
  ISort,
} from 'components/Shared/types';
import Select from 'components/ui/Select';
import { IFilters } from 'pages/Catalog';
import { Dispatch } from 'react';
import Filter from './Filter';
import {
  Category,
  CategoryPanel,
  Gallery,
  ProductsBox,
  ProductsList,
  SelectBox,
  SelectedCategories,
} from './Products.styled';

interface IProductsProps {
  selectedCategories: ICategory[];
  setSelectedCategories: (category: ICategory) => void;
  handleSelect: (value: ISort) => void;
  sortList: ISort[];
  sortState: ISort;
  filters: IFilterSection[];
  filterState: IFilters;
  setFilterState: Dispatch<React.SetStateAction<IFilters>>;
  products: IProduct[];
}

const Products = ({
  selectedCategories = [],
  setSelectedCategories,
  handleSelect,
  sortList,
  sortState,
  filters,
  filterState,
  setFilterState,
  products,
}: IProductsProps) => {
  return (
    <Container>
      <ProductsBox>
        <CategoryPanel>
          <SelectedCategories>
            {selectedCategories.map(category => (
              <Category
                key={category.id}
                onClick={() => setSelectedCategories(category)}
              >
                <span>{category.title}</span> <Close />
              </Category>
            ))}
          </SelectedCategories>

          <SelectBox>
            <Select
              items={sortList.filter(({ id }) => id !== sortState.id)}
              selected={sortState}
              onSelect={handleSelect}
            />
          </SelectBox>
        </CategoryPanel>

        <Gallery>
          <Filter
            filters={filters}
            filterState={filterState}
            setFilterState={setFilterState}
          />

          <ProductsList>
            {products.map(item => (
              <Card key={item.id} {...item} />
            ))}
          </ProductsList>
        </Gallery>
      </ProductsBox>
    </Container>
  );
};

export default Products;
