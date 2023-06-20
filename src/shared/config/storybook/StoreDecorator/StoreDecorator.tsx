import {  ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncRedcures: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncRedcures?: ReducersList) =>
  (StoryComponent: Story) => {
    return (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncRedcures, ...asyncRedcures }}
      >
        <StoryComponent />
      </StoreProvider>
    );
  };
