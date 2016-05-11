import { Subject } from 'rxjs';

export const buttonClicks$ = new Subject();
export const buttonClicks = args => buttonClicks$.next(args);

export const registerNav$ = new Subject();
export const registerNav = args => registerNav$.next(args);

export const chooseCountry$ = new Subject();
export const chooseCountry = args => chooseCountry$.next(args);

export const next$ = new Subject();
export const next = args => next$.next(args);
