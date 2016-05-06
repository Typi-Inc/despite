import Rx from 'rxjs';

export const buttonClicks$ = new Rx.Subject();

export const buttonClicks = (args) => buttonClicks$.next(args);

export const registerNav$ = new Rx.Subject();

export const registerNav = (args) => registerNav$.next(args);

export const chooseCountry$ = new Rx.Subject();

export const chooseCountry = (args) => chooseCountry$.next(args);
export const next$ = new Rx.Subject();

export const next = (args) => next$.next(args);