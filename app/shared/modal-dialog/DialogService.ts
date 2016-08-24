import { Injectable } from '@angular/core';

/**
 * Created by Alex on 16.05.2016.
 */

@Injectable()
export class DialogService {
    /**
     * Ask user to confirm an action. `message` explains the action and choices.
     * Returns promise resolving to `true`=confirm or `false`=cancel
     */
    confirm(message?: string) : Promise<boolean> {
        return new Promise<boolean>((resolve, reject) =>
            resolve(window.confirm(message || 'Is it OK?')));
    };

    confirm2() {

    };
}

