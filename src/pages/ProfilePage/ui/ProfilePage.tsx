import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

const reducers: ReducersList = {
    profile: profileReducer
}

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();
  return (
    //@ts-ignore
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>{t('Profile page')}</div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
