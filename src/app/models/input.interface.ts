import {InputAttr} from './input-attribute.interface';
import { FormGroup } from '@angular/forms';

export interface InputModel{
    input: InputAttr,
    group: FormGroup
}