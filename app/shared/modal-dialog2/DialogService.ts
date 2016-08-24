/**
 * Created by Alex on 15.05.2016.
 */
import {Injectable} from "@angular/core";

@Injectable()
export class ConfirmService {
    activate: (message?: string, title?: string) => Promise<boolean>;
}