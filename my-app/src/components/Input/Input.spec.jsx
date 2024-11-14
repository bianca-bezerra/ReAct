import { render, screen } from '@testing-library/react'
import { Input } from '.'
import userEvent from '@testing-library/user-event'

describe('<Input/>', () => {
  it('should have a searchInput', () => {
    const fn = jest.fn()
    render(<Input handleChange={fn} searchInput={'teste'} />)
    const input = screen.getByPlaceholderText("Search...")

    expect(input).toBeInTheDocument()
    expect(input.value).toBe('teste')
  })

  it('should call handleChange on each key pressed', () => {
    const fn = jest.fn()
    render(<Input handleChange={fn} />)
    const input = screen.getByPlaceholderText("Search...")
    const value = 'valor do input'
    userEvent.type(input, value)
    expect(input.value).toBe(value)
    expect(fn).toHaveBeenCalledTimes(value.length)
  })

  it('should match snapshot', () => {
    const fn = jest.fn()
    const { container } = render(<Input handleChange={fn} searchInput={'teste'} />)
    expect(container.firstChild).toMatchSnapshot()
  })

})
