import Rx from 'rxjs';

export const buttonClicks$ = new Rx.ReplaySubject(1);

export const buttonClicks = (args) => buttonClicks$.next(args);