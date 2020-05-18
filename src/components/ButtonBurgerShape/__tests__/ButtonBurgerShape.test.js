import { render, fireEvent } from '@testing-library/svelte'
import ButtonBurgerShape from 'components/ButtonBurgerShape/ButtonBurgerShape.svelte'

describe('ButtonBurgerShape', () => {
  it('should match snapshot', () => {
    const { container } = render(ButtonBurgerShape, {
      props: {
        onClick: () => {
        },
        text: 'My button text',
      }
    })
    expect(container).toMatchSnapshot()
  })
  it('should render a button and a span', () => {
    const { container, getAllByText } = render(ButtonBurgerShape, {
      props: {
        onClick: () => {
        },
        text: 'My button text',
      }
    })
    expect(container.getElementsByTagName('button')).toHaveLength(1)
    expect(container.getElementsByTagName('span')).toHaveLength(1)
    expect(getAllByText('My button text').length).toBe(1)
  })
  it('should call onClick when button is clicked', async () => {
    const props = {
      onClick: jest.fn(),
      text: 'My button text',
    }
    const { getByText } = render(ButtonBurgerShape, {
      props,
    })
    const button = getByText('My button text')

    await fireEvent.click(button)
    expect(props.onClick).toHaveBeenCalledTimes(1)
    expect(props.onClick).toHaveBeenCalledWith()
  })
})
