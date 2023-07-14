import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('getProfileForm test', () => {
        const data = {
            username: 'admin',
            age: 22,
            country: Country.Japan,
            lastname: 'Makkinni',
            first: 'Merritt',
            city: 'Tokyo',
            currency: Currency.EUR,
        }

        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test('empty data', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
