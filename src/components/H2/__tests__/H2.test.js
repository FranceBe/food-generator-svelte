import { cleanup, render } from '@testing-library/svelte'
import H2 from 'components/H2/H2.svelte'

describe('H2', () => {
  afterEach(() => {
    cleanup()
  })
  it('should match snapshot', () => {
    const { container } = render(H2, {
      props: {
        title: 'My title',
      }
    })
    expect(container).toMatchSnapshot()
  })
  it('should render an h2 tag', () => {
    const { container, getAllByText } = render(H2, {
      props: {
        title: 'My title',
      }
    })
    expect(container.getElementsByTagName('h2')).toHaveLength(1)
    expect(getAllByText('My title').length).toBe(1)
  })
})
