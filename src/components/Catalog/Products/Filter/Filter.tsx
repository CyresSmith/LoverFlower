import { IFilterSection } from 'components/Shared/types';
import Button from 'components/ui/Button';
import Checkbox from 'components/ui/Checkbox/Checkbox';
import { Name } from 'components/ui/Checkbox/Checkbox.styled';
import RangeSlider from 'components/ui/RangeSlider';
import { IFilters } from 'pages/Catalog';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  FilterBox,
  FilterSection,
  FilterTitle,
  RangeBox,
} from './Filter.styled';

interface IFilterProps {
  minPrice: number;
  maxPrice: number;
  filters: IFilterSection[];
  filterState: IFilters;
  setFilterState: Dispatch<SetStateAction<IFilters>>;
}

const Filter = ({
  minPrice,
  maxPrice,
  filters,
  filterState,
  setFilterState,
}: IFilterProps) => {
  const [priseFilter, setPriseFilter] = useState<number[]>([
    Object.keys(filterState).includes('price')
      ? Number(filterState.price.split('-')[0])
      : minPrice,
    Object.keys(filterState).includes('price')
      ? Number(filterState.price.split('-')[1])
      : maxPrice,
  ]);

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

  useEffect(() => {
    setFilterState(prev => ({
      ...prev,
      price: `${priseFilter[0]}-${priseFilter[1]}`,
    }));
  }, [priseFilter, setFilterState]);

  return (
    <div>
      <FilterBox>
        <FilterSection>
          <FilterTitle>Стоимость</FilterTitle>

          {/* <Range
          min={500}
          max={1500}
          step={10}
          values={{ min: 600, max: 1400 }}
          setValues={values => {
            console.log(values);
          }}
        /> */}

          <RangeBox>
            <RangeSlider
              min={minPrice}
              max={maxPrice}
              stepSize={1}
              values={priseFilter}
              setValues={setPriseFilter}
            />

            <Name>
              Цена: {priseFilter[0]}₽ – {priseFilter[1]}₽
            </Name>
          </RangeBox>
        </FilterSection>

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

        <Button
          variant="secondary"
          onClick={() => {
            setFilterState({});
            setPriseFilter([minPrice, maxPrice]);
          }}
        >
          Сбросить фильтр
        </Button>
      </FilterBox>
    </div>
  );
};

export default Filter;
