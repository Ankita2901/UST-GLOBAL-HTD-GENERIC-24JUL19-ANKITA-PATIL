import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private elementRef : ElementRef) { 
elementRef.nativeElement.style.backgroundColor = 'pink';
elementRef.nativeElement.style.color = 'black';
elementRef.nativeElement.style.padding = "60px";
elementRef.nativeElement.marginTop = "70px";
}
@HostBinding('style.background') background: string;

 @HostListener('mouseenter')
mouseEnter(){
  this.background = "skyblue";
//this.elementRef.nativeElement.style.background = 'green';
//this.elementRef.nativeElement.style.color = 'violet';
}
@HostListener('mouseleave')
mouseLeave(){
  this.background = "purple";
}
}