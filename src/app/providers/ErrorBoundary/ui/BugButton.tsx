import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';


//Кнопкка для тестирования ErrorBoundary
export const BugButton = () => {
  const [error, setError] = useState(false);
  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);
  return <Button onClick={onThrow}>throw Error</Button>;
};
