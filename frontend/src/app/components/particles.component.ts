import { Component, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.css'],
  standalone: true
})
export class ParticlesComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private animationId = 0;
  private particles: Array<any> = [];
  private resizeObserver?: () => void;

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    if (!this.ctx) return;

    // init sizes and particles
    this.resizeCanvas();
    this.createParticles();

    // start loop
    this.animationLoop();

    // resize handler
    window.addEventListener('resize', this.handleResize);
    // optional: observe pixel ratio changes if needed
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationId);
    window.removeEventListener('resize', this.handleResize);
  }

  private handleResize = () => {
    this.resizeCanvas();
    this.createParticles();
  };

  private resizeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  private createParticles() {
    const canvas = this.canvasRef.nativeElement;
    const area = canvas.width * canvas.height;
    // particle density: adjust divisor for more/less particles
    const count = Math.max(40, Math.floor((canvas.width * canvas.height) / 2000000));
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        dx: (Math.random() - 0.5) * 0.6,
        dy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 3 + 1.5
      });
    }
  }

  private animationLoop = () => {
    const ctx = this.ctx;
    const w = window.innerWidth;
    const h = window.innerHeight;

    // clear with slight background tint (transparent)
    ctx.clearRect(0, 0, w, h);

    // draw dots
    ctx.fillStyle = 'rgba(255,255,255,0.22)'; // particle color
    for (const p of this.particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;

      if (p.x < -10) p.x = w + 10;
      if (p.x > w + 10) p.x = -10;
      if (p.y < -10) p.y = h + 10;
      if (p.y > h + 10) p.y = -10;
    }

    // draw connecting lines
    ctx.lineWidth = 2.2;
    for (let i = 0; i < this.particles.length; i++) {
      const p1 = this.particles[i];
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = Math.min(160, (window.innerWidth + window.innerHeight) / 12); // adapt to screen
        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.22; // line alpha scaled by distance
          ctx.strokeStyle = `rgba(210,200,255,${alpha})`; // slightly purple lines
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    this.animationId = requestAnimationFrame(this.animationLoop);
  };
}