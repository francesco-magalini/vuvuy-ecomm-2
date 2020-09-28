import React, { useState, useEffect } from "react";
import { IContext} from "@msdyn365-commerce/retail-proxy";
import { getCategoriesAsync } from "@msdyn365-commerce/retail-proxy/dist/DataActions/CategoriesDataActions.g";

interface Props {
  context: IContext;
}

export const DebugCategories = (props: Props) => {
  const [Categories, setCategories] = useState();

  useEffect(() => {
    let cat = getCategoriesAsync(props.context, 33);
  });

  return (
    <div>
      <p>{JSON.stringify(Categories)}</p>
    </div>
  );
};
