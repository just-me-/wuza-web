import {AfterViewInit, Directive, ElementRef} from '@angular/core'

@Directive({
  selector: '[wuzaBubbles]',
  standalone: true
})
export class BubblesDirective implements AfterViewInit {

  constructor(private el: ElementRef) {
    this.el.nativeElement.classList.add('bubbles')
  }

  ngAfterViewInit() {
    this.addBubbles()
  }

  private addBubbles(): void {
    const elWidth = this.el.nativeElement.offsetWidth as number
    const bubblecount = (elWidth / 50) * 10

    for(let i = 0; i <= bubblecount; i++) {
      const size = (this.rnd(40,80)/10)
      this.el.nativeElement.append(this.stringToHTML(
        '<span class="particle" style="top:' + this.rnd(20,80) + '%; ' +
        'left:' + this.rnd(0,95) + '%;' +
        'width:' + size + 'px; height:' + size + 'px;' +
        'animation-delay: ' + (this.rnd(0,30)/10) + 's;"></span>'
      ))
    }

  }

  private stringToHTML(str: string) {
    const parser = new DOMParser()
    const doc = parser.parseFromString(str, 'text/html')
    return doc.body.firstChild
  }

  private rnd(m: number, n: number): number {
    return Math.floor( Math.random() * (n - m + 1) ) + m
  }

}
