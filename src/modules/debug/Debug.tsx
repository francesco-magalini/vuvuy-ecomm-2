import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { ICallerContext, IContext } from "@msdyn365-commerce/retail-proxy";
import { DebugCategories } from "./DebugCategories";

export const Debug = () => {
  const tmpCtx: IContext = {
    callerContext: {
      requestContext: {
        apiSettings: {
          baseUrl: "",
          channelId: 0,
          catalogId: 0,
          oun: "33",
          baseImageUrl: "",
        },
        user: {
          token: "jwt",
          isAuthenticated: true,
        },
        locale: "EN-US",
        operationId: "123",
      },
    },
  };

  const [Ctx, setCtx] = useState<IContext>();

  useEffect(() => {
    let accessToken: any;
    let jwt: string;
    let context: IContext;
    let callerCtx: ICallerContext;

    let categories;

    Auth.currentSession()
      .then((result) => {
        accessToken = result.getAccessToken();
        jwt = accessToken.getJwtToken();
      })
      .then(() => {
        callerCtx = {
          requestContext: {
            apiSettings: {
              baseUrl: process.env.REACT_APP_MSDyn365Commerce_BASEURL!,
              channelId: parseInt(
                process.env.REACT_APP_MSDyn365Commerce_CHANNELID!
              ),
              catalogId: parseInt(
                process.env.REACT_APP_MSDyn365Commerce_CATALOGID!
              ),
              oun: process.env.REACT_APP_MSDyn365Commerce_OUN!,
              baseImageUrl: process.env
                .REACT_APP_MSDyn365Commerce_BASEIMAGEURL!,
            },
            user: {
              token: jwt,
              isAuthenticated: true,
            },
            locale: "EN-US",
            operationId: "123",
          },
        };
      })
      .then(() => {
        context = {
          callerContext: callerCtx,
        };
        console.log("Inner:" + JSON.stringify(context));
        setCtx(context);
      });
  });

  return (
    <div>
      <h1>Hello World</h1>
      <p>{JSON.stringify(Ctx)}</p>

      <DebugCategories context={tmpCtx} />
    </div>
  );
};
