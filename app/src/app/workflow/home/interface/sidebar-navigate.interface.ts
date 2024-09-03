export interface NavigateSidebar {
    name: string;
    label: string;
    icon: string;
    actived: boolean;
    children?: NavigateChildren[];
  }

  export interface NavigateChildren {
    name: string;
    label: string;
    actived: boolean;
  }