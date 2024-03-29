import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
// searchText
  @Input() searchedWord:string;
  // HTML content
  @Input() content:string;
  // class to apply for Highlighting
  @Input() classToApply:string;
  // sets title attribute of HTML  // 
@Input() setTitle = false;
  constructor(private el:ElementRef, private renderer:Renderer2) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (!this.content) {
      return;
    }
    if (this.setTitle) {
      this.renderer.setProperty(
        this.el.nativeElement,
        'title',
        this.content
      );
    }
    if (!this.searchedWord || !this.searchedWord.length || !this.classToApply) {
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.content);
      return;
    }
    this.renderer.setProperty(
      this.el.nativeElement,
      'innerHTML',
      this.getFormattedText()
    );
  }
  getFormattedText() {
    const re = new RegExp(`(${this.searchedWord})`, 'gi');
    return this.content.replace(re, `<span class="${this.classToApply}">$1</span>`);
  }
}
