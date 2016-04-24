/**
 * Created by Alex on 03.04.2016.
 */
import {Injectable} from 'angular2/core';

@Injectable()
export class Logger {
    logs:string[] = []; // capture logs for testing
    log(message: string){
        this.logs.push(message);
        console.log(message);
    }
}