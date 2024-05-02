import React from "react";
import PropertyContext from "./propertyContext";

const PropertyContextProvider = ({ children }) => {
  const [PropertyData, setPropertyData] = React.useState([]);
  return (
    <PropertyContext.Provider value={{ PropertyData, setPropertyData }}>
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyContextProvider;