import React from 'react';

import { AuthContext } from './authContext';

const useAuth = () => {
  const context:
    | {
        estimateImage: string;
        setEstimateImage: (data: string) => void;
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | any = React.useContext(AuthContext);

  return context;
};

export default useAuth;
