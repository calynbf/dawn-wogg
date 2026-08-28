const initWoggProductTrustSliders = (scope = document) => {
  scope.querySelectorAll('[data-wogg-trust-slider]').forEach((slider) => {
    if (slider.dataset.initialized === 'true') return;

    const track = slider.querySelector('[data-wogg-trust-track]');
    const items = track ? Array.from(track.children) : [];
    const previous = slider.querySelector('[data-wogg-trust-prev]');
    const next = slider.querySelector('[data-wogg-trust-next]');
    let index = 0;

    if (!track || items.length < 2 || !previous || !next) return;

    const render = () => {
      track.style.transform = window.matchMedia('(max-width: 749px)').matches
        ? `translateX(-${index * 100}%)`
        : '';
    };

    previous.addEventListener('click', () => {
      index = (index - 1 + items.length) % items.length;
      render();
    });

    next.addEventListener('click', () => {
      index = (index + 1) % items.length;
      render();
    });

    window.addEventListener('resize', render);
    slider.dataset.initialized = 'true';
    render();
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => initWoggProductTrustSliders());
} else {
  initWoggProductTrustSliders();
}

document.addEventListener('shopify:section:load', (event) => {
  initWoggProductTrustSliders(event.target);
});
