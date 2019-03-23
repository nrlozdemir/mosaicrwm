import classNames from 'classnames';
import React from 'react';

import { MosaicWindowContext } from '../contextTypes';
import { MosaicKey } from '../types';
import { OptionalBlueprint } from '../util/OptionalBlueprint';
import { createDefaultToolbarButton, MosaicButtonProps } from './MosaicButton';

export class ExpandButton<T extends MosaicKey> extends React.PureComponent<MosaicButtonProps> {
  static contextTypes = MosaicWindowContext;
  context!: MosaicWindowContext<T>;

  render() {
    return createDefaultToolbarButton('Expand', classNames('expand-button', OptionalBlueprint.getIconClass('MAXIMIZE')), this.expand);
  }

  private expand = () => {
    const path = this.context.mosaicWindowActions.getPath();

    this.context.mosaicActions.expand(path, 100);
    this.context.mosaicWindowActions.setExpanded(true);

    if (this.props.onClick) {
      this.props.onClick();
    }
  };
}

export const ExpandButtonFactory = React.createFactory(ExpandButton);
