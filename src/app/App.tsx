import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

export const App = () => {
  const { theme } = useTheme();

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(userActions.initAuthData())
  }, [dispatch])
    
  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback={''}>
        <Navbar />
        <div className="content-page">
            
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
