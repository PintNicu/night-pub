import { createContext, useContext, useState } from "react";

const EditableInfoContext = createContext();

export const useEditableInfo = () => {
  return useContext(EditableInfoContext);
};

export const EditableInfoProvider = ({ children }) => {
  const [editableInfo, setEditableInfo] = useState({
    menuLink: "https://digitalmenucheck.com/14e9ca9b-2188-42e1-9a64-d26a8b895f22/index.html",

    cFormAdress: "Adresa noastră: Strada. Slobozia, Nr. 15, Sector 4, București",
    cPhone: "Contact: +4 0765 255 801",
    cEmail: "Email: casazepelin1929@gmail.com",

    phone: 'Tel. 0765 255 801',
    email: 'casazepelin1929@gmail.com',
    address: 'Strada. Slobozia | Nr. 15 | Sector 4 | București',
    programMT: "Luni - Joi: 12:01 - 00:01",
    programFS: "Vineri - Sâmbătă: 12:01 - 05:00",
    programSM: "Duminică: 12:01 - 00:00",
    companyWelcomeMessageShort: "",
    companyWelcomeMessageLong: ""
  });

  const value = {
    editableInfo, setEditableInfo
  };

  return (
    <EditableInfoContext.Provider value={value}>
      {children}
    </EditableInfoContext.Provider>
  );
};
