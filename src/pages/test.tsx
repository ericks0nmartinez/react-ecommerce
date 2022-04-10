import { screen, render } from '@testing-library/react'

import Hello from './index'

describe('<Hello />', () => {
  it('should render the heading', () => {
    render(<Hello title="Erickson" />)

    expect(screen.getByRole('heading', { name: /Erickson/i })).toBeInTheDocument
  })
  it('should toMatchSnapshot', () => {
    const { container } = render(<Hello title="Erickson" />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
