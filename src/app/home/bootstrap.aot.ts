import { platformBrowser } from '@angular/platform-browser';
import {MainModuleNgFactory} from "../aot/src/app/home/modules/main.module.ngfactory";
import {enableProdMode} from "@angular/core";
enableProdMode();
platformBrowser().bootstrapModuleFactory(MainModuleNgFactory);
