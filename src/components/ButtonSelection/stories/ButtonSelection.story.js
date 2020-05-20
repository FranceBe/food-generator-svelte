import ButtonSelection from 'components/ButtonSelection/ButtonSelection.svelte'

export default { title: 'ButtonSelection' }

export const defaultButton = () => ({
  Component: ButtonSelection,
  props: {
    firstOption: 'First Option',
    secondOption: 'Second Option',
    onSelect: () => {}
  },
  on: {
    click: (event) => {
      console.log('clicked', event)
    },
  },
})
