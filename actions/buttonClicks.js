import Rx from 'rx';

export const buttonClicks$ = new Rx.ReplaySubject(1);

export const buttonClicks = (args) => buttonClicks$.onNext(args);