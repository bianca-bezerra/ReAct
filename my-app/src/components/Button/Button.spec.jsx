import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button } from "."

describe("<Button />", () => {
  it("should render button with text", () => {
    render(<Button text={"Load"} />)
    const button = screen.getByRole('button', { name: /Load/i })
    expect(button).toBeInTheDocument()
  })

  it("should call function on button click", () => {
    // cria a função mock
    const fn = jest.fn()

    //renderiza o comp alvo
    render(<Button text={"Load"} onClick={fn} />)

    //pega o comp na tela
    const button = screen.getByRole('button', { name: /Load/i })

    //ativa o elemento de click
    userEvent.click(button)

    //verifica se a func foi chamada
    expect(fn).toHaveBeenCalled()
  })

  it("should be disable when disable is true", () => {
    render(<Button text={"Load"} disabled={true} />)
    const button = screen.getByRole('button', { name: /Load/i })
    expect(button).toBeDisabled()
  })

  it("should be enable when disable is false", () => {
    render(<Button text={"Load"} disabled={false} />)
    const button = screen.getByRole('button', { name: /Load/i })
    expect(button).toBeEnabled()
  })
})
