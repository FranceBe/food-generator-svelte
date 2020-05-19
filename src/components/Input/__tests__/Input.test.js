import { render, fireEvent, cleanup } from '@testing-library/svelte'
import Input from 'components/Input/Input.svelte'

describe('Input', () => {
  afterEach(() => {
    cleanup()
  })
  it('should match snapshot', () => {
    const { container } = render(Input, {
      props: {
        label: 'My label',
        onChange: () => {
        },
      }
    })
    expect(container).toMatchSnapshot()
  })
  it('should render an input and a h2 tag', () => {
    const { container, getAllByText } = render(Input, {
      props: {
        label: 'My label',
        onChange: () => {
        },
      }
    })
    expect(container.getElementsByTagName('h2')).toHaveLength(1)
    expect(container.getElementsByTagName('input')).toHaveLength(1)
    expect(getAllByText('My label').length).toBe(1)
  })
  it('should call the props onChange when on:change is triggeres', async () => {
    const props = {
      onChange: jest.fn(),
      label: 'My label',
    }
    const { getByLabelText } = render(Input, {
      props,
    })
    const input = getByLabelText('My label')
    await fireEvent.change(input, { target: { value: 'tomatoe' } })

    expect(props.onChange).toHaveBeenCalledTimes(1)
  })
})
