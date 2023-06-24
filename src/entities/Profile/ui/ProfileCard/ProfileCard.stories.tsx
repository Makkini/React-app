import { Meta } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from './ProfileCard';
import avatar from 'shared/assets/tests/storybook.jpg'


const meta: Meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

export const Primary = () => <ProfileCard data={{
    username: 'admin',
    age: 22,
    country: Country.Japan,
    lastname: "Makkinni",
    first: "Merritt",
    city: "Tokyo",
    currency: Currency.EUR,
    avatar,
}}  />


export const withError = () => <ProfileCard error={'true'} />


export const Loading = () => <ProfileCard isLoading={true} />
