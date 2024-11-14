import { render, screen } from "@testing-library/react"
import { PostCard } from "."
import { mockPostCard } from "./mock"

const props = mockPostCard

describe("<PostCard />", () => {
  it("should render PostCard correctly", () => {
    render(
      <PostCard {...props} />)
    expect(screen.getByRole('img', { name: props.alt })).toHaveAttribute('src', props.cover)
    expect(screen.getByRole('heading', { name: props.title })).toBeInTheDocument()
    expect(screen.getByText(props.body)).toBeInTheDocument()
  })

  it("should match PostCard snap", () => {
    const { container } = render(
      <PostCard {...props} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
