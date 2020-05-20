import H1 from 'components/H1/H1.svelte'

export default { title: 'H1' }

export const defaultButton = () => ({
  Component: H1,
  props: {
    title: 'My H1 Title',
  },
})
