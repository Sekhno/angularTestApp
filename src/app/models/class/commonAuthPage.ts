import { AfterViewInit, ChangeDetectorRef, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AnimationStates } from '../enum/animationStates';

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
        });
    }

    routeTo(url: string) {
        this.animationState = AnimationStates.Destroyed;
        setTimeout(() => {
            this.router.navigate([url]);
        }, 300);
    }
    
}
