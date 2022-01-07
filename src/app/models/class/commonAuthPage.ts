import { AfterViewInit, ChangeDetectorRef, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AnimationStates } from '../enums/animationStates';

@Injectable()
export abstract class CommonAuthPage
    implements AfterViewInit
{
    animationState = 'initial';

    constructor(
        protected router: Router,
        protected changeDetectorRef: ChangeDetectorRef
    ) {}

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.animationState = AnimationStates.Loaded;
            this.changeDetectorRef.markForCheck();
            console.log(this.animationState);
        });
    }

    routeTo(url: string) {
        this.animationState = AnimationStates.Destroyed;
        setTimeout(() => {
            // this.router.navigate([url]);
            console.log(this.animationState);
        }, 300)
    }

}
