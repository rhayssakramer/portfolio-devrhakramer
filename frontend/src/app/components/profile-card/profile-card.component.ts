import { Component, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements AfterViewInit, OnDestroy {
  showContacts = false;

  constructor(private el: ElementRef) {}

  toggleContacts() {
    this.showContacts = !this.showContacts;
  }

  ngAfterViewInit(): void {
    try {
      const node = this.el.nativeElement.querySelector('.profile-card') || this.el.nativeElement;
      const ancestors: Element[] = [];
      let cur: any = node;
      while (cur) {
        ancestors.push(cur);
        cur = cur.parentElement;
      }
      console.group('ProfileCard debug - computed positions');
      ancestors.slice(0, 12).forEach((a, i) => {
        const style = getComputedStyle(a as Element);
        console.log(`#${i}:`, a.tagName, a.className || '(no-class)', 'position=', style.position, 'transform=', style.transform);
      });
      console.groupEnd();
    } catch (e) {
      console.warn('ProfileCard debug failed', e);
    }

    // Attach scroll listeners for debugging which element is scrolling
    try {
      const wrapper = document.querySelector('.page-wrapper');
      const node = this.el.nativeElement.querySelector('.profile-card') || this.el.nativeElement;
      if (node) {
        const rect = node.getBoundingClientRect();
        console.log('profile-card initial rect.top=', rect.top, 'rect.left=', rect.left);
      }
      if (wrapper) {
        const onWrapperScroll = () => {
          console.log('page-wrapper scrollTop=', (wrapper as HTMLElement).scrollTop);
          try {
            const rnode = node as HTMLElement;
            if (rnode) console.log('profile-card rect.top=', rnode.getBoundingClientRect().top);
          } catch {}
        };
        wrapper.addEventListener('scroll', onWrapperScroll);
        // store reference for removal
        (this as any)._onWrapperScroll = onWrapperScroll;
      }
      const onWindowScroll = () => {
        console.log('window scrollY=', window.scrollY);
        try {
          const rnode = node as HTMLElement;
          if (rnode) console.log('profile-card rect.top=', rnode.getBoundingClientRect().top);
        } catch {}
      };
      window.addEventListener('scroll', onWindowScroll);
      (this as any)._onWindowScroll = onWindowScroll;
    } catch (e) {
      console.warn('Failed to attach scroll listeners', e);
    }
  }

  ngOnDestroy(): void {
    try {
      const wrapper = document.querySelector('.page-wrapper');
      if (wrapper && (this as any)._onWrapperScroll) wrapper.removeEventListener('scroll', (this as any)._onWrapperScroll);
      if ((this as any)._onWindowScroll) window.removeEventListener('scroll', (this as any)._onWindowScroll);
    } catch (e) {
      // no-op
    }
  }
}
