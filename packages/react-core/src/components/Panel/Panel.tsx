import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Panel/panel';
import { css } from '@patternfly/react-styles';

export interface PanelProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the panel */
  children?: React.ReactNode;
  /** Class to add to outer div */
  className?: string;
  /** Adds panel variant styles */
  variant?: 'raised' | 'bordered' | 'secondary';
  /** Flag to add scrollable styling to the panel */
  isScrollable?: boolean;
  /** Enable better a11y */
  a11y?: any;
  /** @hide Forwarded ref */
  innerRef?: React.Ref<any>;
}

import { getA11y } from './utils';
export enum a11yEnum {
  /** Adds aria-live="off" to the panel */
  off = 'off',
  /** Adds aria-live="assertive" to the panel */
  assertive = 'assertive',
  /** Adds aria-live="polite" to the panel */
  polite = 'polite'
}

const PanelBase: React.FunctionComponent<PanelProps> = ({
  className,
  children,
  variant,
  isScrollable,
  innerRef,
  ...props
}: PanelProps) => (
  <div
    className={css(
      styles.panel,
      variant && styles.modifiers[variant],
      isScrollable && styles.modifiers.scrollable,
      className
    )}
    ref={innerRef}
    aria-live={convertGetA11yForAriaLive(getA11y(props)) as any}
    {...props}
  >
    {children}
  </div>
);

function convertGetA11yForAriaLive(response: string) {
  return a11yEnum[response as 'off'];
}

export const Panel = React.forwardRef((props: PanelProps, ref: React.Ref<any>) => (
  <PanelBase innerRef={ref} {...props} />
));
Panel.displayName = 'Panel';
