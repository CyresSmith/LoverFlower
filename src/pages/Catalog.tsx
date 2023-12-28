import CatalogBackground from 'components/Catalog/CatalogBackground';
import CatalogHero from 'components/Catalog/CatalogHero';
import Products from 'components/Catalog/Products';
import { ICategory, IFilterSection, IProduct } from 'components/Shared/types';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const sortList: ICategory[] = [
  { title: 'По популярности', id: 'popular' },
  { title: 'По цене', id: 'price' },
  { title: 'По дате', id: 'date' },
];

const products: IProduct[] = [
  {
    id: 1,
    name: 'лучший день',
    price: 1260,
    discount: 5,
    image:
      'https://buketland.ua/image/cache/catalog/flowers/mart2021/buket-tsvetov-yedinstvennaya-030286-2-800x800.jpg',
    createdAt: '2023-12-21',
    tags: ['rose'],
  },
  {
    id: 2,
    name: 'лучший день',
    price: 950,
    discount: 0,
    image:
      'https://buketland.ua/image/cache/catalog/flowers/mart2021/buket-tsvetov-yedinstvennaya-030286-2-800x800.jpg',
    createdAt: '2023-12-24',
    tags: ['rose'],
  },
  {
    id: 3,
    name: 'лучший день',
    price: 1950,
    discount: 10,
    image:
      'https://buketland.ua/image/cache/catalog/flowers/mart2021/buket-tsvetov-yedinstvennaya-030286-2-800x800.jpg',
    createdAt: '2023-11-24',
    tags: ['rose'],
  },
  {
    id: 4,
    name: 'лучший день',
    price: 250,
    discount: 0,
    image:
      'https://buketland.ua/image/cache/catalog/flowers/mart2021/buket-tsvetov-yedinstvennaya-030286-2-800x800.jpg',
    createdAt: '2023-12-10',
    tags: ['rose'],
  },
  {
    id: 5,
    name: 'лучший день',
    price: 1250,
    discount: 0,
    image:
      'https://buketland.ua/image/cache/catalog/flowers/mart2021/buket-tsvetov-yedinstvennaya-030286-2-800x800.jpg',
    createdAt: '2023-12-12',
    tags: ['rose'],
  },
  {
    id: 6,
    name: 'лучший день',
    price: 1450,
    discount: 0,
    image:
      'https://buketland.ua/image/cache/catalog/flowers/mart2021/buket-tsvetov-yedinstvennaya-030286-2-800x800.jpg',
    createdAt: '2023-12-16',
    tags: ['rose'],
  },
];

const filters: IFilterSection[] = [
  {
    title: 'По свету',
    sectionId: 'light',
    filters: [
      { id: 'gentle', title: 'нежные' },
      { id: 'bright', title: 'яркие' },
    ],
  },
  {
    title: 'По цвету',
    sectionId: 'color',
    filters: [
      { id: 'white', title: 'белый' },
      { id: 'yellow', title: 'желтый' },
      { id: 'green', title: 'зеленый' },
      { id: 'red', title: 'красный' },
      { id: 'orange', title: 'оранжевый' },
      { id: 'pink', title: 'розовый' },
      { id: 'blue', title: 'синий' },
    ],
  },
  {
    title: 'По формату',
    sectionId: 'format',
    filters: [
      { id: 'bouquet', title: 'букет' },
      { id: 'vase', title: 'в вазе' },
      { id: 'envelope', title: 'в конверте' },
      { id: 'basket', title: 'в корзине' },
      { id: 'hatbox', title: 'в шляпной коробке' },
      { id: 'case', title: 'в ящике' },
    ],
  },
  {
    title: 'по цветку',
    sectionId: 'flowers',
    filters: [
      { id: 'alstroemeria', title: 'альстромерия' },
      { id: 'anthurium', title: 'Антуриум' },
      { id: 'asparagus', title: 'Аспарагус' },
      { id: 'astilbe', title: 'Астильба' },
      { id: 'astrantia', title: 'Астранция' },
    ],
  },
];

const categories: ICategory[] = [
  { title: 'Букеты из гипсофил', id: 'gypsophila-bouquets' },
  { title: 'Букеты из ромашек', id: 'daisies-bouquets' },
  { title: 'Букеты из ромашек', id: 'chrysanthemums-bouquets' },
  { title: 'Комнатные цветы в горшках', id: 'indoor-flowers' },
  { title: 'Монобукеты', id: 'monobouquets' },
  { title: 'Сборные букеты', id: 'composite-bouquets' },
  { title: 'Букет на праздник', id: 'holiday-bouquets' },
  { title: 'Композиции из цветов', id: 'flower-arrangements' },
  { title: 'Конверты', id: 'envelopes' },
  { title: 'Открытки', id: 'postcards' },
  { title: 'Подарки', id: 'present' },
  { title: 'Букеты из сухоцветов', id: 'dried-bouquets' },
  { title: 'Шары', id: 'balls' },
  { title: 'Популярное', id: 'popular' },
  { title: 'Букеты роз', id: 'roses-bouquets' },
  { title: 'Цветы на похороны', id: 'funerals' },
  { title: 'Упаковка подарков', id: 'gift-wrapping' },
];

export interface IFilters {
  [section: string]: string;
}

const Catalog = () => {
  const [sortState, setSortState] = useState<ICategory>(sortList[0]);
  const [selectedCategories, setSelectedCategories] = useState<ICategory[]>([]);
  const [filterState, setFilterState] = useState<IFilters>({});
  const [searchParams, setSearchParams] = useSearchParams({});

  const handleSelectedCategoryClick = (item: ICategory) => {
    setSelectedCategories(prev => prev.filter(({ id }) => id !== item.id));
  };

  const handleSelect = (item: ICategory) => {
    setSortState(item);
  };

  useEffect(() => {
    const params: IFilters = {
      sort: sortState.id,
      ...filterState,
    };

    if (selectedCategories.length) {
      params.categories = selectedCategories.map(item => item.id).join('|');
    }

    setSearchParams(params);
  }, [filterState, selectedCategories, setSearchParams, sortState.id]);

  useEffect(() => {
    if (searchParams.size > 0) {
      searchParams.forEach((value, key) => {
        if (key === 'sort') {
          setSortState(sortList[sortList.findIndex(({ id }) => id === value)]);
        }

        if (key === 'categories') {
          setSelectedCategories(
            categories.filter(({ id }) => value.split('|').includes(id))
          );
        }

        if (key !== 'categories' && key !== 'sort') {
          setFilterState(prev => ({ ...prev, [key]: value }));
        }
      });
    }
  }, []);

  return (
    <CatalogBackground>
      <CatalogHero
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        categories={categories}
      />
      <Products
        filters={filters}
        filterState={filterState}
        setFilterState={setFilterState}
        selectedCategories={selectedCategories}
        setSelectedCategories={handleSelectedCategoryClick}
        handleSelect={handleSelect}
        sortList={sortList}
        products={products}
        sortState={sortState}
      />
    </CatalogBackground>
  );
};

export default Catalog;
