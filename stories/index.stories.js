import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import ListingCard from '../app/components/ListingCard';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('ListingCard', module)
  .add('Version 1', () => (
    <ListingCard/>
  ))
  .add('Version 2', () => (
    <div style={{width: '20%'}}>
      <ListingCard title={'Virgo Zodiac Constellation Ring. Virgo gift. Zodiac jewelry. Zodiac ring. Sterling Silver or Aluminum Constellation ring RTS'}/>
    </div>
  ))