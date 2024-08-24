export const loadAsset = (url: string) => {
  let element = document.querySelector(`link[href="${url}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'stylesheet');
    element.setAttribute('href', url);
    document.head.appendChild(element);
  }
};

export const loadScript = (url: string, isModule = false) => {
  let element = document.querySelector(`script[src="${url}"]`);
  if (!element) {
    element = document.createElement('script');
    isModule && element.setAttribute('type', 'module');
    element.setAttribute('src', url);
    document.body.appendChild(element);
  }
};
