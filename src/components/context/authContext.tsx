'use client';
import React, { useState } from 'react';
// import { accessToken, refreshToken } from "../../data/constant";

export const AuthContext = React.createContext({});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AuthProvider = (props: any) => {
  const [estimateImage, setEstimateImage] = useState('');
  const [estimateState, setEstimateState] = React.useState({
    hover: 0,
    money: 0,
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedFeatures, setSelectedFeatures] = useState<any[]>([]);
  const value:
    | {
        estimateImage: string;
        setEstimateImage: (data: string) => void;
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | any = {
    estimateImage,
    setEstimateImage,
    estimateState,
    setEstimateState,
    selectedFeatures,
    setSelectedFeatures,
  };

  return (
    <AuthContext.Provider value={value}>{props?.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
