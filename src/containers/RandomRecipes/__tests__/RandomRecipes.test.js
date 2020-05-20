import { render, fireEvent, cleanup } from '@testing-library/svelte'
import RandomRecipes from 'containers/RandomRecipes/RandomRecipes.svelte'

describe('RandomRecipes', () => {
  afterEach(() => {
    cleanup()
  })
  it('should match snapshot', () => {
    const { container } = render(RandomRecipes)
    expect(container).toMatchSnapshot()
  })
  it('should render h2', () => {
    const { container, getAllByText } = render(RandomRecipes)
    expect(container.getElementsByTagName('h2')).toHaveLength(1)
    expect(getAllByText('Combien voulez vous de propositions ?').length).toBe(1)
  })
  it('should render 2 div and 3 buttons', () => {
    const { container, getAllByText } = render(RandomRecipes)
    expect(container.getElementsByTagName('div')).toHaveLength(2)
    expect(container.getElementsByTagName('button')).toHaveLength(3)
    expect(getAllByText('1').length).toBe(1)
    expect(getAllByText('5').length).toBe(1)
    expect(getAllByText('10').length).toBe(1)
  })
  it('should call fetch when a button is clicked', async() => {
    const { getByText } = render(RandomRecipes)
    const button = getByText('1')

    await fireEvent.click(button)
    expect(fetch).toHaveBeenCalledTimes(1)
  })
})
