import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Page } from ".";

describe("Page", () => {
  it("should render", () => {
    // Arrange
    const title = "Test Title";
    const children = "Test Children";
    const { getByText } = render(
    <Page title={title}>
      {children}
    </Page>
  );

    // Act
    const titleElement = getByText(title);
    const childrenElement = getByText(children);

    // Assert
    expect(titleElement).toBeInTheDocument();
    expect(childrenElement).toBeInTheDocument();
  });
  it("should render the correct styled components", () => {
    const { container } = render(
      <Page title="Test Title">
        Test Children
      </Page>);
    expect(container.firstChild).toHaveStyle("display: flex");
    expect(container.firstChild).toHaveStyle("flex-direction: column");
    expect(container.firstChild).toHaveStyle("align-items: center");
    expect(container.firstChild).toHaveStyle("justify-content: center");
    expect(container.firstChild).toHaveStyle("height: 100vh");
    expect(container.firstChild).toHaveStyle("background-color: #f0f0f0");
  });
});
