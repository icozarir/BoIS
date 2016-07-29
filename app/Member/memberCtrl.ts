import {Component, OnInit} from '@angular/core';
import {Member} from '../Model/member';
import {MemberFilterPipe} from '../Member/memberFilterPipe';
import {MemberService} from '../Member/memberService';
import {MemberCard} from '../Member/memberCard';

@Component({
    templateUrl: 'app/Templates/memberlist.html',
    styleUrls: ['app/css/main.css'],
    pipes: [MemberFilterPipe],
    directives: [MemberCard]
})
export class MemberListComponent implements OnInit{
    searchString: string = '';
    listOfMembers: Member[] = [];
    rowActivated: boolean = true;

    constructor(private _memberService: MemberService) {
    }

    ngOnInit(): void {
       this._memberService.getMembers()
           .subscribe(members => this.listOfMembers = members);
    }

    onNotify(event: boolean): void {
        this.rowActivated = event;
    }
 }