import { IFilterSection } from 'components/Shared/types';
import Checkbox from 'components/ui/Checkbox/Checkbox';
import { IFilters } from 'pages/Catalog';
import { Dispatch, SetStateAction } from 'react';
import { FilterBox, FilterSection, FilterTitle } from './Filter.styled';

interface IFilterProps {
  filters: IFilterSection[];
  filterState: IFilters;
  setFilterState: Dispatch<SetStateAction<IFilters>>;
}

const Filter = ({ filters, filterState, setFilterState }: IFilterProps) => {
  const handleFilterCheck = (sectionId: string, id: string) => {
    setFilterState(prev => {
      const filter: IFilters = { ...prev };

      if (Object.keys(prev).includes(sectionId)) {
        if (prev[sectionId].includes(id)) {
          const values = prev[sectionId]
            .split('|')
            .filter(item => item !== id)
            .join('|');

          if (!values.length) {
            delete filter[sectionId];
          } else {
            filter[sectionId] = values;
          }
        } else {
          filter[sectionId] = prev[sectionId] + `|${id}`;
        }
      } else {
        filter[sectionId] = id;
      }

      return filter;
    });
  };

  return (
    <FilterBox>
      {filters.map(({ sectionId, filters, title }) => (
        <FilterSection key={sectionId}>
          <FilterTitle>{title}</FilterTitle>
          <ul>
            {filters.map(({ id, title }) => {
              let values = '';

              if (Object.keys(filterState).includes(sectionId)) {
                values = filterState[sectionId];
              }

              return (
                <li key={id}>
                  <Checkbox
                    id={id}
                    label={title}
                    checked={values.includes(id)}
                    onChange={() => handleFilterCheck(sectionId, id)}
                  />
                </li>
              );
            })}
          </ul>
        </FilterSection>
      ))}
    </FilterBox>
  );
};

export default Filter;
