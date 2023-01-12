import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer'
import GitHubCard from './GitHubCard';

it('renders a snapshot of GitHubCard', () => {
  const tree = renderer
    .create(<GitHubCard />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

