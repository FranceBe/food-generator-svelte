import { render, fireEvent, cleanup } from '@testing-library/svelte'
import ButtonSelection from 'components/ButtonSelection/ButtonSelection.svelte'

describe('ButtonSelection', () => {
  afterEach(() => {
    cleanup()
  })
  it('should match snapshot', () => {
    const { container } = render(ButtonSelection, {
      props: {
        onSelect: () => {
        },
        firstOption: 'My First option',
        secondOption: 'My Second Option',
        selectedOption: null,
      }
    })
    expect(container).toMatchSnapshot()
  })
  it('should render 2 buttons', () => {
    const { container, getAllByText } = render(ButtonSelection, {
      props: {
        onSelect: () => {
        },
        firstOption: 'My First option',
        secondOption: 'My Second Option',
        selectedOption: null,
      }
    })
    expect(container.getElementsByTagName('button')).toHaveLength(2)
    expect(getAllByText('My First option').length).toBe(1)
    expect(getAllByText('My Second Option').length).toBe(1)
  })
  it('should call onSelect with correct value when one of the button is clicked', async () => {
    const props = {
      onSelect: jest.fn(),
      firstOption: 'My First option',
      secondOption: 'My Second Option',
      selectedOption: null,
    }
    const { getByText } = render(ButtonSelection, {
      props,
    })
    const firstButton = getByText('My First option')
    const secondButton = getByText('My Second Option')

    await fireEvent.click(firstButton)
    expect(props.onSelect).toHaveBeenCalledTimes(1)
    expect(props.onSelect).toHaveBeenCalledWith('first-option')
    expect(firstButton).toContainHTML('<button class="is-active">My First option </button>')
    expect(secondButton).toContainHTML('<button class="">My Second Option</button>')

    jest.clearAllMocks()
    await fireEvent.click(secondButton)
    expect(props.onSelect).toHaveBeenCalledTimes(1)
    expect(props.onSelect).toHaveBeenCalledWith('second-option')
    expect(firstButton).toContainHTML('<button class="">My First option </button>')
    expect(secondButton).toContainHTML('<button class="is-active">My Second Option</button>')

  })
})
