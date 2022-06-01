import { Injectable } from "@angular/core";
import { AbstractControl, FormGroup, Validators } from "@angular/forms";

@Injectable({providedIn: 'root'})
export class MatchPassword implements Validators {
    validate(formGroup: AbstractControl) {
        const { password, passwordConfirmation } = formGroup.value;

        if (password === passwordConfirmation) {
            return null;
        } else {
            return { passwordDontMatch: true };
        }

    }
}
