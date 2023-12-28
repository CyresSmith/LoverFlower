import { ICategory } from 'components/Shared/types';
import { Dispatch, SetStateAction } from 'react';
import { Box, CategoriesList, Category, Title } from './TitleBox.styled';

type Props = {
  selectedCategories: ICategory[];
  setSelectedCategories: Dispatch<SetStateAction<ICategory[]>>;
  categories: ICategory[];
};

const TitleBox = ({
  selectedCategories = [],
  setSelectedCategories,
  categories,
}: Props) => {
  const isSelected = (categoryId: string) =>
    selectedCategories.some(({ id }) => id === categoryId);

  const handleFilterClick = (category: ICategory) => {
    setSelectedCategories(prev => {
      return isSelected(category.id)
        ? prev.filter(({ id }) => id !== category.id)
        : [...prev, category];
    });
  };

  return (
    <Box>
      <Title>
        каталог <span>букетов</span>
      </Title>

      <p>В нашем магазине самый большой выбор букетов для любых событий:</p>

      <CategoriesList>
        {categories.map(item => (
          <Category
            key={item.id}
            selected={isSelected(item.id)}
            onClick={() => handleFilterClick(item)}
          >
            {item.title}
          </Category>
        ))}
      </CategoriesList>
    </Box>
  );
};

export default TitleBox;
