import { Observable, of, timer } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { reset } from 'src/app/store/counter-action.actions';

import { DestroyService } from '../destroy.services';

describe('Destroy service', () => {
    let service: DestroyService;

    beforeEach(() => {
        service = new DestroyService();
    });

    it('keeps subscription when alive', () => {
        let result = 'initial';
        const observable$: Observable<string> = of<string>('test');

        observable$.pipe(takeUntil(service)).subscribe(data => {
            result = data;
        });

        expect(result).toBe('test');
    });

    it('completes Observable on destroy', () => {
        let result = false;

        const observable$: Observable<any> = timer(2000).pipe(
            takeUntil(service),
            finalize(() => {
                result = true
            })
        );

        observable$.subscribe();
        service.ngOnDestroy();

        expect(result).toBe(true);
    })
});
