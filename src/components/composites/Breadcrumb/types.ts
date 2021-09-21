import type { IHStackProps } from '../../primitives/Stack/HStack';
import type { ITextProps, ILinkProps, IIconProps } from '../../primitives';
import type { MutableRefObject } from 'react';
import type { ResponsiveValue } from '../../types';
import type { ISpacing } from '../../../theme/base/space';
export interface IBreadcrumbItemContext {
  isCurrent?: boolean;
  allChildren?: boolean;
}

export interface IBreadcrumbProps extends IHStackProps {
  spacing?: ResponsiveValue<ISpacing | (string & {}) | number>;
  separator?: string | JSX.Element | JSX.Element[] | any;
  maxItems?: number | number[];
  _button?: any;
  isCollapsed?: boolean;
  onCollapseChange?: any;
}
export interface IBreadcrumbItemProps extends IHStackProps {
  spacing?: ResponsiveValue<ISpacing | (string & {}) | number>;
  isCurrent?: boolean;
}
export interface IBreadcrumbIconProps extends IIconProps {
  _current?: any;
}
export interface IBreadcrumbTextProps extends ITextProps {
  _current?: any;
}
export type IBreadcrumbComponentType = ((
  props: IBreadcrumbProps & { ref?: MutableRefObject<any> }
) => JSX.Element) & {
  Item: React.MemoExoticComponent<
    (
      props: IBreadcrumbItemProps & { ref?: MutableRefObject<any> }
    ) => JSX.Element
  >;
  Link: React.MemoExoticComponent<
    (props: ILinkProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  Icon: React.MemoExoticComponent<
    (props: IBreadcrumbIconProps & { ref?: any }) => JSX.Element
  >;
  Text: React.MemoExoticComponent<
    (props: IBreadcrumbTextProps & { ref?: any }) => JSX.Element
  >;
};