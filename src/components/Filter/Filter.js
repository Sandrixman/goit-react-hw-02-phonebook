import { nanoid } from 'nanoid';
import { Section } from './Filter.styled';

const id = nanoid();

const Filter = ({ changeFilter }) => {
  return (
    <Section>
      <label htmlFor={id}>Find contacts by name</label>
      <input id={id} type="text" onChange={changeFilter} />
    </Section>
  );
};

export default Filter;
