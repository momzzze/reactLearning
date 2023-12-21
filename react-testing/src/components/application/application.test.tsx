import { render, screen } from "@testing-library/react";
import Application from "./application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const pageHeading=screen.getByRole('heading',{
        level:1,
    })
    expect(pageHeading).toBeInTheDocument();


    const sectionHeading=screen.getByRole('heading',{
        level:2,
    })
    expect(sectionHeading).toBeInTheDocument();



    const nameElement = screen.getByRole("textbox",{
        name: /name/i
    });
    expect(nameElement).toBeInTheDocument();

    const nameElement2=screen.getByLabelText('Name',{
        selector: 'input',
        
    });
    expect(nameElement2).toBeInTheDocument();

    // const nameElement3=screen.getByLabelText('I agree to the terms and conditions');
    // expect(nameElement3).toBeInTheDocument();

    const bioElement=screen.getByRole("textbox",{
        name: /bio/i,
    });

    const jobLocationElement=screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    // const termsElement=screen.getByTestId('terms');
    // expect(termsElement).toBeInTheDocument();
    const termsElement=screen.getByRole('checkbox');
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement=screen.getByRole('button');
    expect(submitButtonElement).toBeInTheDocument();
  });
});
