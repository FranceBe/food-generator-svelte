import { render, fireEvent, cleanup } from '@testing-library/svelte'
import RandomRecipesWithIngredient from
  'containers/RandomRecipesWithIngredient/RandomRecipesWithIngredient.svelte'

describe('RandomRecipesWithIngredient', () => {
  afterEach(() => {
    cleanup()
  })
  it('should match snapshot', () => {
    const { container } = render(RandomRecipesWithIngredient)
    expect(container).toMatchSnapshot()
  })
  it('should render 2 h2 and an input', () => {
    const { container, getAllByText } = render(RandomRecipesWithIngredient)
    expect(container.getElementsByTagName('h2')).toHaveLength(2)
    expect(container.getElementsByTagName('input')).toHaveLength(1)
    expect(getAllByText('Une envie de...').length).toBe(1)
    expect(getAllByText('...Combien voulez vous de propositions ?').length).toBe(1)
  })
  it('should render 4 div and 3 buttons', () => {
    const { container, getAllByText } = render(RandomRecipesWithIngredient)
    expect(container.getElementsByTagName('div')).toHaveLength(4)
    expect(container.getElementsByTagName('button')).toHaveLength(3)
    expect(getAllByText('1').length).toBe(1)
    expect(getAllByText('5').length).toBe(1)
    expect(getAllByText('10').length).toBe(1)
  })
  it('should call fetch when a button is clicked', async () => {
    const { getByText } = render(RandomRecipesWithIngredient)
    const button = getByText('1')

    await fireEvent.click(button)
    expect(fetch).toHaveBeenCalledTimes(1)
  })
})
