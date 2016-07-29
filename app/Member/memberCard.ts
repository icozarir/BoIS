import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'member-card',
    templateUrl: 'app/Templates/memberCard.html',
    styleUrls: ['app/css/memberCard.css']
})
export class MemberCard implements OnChanges{
    @Input() firstName: string;
    @Input() surName: string;
    @Input() email: string;
    @Input() identifier: number;
    @Input() number: number;
    @Output() activeHandler: EventEmitter<boolean> = new EventEmitter<boolean>();
    memberTitle: string = 'Medlemsinfo';
    isActive: boolean = true;
    activeButtonText: string = 'Inaktivera';

    ngOnChanges() {

    }

    onActiveClicked() {
        this.isActive = !this.isActive;
        this.setButtonText();
        this.activeHandler.emit(this.isActive);
    }

    setButtonText(): void {
        if (this.isActive) {
            this.activeButtonText = 'Inaktivera';
        }
        else {
            this.activeButtonText = 'Aktivera';
        }
    }

    isEven(): boolean {
        return this.number % 2 == 0;
    }
}