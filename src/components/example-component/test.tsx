import { render, screen } from '@testing-library/react'

import ExampleComponent from '.'

describe('#ExampleComponent', () => {
  it('should render the heading', () => {
    const { container } = render(<ExampleComponent />)
    expect(
      screen.getByRole('heading', { name: /Boilerplate Vite/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<ExampleComponent />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
