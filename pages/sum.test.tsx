import "@testing-library/jest-dom";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import BankForm from "./bankForm";
// test("renders form properly", () => {
//   const handleSubmit = jest.fn();
//   render(<BankForm handleSubmit={handleSubmit} />);
//   const nameLabelLabel = screen.getByTestId("name");
//   const bankNameLabel = screen.getByTestId("bankName");
//   const countryLabel = screen.getByTestId("country");
//   const descriptionLabel = screen.getByTestId("description");
//   const accountTypeLabel = screen.getByTestId("accountType");
//   // const ownerLabel = screen.getByTestId("owner"); // coz its comming under if state ment
//   const currencyLabel = screen.getByTestId("currency");
//   const currentBalanceLabel = screen.getByTestId("currentBalance");
//   const interestRateLabel = screen.getByTestId("interestRate");

//   expect(nameLabelLabel).toBeInTheDocument();
//   expect(bankNameLabel).toBeInTheDocument();
//   expect(countryLabel).toBeInTheDocument();
//   expect(descriptionLabel).toBeInTheDocument();
//   expect(accountTypeLabel).toBeInTheDocument();
//   // expect(ownerLabel).toBeInTheDocument(); // coz its comming under if state ment
//   expect(currencyLabel).toBeInTheDocument();
//   expect(currentBalanceLabel).toBeInTheDocument();
//   expect(interestRateLabel).toBeInTheDocument();
// });

test("Submit Should not have called on empty input field", async () => {
  const { getByRole } = render(<BankForm />);
  const nameLabelLabel = screen.getByTestId("name");
  const bankNameLabel = screen.getByTestId("bankName");
  const countryLabel = screen.getByTestId("country");
  const descriptionLabel = screen.getByTestId("description");
  const accountTypeLabel = screen.getByTestId("accountType");
  const currencyLabel = screen.getByTestId("currency");
  const currentBalanceLabel = screen.getByTestId("currentBalance");
  const interestRateLabel = screen.getByTestId("interestRate");

  fireEvent.change(nameLabelLabel, { target: { value: "" } });
  fireEvent.change(bankNameLabel, { target: { value: "" } });
  fireEvent.change(countryLabel, { target: { value: "" } });
  fireEvent.change(descriptionLabel, { target: { value: "" } });
  fireEvent.change(accountTypeLabel, { target: { value: "" } });
  fireEvent.change(currencyLabel, { target: { value: "" } });
  fireEvent.change(currentBalanceLabel, { target: { value: "" } });
  fireEvent.change(interestRateLabel, { target: { value: "" } });
  const btn = getByRole("button", { name: "Submit" });
  fireEvent.click(btn);

  jest.setTimeout(15000);
  await new Promise((res: any) =>
    setTimeout(() => {
      const nameError = screen.getByTestId("nameError");
      const bankNameError = screen.getByTestId("bankNameError");
      const countryError = screen.getByTestId("countryError");
      const descriptionError = screen.getByTestId("descriptionError");
      const accountTypeError = screen.getByTestId("accountTypeError");
      const currencyError = screen.getByTestId("currencyError");
      const currentBalanceError = screen.getByTestId("currentBalanceError");
      const interestRateError = screen.getByTestId("interestRateError");

      expect(nameError.textContent).toMatch("Required");
      expect(bankNameError.textContent).toMatch("Required");
      expect(countryError.textContent).toMatch("Required");
      expect(descriptionError.textContent).toMatch("Required");
      expect(accountTypeError.textContent).toMatch("Required");
      expect(currencyError.textContent).toMatch("Required");
      expect(currentBalanceError.textContent).toMatch("Required");
      expect(interestRateError.textContent).toMatch("Required");
      res();
    }, 1500)
  );
});

// test("Submit Should have called on proper input field", async () => {
//   const { getByRole } = render(<BankForm />);
//   const name = screen.getByTestId("name");
//   const bankName = screen.getByTestId("bankName");
//   const country = screen.getByTestId("country");
//   const description = screen.getByTestId("description");
//   const accountType = screen.getByTestId("accountType");
//   // const owner = screen.getByTestId("owner"); // coz its comming under if state ment
//   const currency = screen.getByTestId("currency");
//   const currentBalance = screen.getByTestId("currentBalance");
//   const interestRate = screen.getByTestId("interestRate");

//   fireEvent.change(name, { target: { value: "something" } });
//   fireEvent.change(bankName, { target: { value: "Wells Fargo" } });
//   fireEvent.change(country, { target: { value: "India" } });
//   fireEvent.change(description, { target: { value: "I love india" } });
//   fireEvent.change(accountType, { target: { value: "Current Account" } });
//   // fireEvent.change(owner , { target: { value: "" } });
//   fireEvent.change(currency, { target: { value: "USD" } });
//   fireEvent.change(currentBalance, { target: { value: 20 } });
//   fireEvent.change(interestRate, { target: { value: 11 } });
//   const btn = getByRole("button", { name: "Submit" });
//   fireEvent.click(btn);

//   jest.setTimeout(15000);
//   await new Promise((res: any) =>
//     setTimeout(() => {
//       const name = screen.getByTestId("nameError");
//       const bankName = screen.getByTestId("bankNameError");
//       const country = screen.getByTestId("countryError");
//       const description = screen.getByTestId("descriptionError");
//       const accountType = screen.getByTestId("accountTypeError");
//       // const owner = screen.getByTestId("owner"); // coz its comming under if state ment
//       const currency = screen.getByTestId("currencyError");
//       const currentBalance = screen.getByTestId("currentBalanceError");
//       const interestRate = screen.getByTestId("interestRateError");
//       res();
//     }, 1500)
//   );

//   jest.setTimeout(10000);
//   // setTimeout(() => {
//   //   expect(handleSubmit).toHaveBeenCalled();
//   // }, 100);
//   // await waitFor(() => {
//   //   expect(handleSubmit).toHaveBeenCalled();
//   // });
// });
