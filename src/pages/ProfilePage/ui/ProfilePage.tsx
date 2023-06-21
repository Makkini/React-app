import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();

    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly)


    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onChangeFirstname = useCallback((value?: string)=>{
        dispatch(profileActions.updateProfile({first: value || ''}))
    },[dispatch])

    const onChangeLastname = useCallback((value?: string)=>{
        dispatch(profileActions.updateProfile({lastname: value || ''}))
    },[dispatch])

    const onChangeAge = useCallback((value?: string) => {
        const age = Number(value);
        if (!isNaN(age)) {
          dispatch(profileActions.updateProfile({ age: age }));
        }
      }, [dispatch]);

    const onChangeCIty = useCallback((value?: string)=>{
        dispatch(profileActions.updateProfile({city: value || ''}))
    },[dispatch])

    const onChangeUsername = useCallback((value?: string)=>{
        dispatch(profileActions.updateProfile({username: value || ''}))
    },[dispatch])

    const onChangeAvatar = useCallback((value?: string)=>{
        dispatch(profileActions.updateProfile({avatar: value || ''}))
    },[dispatch])

    const onChangeCurrency = useCallback((currency?: Currency)=>{
        dispatch(profileActions.updateProfile({currency}))
    },[dispatch])

    const onChangeCountry = useCallback((country?: Country)=>{
        dispatch(profileActions.updateProfile({country}))
    },[dispatch])

    return (
        //@ts-ignore
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader/>
                <ProfileCard 
                data={formData}
                isLoading={isLoading}
                error={error}
                readonly={readonly}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCIty}
                onChangeAvatar={onChangeAvatar}
                onChangeUsername={onChangeUsername}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
