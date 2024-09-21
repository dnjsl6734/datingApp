import { createContext, useState } from 'react';

// UserContext를 생성
export const UserContext = createContext();

//  전역적으로 UserProvider 컴포넌트 상태 관리
export const UserProvider = ({ children }) => {
  const [userProvider, setUserProvider] = useState([]); // user 상태 정의

  return (
    <UserContext.Provider value={{ userProvider, setUserProvider }}>
      {children}
    </UserContext.Provider>
  );
};