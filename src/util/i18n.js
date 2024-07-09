import I18 from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import en from '../locales/en';
import es from '../locales/es';
import pt from '../locales/pt';


const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
    I18.locale = locales[0].languageTag;
};

I18.fallbacks = true;
I18.translations = {
    en,
    es,
    pt,
}
export default I18;
