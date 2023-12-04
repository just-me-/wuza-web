import {AfterViewChecked, AfterViewInit, Directive, ElementRef, HostListener} from '@angular/core'

@Directive({
  selector: '[wuzaSlideInto]',
  standalone: true
})
export class SlideIntoDirective implements AfterViewInit {

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    this.checkVisibility()
  }

  constructor(private el: ElementRef) {
    this.el.nativeElement.classList.add('wuza-slide-into')
  }

  ngAfterViewInit(): void {
    this.checkVisibility()
  }

  private checkVisibility(): void {
    const windowHeight = window.innerHeight
    const boundingRect = this.el.nativeElement.getBoundingClientRect()

    if (boundingRect.top >= 0 && boundingRect.bottom <= windowHeight) {
      this.show()
    } else {
      this.hide()
    }
  }

  private show(): void {
    this.el.nativeElement.classList.add('-show')
    this.el.nativeElement.classList.remove('-hide')
  }

  private hide(): void {
    this.el.nativeElement.classList.add('-hide')
    this.el.nativeElement.classList.remove('-show')
  }

}
