import { cleanup, render } from '@testing-library/svelte'
import H1 from 'components/H1/H1.svelte'

describe('H1', () => {
  afterEach(() => {
    cleanup()
  })
  it('should match snapshot', () => {
    const { container } = render(H1, {
      props: {
        title: 'My title',
      }
    })
    expect(container).toMatchSnapshot()
  })
  it('should render an h1 tag', () => {
    const { container, getAllByText } = render(H1, {
      props: {
        title: 'My title',
      }
    })
    expect(container.getElementsByTagName('h1')).toHaveLength(1)
    expect(getAllByText('My title').length).toBe(1)
  })
})
