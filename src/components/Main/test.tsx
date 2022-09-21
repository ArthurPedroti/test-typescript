import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the main component', () => {
    render(<Main />)

    expect(screen.getByText(/Main/i)).toBeInTheDocument()
  })
})
