import { createContext, useContext, useState } from "react";

const FooterInfoContext = createContext();

export const useFooterInfo = () => {
  return useContext(FooterInfoContext);
};

export const FooterInfoProvider = ({ children }) => {
  const [footerInfo, setFooterInfo] = useState({
    phone: 'Tel. 0765 255 801',
    email: 'casazepelin1929@gmail.com',
    address: 'Strada. Slobozia | Nr. 15 | Sector 4 | București',
    programMT: "Luni - Joi: 12:01 - 00:01",
    programFS: "Vineri - Sâmbătă: 12:01 - 05:00",
    programSM: "Duminică: 12:01 - 00:00",
  });

  const value = {
    footerInfo,
    setFooterInfo,
  };

  return (
    <FooterInfoContext.Provider value={value}>
      {children}
    </FooterInfoContext.Provider>
  );
};
