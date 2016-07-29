import {Pipe, PipeTransform} from '@angular/core';
import {Member} from '../Model/member';

@Pipe({
    name: 'memberFilter'
})
export class MemberFilterPipe implements PipeTransform {
    transform(value: Member[], exponent: string): Member[] {
        let filter: string = exponent ? exponent.toLocaleLowerCase() : null;
        return filter ? value.filter((member: Member) => member.firstName.toLocaleLowerCase().indexOf(filter) != -1 || member.surName.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}