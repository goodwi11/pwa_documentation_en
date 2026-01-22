document.addEventListener('DOMContentLoaded', function() {
  const removeAds = () => {
    const ads = document.querySelectorAll('[data-ea-publisher], .ea-placement, .ea-content, .ea-callout, [id*="readthedocs-ea"]');
    ads.forEach(ad => ad.remove());
  };
  
  removeAds();
  setTimeout(removeAds, 1000);
  setTimeout(removeAds, 3000);
});