import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnChanges {
  @Input() publicRepos: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    if (this.publicRepos > 2) {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'rgba(255, 0, 0, 0.6)');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'color');
    }
  }
}