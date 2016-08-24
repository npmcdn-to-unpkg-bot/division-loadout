/**
 * Created by Alex on 03.04.2016.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class Logger {

    

    debug(message: string, ...optionalParams:any[]) {
        console.debug(message, ...optionalParams);
    }

    log(message: string, ...optionalParams:any[]) {
        console.log(message, ...optionalParams);
    }

    warn(message: string, ...optionalParams:any[]) {
        console.warn(message, ...optionalParams);
    }
}