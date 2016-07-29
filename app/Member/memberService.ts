import {Injectable} from '@angular/core'
import {Member} from '../Model/member';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

export interface IMemberService {
    getMembers(): Observable<Member[]>;
}

@Injectable()
export class MemberService implements IMemberService {

    constructor(private _http: Http) {

    }

    getMembers(): Observable<Member[]> {
        return this._http.get('http://localhost/amsApi/api/member/GetallMembers/').map((response: Response) => <Member[]>response.json())
            .catch(this.errorHandler);
    }

    private errorHandler(error: Response) {
        alert(Error);
        return Observable.throw('Server error');
    }

}