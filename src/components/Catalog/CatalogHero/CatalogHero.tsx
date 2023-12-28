import Contacts from 'components/Main/Hero/Contacts';
import { Container } from 'components/Shared/Shared.styled';
import { ICategory } from 'components/Shared/types';
import { Dispatch, SetStateAction } from 'react';
import TitleBox from './TitleBox';

interface Props {
  selectedCategories: ICategory[];
  setSelectedCategories: Dispatch<SetStateAction<ICategory[]>>;
  categories: ICategory[];
}

const CatalogHero = ({
  selectedCategories,
  setSelectedCategories,
  categories,
}: Props) => {
  return (
    <Container>
      <Contacts />
      <TitleBox
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        categories={categories}
      />
    </Container>
  );
};

export default CatalogHero;
