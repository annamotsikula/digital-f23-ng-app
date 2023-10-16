import { AbstractControl } from "@angular/forms";

export function CharacterOnly(control: AbstractControl): {[key: string]: any} | null {
    const pattern = /^[a-zA-Z0-9]*$/
    if (control.value && !pattern.test(control.value)) {
        return { 'charOnly' : true}
    }
    return null
}

