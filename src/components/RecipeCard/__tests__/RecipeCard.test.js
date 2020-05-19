import { render, cleanup } from '@testing-library/svelte'
import RecipeCard from 'components/RecipeCard/RecipeCard.svelte'

describe('RecipeCard', () => {
  afterEach(() => {
    cleanup()
  })
  it('should match snapshot', () => {
    const { container } = render(RecipeCard, {
      props: {
        src: 'image/image.jpg',
        title: 'title of recipe',
        ingredients: 'potatoe, tomatoe',
        href: 'http://my-recipe.recipe',
      }
    })
    expect(container).toMatchSnapshot()
  })
  describe('given there is an src attribute', () => {
    const { container, getAllByText } = render(RecipeCard, {
      props: {
        src: 'image/image.jpg',
        title: 'title of recipe',
        ingredients: 'potatoe, tomatoe',
        href: 'http://my-recipe.recipe',
      }
    })
    it('should find 5 div and 1 img', () => {
      expect(container.getElementsByTagName('div')).toHaveLength(5)
      expect(container.getElementsByTagName('img')).toHaveLength(1)
    })
    it('should render the title', () => {
      expect(getAllByText('title of recipe').length).toBe(1)
    })
  })
})
