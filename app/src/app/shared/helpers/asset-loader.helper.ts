export const loadAsset = (url: string) => {
  let element = document.querySelector(`link[href="${url}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'stylesheet');
    element.setAttribute('href', url);
    document.head.appendChild(element);
  }
};

export const loadScript = (url: string, name_module:string) => {
  // Verificar si el script ya está cargado
  let element = document.querySelector(`script[src="${url}"]`);
  
  // Verificar si el custom element ya está registrado antes de cargar el script
  if (!customElements.get(name_module)) {
    if (!element) {
      element = document.createElement('script');
      element.setAttribute('type', 'module');
      element.setAttribute('src', url);
      document.body.appendChild(element);
    }
  } else {
    console.log('El custom element "mf-consolidated-position" ya está registrado.');
  }
};

