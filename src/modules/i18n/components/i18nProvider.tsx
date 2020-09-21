import React, { ReactNode } from "react";

import {IntlProvider} from "react-intl";
import "@formatjs/intl-relativetimeformat/polyfill";
import "@formatjs/intl-relativetimeformat/locale-data/de";
import "@formatjs/intl-relativetimeformat/locale-data/de";
import "@formatjs/intl-relativetimeformat/locale-data/es";
import "@formatjs/intl-relativetimeformat/locale-data/fr";
import "@formatjs/intl-relativetimeformat/locale-data/ja";
import "@formatjs/intl-relativetimeformat/locale-data/zh";

import enMessages from "./translations/en.json";

interface I18nProviderProps {
  children : ReactNode
}

export function I18nProvider({ children }: I18nProviderProps) {
  return (
    <IntlProvider locale={'en'} messages={enMessages}>
      {children}
    </IntlProvider>
  );
}
