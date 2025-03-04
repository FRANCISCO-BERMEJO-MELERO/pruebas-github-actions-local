import { describe, it, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import App from '../App';

describe("Componente App", () => {
  it("debe renderizar sin errores", () => {
    render(<App />);
    expect(screen.getByText("Bienvenido a la aplicación")).toBeInTheDocument();
  });
});
