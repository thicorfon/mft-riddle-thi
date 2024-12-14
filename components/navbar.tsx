import * as React from "react"
import { ModeToggle } from "./ui/mode-toggle"

const Navbar = () => {
  return <div className="border-b flex justify-center items-center text-3xl font-bold p-4 gap-4 bg-card">
    Maria Fernanda e Thiago Fonseca
    <div className="ml-auto flex items-center">
      <ModeToggle />
    </div>
  </div>
}

export { Navbar }