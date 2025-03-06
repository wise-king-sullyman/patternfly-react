var ariaLive = 'off';

import { PanelProps } from './Panel';

export function getAnnounce(props: PanelProps) {
  if (props.a11y) {
    if (props.a11y.announce === 'assertive') {
      return 'assertive';
    } else if (props.a11y.announce === 'off') {
      return 'off';
    } else {
      return 'polite';
    }
  } else {
    return 'polite';
  }
}

export function getA11y(props: any) {
  if (props.a11y) {
    ariaLive = getAnnounce(props);
  } else {
    ariaLive = 'polite';
  }
  return ariaLive;
}
