// Type declarations for modules without official types

declare module 'react-reveal' {
  import { ReactNode } from 'react';
  
  interface RevealProps {
    children?: ReactNode;
    cascade?: boolean;
    duration?: number;
    delay?: number;
    count?: number;
    forever?: boolean;
    timeout?: number;
    distance?: string;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    when?: boolean;
    collapse?: boolean;
    fraction?: number;
  }
  
  export const Fade: React.FC<RevealProps>;
  export const Zoom: React.FC<RevealProps>;
  export const Bounce: React.FC<RevealProps>;
  export const Slide: React.FC<RevealProps>;
  export const Roll: React.FC<RevealProps>;
  export const LightSpeed: React.FC<RevealProps>;
  export const Flip: React.FC<RevealProps>;
  export const Rotate: React.FC<RevealProps>;
  export const Flash: React.FC<RevealProps>;
  export const Pulse: React.FC<RevealProps>;
  export const Shake: React.FC<RevealProps>;
  export const Spin: React.FC<RevealProps>;
  export const Swing: React.FC<RevealProps>;
  export const Wobble: React.FC<RevealProps>;
  export const Hinge: React.FC<RevealProps>;
  
  export default Fade;
}

declare module 'react-reveal/Fade' {
  export { Fade as default } from 'react-reveal';
}

declare module 'react-reveal/Zoom' {
  export { Zoom as default } from 'react-reveal';
}

declare module 'react-reveal/Bounce' {
  export { Bounce as default } from 'react-reveal';
}

declare module 'react-reveal/Flash' {
  export { Flash as default } from 'react-reveal';
}

declare module 'react-reveal/Pulse' {
  export { Pulse as default } from 'react-reveal';
}

declare module 'react-gtm-module' {
  interface GTMConfig {
    gtmId: string;
    events?: Record<string, any>;
    dataLayer?: Record<string, any>;
    dataLayerName?: string;
    auth?: string;
    preview?: string;
  }
  
  const TagManager: {
    initialize(config: GTMConfig): void;
    dataLayer(dataLayerArgs: Record<string, any>): void;
  };
  
  export default TagManager;
}

declare module '@ervandra/use-setstate' {
  export function useSetState<T extends Record<string, any>>(
    initialState: T
  ): {
    state: T;
    setState: (newState: Partial<T>) => void;
  };
}