import ButtonBurgerShape from 'components/ButtonBurgerShape/ButtonBurgerShape.svelte'

export default { title: 'ButtonBurgerShape' }

export const defaultButton = () => ({
  Component: ButtonBurgerShape,
  props: {
    text: '2',
  },
})

