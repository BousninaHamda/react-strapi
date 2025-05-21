import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageId, setPageId] = useState(null);

  const openSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <AppContext.Provider
      value={{ isSidebarOpen, openSidebar, pageId, setPageId }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
