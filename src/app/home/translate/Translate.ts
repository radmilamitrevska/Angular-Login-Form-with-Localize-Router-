import {TranslateObjects} from "./TranslateObjects";
import {TranslateLoader} from "@ngx-translate/core";
import {Observable} from "rxjs/Observable";

export class TranslateUniversalLoader implements TranslateLoader {

    translateObject = new TranslateObjects;
    /**
     * Gets the translations from the server
     * @param lang
     * @returns {any}
     */
    public getTranslation(lang: string): Observable<any> {
        return Observable.create(observer => {
            observer.next(this.translateObject[lang]);
            observer.complete();
        });
    }
}

export function translateLoaderFactory() {
    return new TranslateUniversalLoader();
}