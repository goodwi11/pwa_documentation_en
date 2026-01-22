(function() {
  const removeAds = () => {
    const selectors = [
      '[data-ea-publisher]',
      '.ea-placement',
      '.ea-content', 
      '.ea-callout',
      '.ea-type-text',
      '[id*="readthedocs-ea"]',
      '[class*="raised"][class*="adaptive"]',
      'div[data-ea-manual]'
    ];
    
    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => el.remove());
    });
  };

  // Удаляем сразу и с задержкой (реклама грузится асинхронно)
  removeAds();
  document.addEventListener('DOMContentLoaded', removeAds);
  setTimeout(removeAds, 500);
  setTimeout(removeAds, 1500);
  setTimeout(removeAds, 3000);
  
  // Observer для динамически добавленных элементов
  const observer = new MutationObserver(removeAds);
  observer.observe(document.body || document.documentElement, {
    childList: true,
    subtree: true
  });
})();
