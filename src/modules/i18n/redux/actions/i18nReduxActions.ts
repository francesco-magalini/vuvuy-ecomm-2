import { Language } from "../../types/i18nReduxTypes"

export const SET_LANG = 'SET_LANG'
export const GET_LANG = 'SET_LANG'


export interface SetLanguage {
    type: typeof SET_LANG
    language: Language
}

export interface GetLanguage {
    type: typeof GET_LANG
    language: Language
}

export type LanguageActions = SetLanguage | GetLanguage