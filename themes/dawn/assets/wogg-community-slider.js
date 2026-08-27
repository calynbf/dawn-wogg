class WoggCommunitySlider extends HTMLElement {
  connectedCallback() {
    this.track = this.querySelector('.wogg-community-slider__track');
    this.slides = [...this.querySelectorAll('.wogg-community-slider__slide')];
    this.dots = this.querySelector('.wogg-community-slider__dots');
    this.page = 0;
    this.querySelector('.wogg-community-slider__arrow--prev')?.addEventListener('click', () => this.go(this.page - 1));
    this.querySelector('.wogg-community-slider__arrow--next')?.addEventListener('click', () => this.go(this.page + 1));
    this.addEventListener('mouseenter', () => this.stop());
    this.addEventListener('mouseleave', () => this.start());
    this.resizeObserver = new ResizeObserver(() => this.setup());
    this.resizeObserver.observe(this);
    this.setup();
  }
  disconnectedCallback() { this.stop(); this.resizeObserver?.disconnect(); }
  setup() {
    this.visible = matchMedia('(max-width: 749px)').matches ? 2 : 5;
    this.pages = Math.max(1, Math.ceil(this.slides.length / this.visible));
    this.page = Math.min(this.page, this.pages - 1);
    this.dots.innerHTML = '';
    for (let index = 0; index < this.pages; index += 1) {
      const dot = document.createElement('button');
      dot.type = 'button'; dot.className = 'wogg-community-slider__dot'; dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', `Ir al grupo ${index + 1}`); dot.addEventListener('click', () => this.go(index)); this.dots.append(dot);
    }
    this.render(); this.start();
  }
  go(page) { this.page = (page + this.pages) % this.pages; this.render(); }
  render() {
    const gap = parseFloat(getComputedStyle(this.track).gap) || 0;
    const slideWidth = this.slides[0]?.getBoundingClientRect().width || 0;
    const maxOffset = Math.max(0, this.track.scrollWidth - this.clientWidth);
    const offset = Math.min(this.page * this.visible * (slideWidth + gap), maxOffset);
    this.track.style.transform = `translate3d(${-offset}px,0,0)`;
    [...this.dots.children].forEach((dot,index) => dot.setAttribute('aria-selected', String(index === this.page)));
  }
  start() {
    this.stop();
    if (this.pages < 2 || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    this.timer = setInterval(() => this.go(this.page + 1), 4000);
  }
  stop() { clearInterval(this.timer); }
}
if (!customElements.get('wogg-community-slider')) customElements.define('wogg-community-slider', WoggCommunitySlider);
