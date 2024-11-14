import { render, screen } from '@testing-library/react'
import { Posts } from '.'

const props = {
  posts: [
    {
      id: "1",
      title: "titulo 1",
      body: "corpo do post 1",
      cover: "fotinha 1",
      alt: 'alt de fotinha 1'
    },
    {
      id: "2",
      title: "titulo 2",
      body: "corpo do post 2",
      cover: "fotinha 2",
      alt: 'alt de fotinha 2'
    },
    {
      id: "3",
      title: "titulo 3",
      body: "corpo do post 3",
      cover: "fotinha 3",
      alt: 'alt de fotinha 3'
    }
  ]
}

const testAllByRoleElements = (type, nameExpected, length) => {
  return expect(screen.getAllByRole(type, { name: new RegExp(nameExpected, "i") }))
    .toHaveLength(length)
}

describe('<Posts/>', () => {
  it('should render posts', () => {
    render(<Posts {...props} />)
    testAllByRoleElements("heading", "titulo", 3)
    testAllByRoleElements("img", "fotinha", 3)
  })

  it('should have posts', () => {
    render(<Posts />)
    expect(screen.queryByRole('heading', { name: /title/i })).not.toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<Posts {...props} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
