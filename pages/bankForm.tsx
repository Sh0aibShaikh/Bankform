import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import {
  Box,
  Switch,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import * as Yup from "yup";
type handleSubmit = {
  handleSubmit: any;
};
export default function bankForm({ handleSubmit }: any) {
  const [savingAc, setSavingAc] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  handleSubmit = (values: any) => {
    // same shape as initial values
    console.log(values);
  };
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .matches(/^[a-zA-Z\s]*$/, "Only Letters")
      .required("Required"),
    bankName: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    description: Yup.string().min(10, "Too Short!").required("Required"),
    accountType: Yup.string().required("Required"),
    owner:
      savingAc && switchValue
        ? Yup.string().min(0, "Too Short!").required("Required")
        : Yup.string(),
    currency: Yup.string().required("Required"),
    currentBalance: Yup.string().min(2, "Too Short!").required("Required"),
    interestRate: Yup.string().min(2, "Too Short!").required("Required"),
  });
  const typeAccountHandler = (e: any) => {
    if (e.target.value === "SavingsAccount") {
      setSavingAc(true);
    } else {
      setSavingAc(false);
      setSwitchValue(false);
    }
  };
  const ownersHandler = (e: any) => {
    switchValue ? setSwitchValue(false) : setSwitchValue(true);
  };

  return (
    <Box>
      <Box textAlign="center" fontSize="20px" fontWeight="600">
        Signup
      </Box>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Formik
          initialValues={{
            name: "",
            bankName: "",
            country: "",
            description: "",
            accountType: "",
            owner: "",
            currency: "",
            currentBalance: "",
            interestRate: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Box mb="10px">
                <FormLabel htmlFor="name">Name</FormLabel>
                <Field data-testid="name" name="name" type="text" as={Input} />
                {errors.name && touched.name ? (
                  <Box data-testid="nameError" fontSize="14px" color="red">
                    {errors.name}
                  </Box>
                ) : (
                  <Box fontSize="14px" visibility="hidden">
                    Required
                  </Box>
                )}
              </Box>

              <Box mb="10px">
                <FormLabel htmlFor="bankName">Bank Name</FormLabel>
                <Field data-testid="bankName" as={Select} name="bankName">
                  <option value="">Select Bank</option>
                  <option value="EmiratesInvestmentBank">
                    Emirates Investment Bank
                  </option>
                  <option value="EmiratesNBD">Emirates NBD</option>
                  <option value="WellsFargo">Wells Fargo</option>
                </Field>
                {errors.bankName && touched.bankName ? (
                  <Box data-testid="bankNameError" fontSize="14px" color="red">
                    {errors.bankName}
                  </Box>
                ) : (
                  <Box fontSize="14px" visibility="hidden">
                    Required
                  </Box>
                )}
              </Box>
              <Box mb="10px">
                <FormLabel htmlFor="country">Country</FormLabel>
                <Field data-testid="country" as={Select} name="country">
                  <option value="">Select Country</option>
                  <option value="USA">USA</option>
                  <option value="Dubail">Dubail</option>
                  <option value="India">India</option>
                </Field>
                {errors.country && touched.country ? (
                  <Box data-testid="countryError" fontSize="14px" color="red">
                    {errors.country}
                  </Box>
                ) : (
                  <Box fontSize="14px" visibility="hidden">
                    Required
                  </Box>
                )}
              </Box>
              <Box mb="10px">
                <FormLabel htmlFor="description">Description</FormLabel>
                <Field
                  data-testid="description"
                  name="description"
                  as={Input}
                />
                {errors.description && touched.description ? (
                  <Box
                    data-testid="descriptionError"
                    fontSize="14px"
                    color="red"
                  >
                    {errors.description}
                  </Box>
                ) : (
                  <Box fontSize="14px" visibility="hidden">
                    Required
                  </Box>
                )}
              </Box>
              <Box mb="10px">
                <FormLabel htmlFor="accountType">Account Type</FormLabel>
                <Field
                  data-testid="accountType"
                  as={Select}
                  name="accountType"
                  onClick={typeAccountHandler}
                >
                  <option value="">Select Bank</option>
                  <option value="SavingsAccount">Savings Account</option>
                  <option value="CurrentAccount">Current Account</option>
                  <option value="Termdeposit">Term Deposit</option>
                </Field>
                {errors.accountType && touched.accountType ? (
                  <Box
                    data-testid="accountTypeError"
                    fontSize="14px"
                    color="red"
                  >
                    {errors.accountType}
                  </Box>
                ) : (
                  <Box fontSize="14px" visibility="hidden">
                    Required
                  </Box>
                )}
                {savingAc && (
                  <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="" mb="0">
                      Is this a joint account?
                    </FormLabel>
                    <Switch id="" onChange={ownersHandler} />
                  </FormControl>
                )}
              </Box>

              {switchValue ? (
                <Box mb="10px">
                  <FormLabel htmlFor="owner">Owners</FormLabel>
                  <Field data-testid="owner" as={Select} name="owner">
                    <option value="">Select Owners</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </Field>
                  {errors.owner && touched.owner ? (
                    <Box data-testid="ownerError" fontSize="14px" color="red">
                      {errors.owner}
                    </Box>
                  ) : (
                    <Box fontSize="14px" visibility="hidden">
                      Required
                    </Box>
                  )}
                </Box>
              ) : (
                false
              )}

              <Box mb="10px">
                <FormLabel htmlFor="currency">Currency</FormLabel>
                <Field data-testid="currency" as={Select} name="currency">
                  <option value="">Select Money</option>
                  <option value="USD">USD</option>
                  <option value="SAR">SAR</option>
                </Field>
                {errors.currency && touched.currency ? (
                  <Box data-testid="currencyError" fontSize="14px" color="red">
                    {errors.currency}
                  </Box>
                ) : (
                  <Box fontSize="14px" visibility="hidden">
                    Required
                  </Box>
                )}
              </Box>

              <Box mb="10px">
                <FormLabel htmlFor="currentBalance">Current Balance</FormLabel>
                <Field
                  data-testid="currentBalance"
                  name="currentBalance"
                  type="number"
                  as={Input}
                />
                {errors.currentBalance && touched.currentBalance ? (
                  <Box
                    data-testid="currentBalanceError"
                    fontSize="14px"
                    color="red"
                  >
                    {errors.currentBalance}
                  </Box>
                ) : (
                  <Box fontSize="14px" visibility="hidden">
                    Required
                  </Box>
                )}
              </Box>

              <Box mb="10px">
                <FormLabel htmlFor="interestRate">Interest Rate</FormLabel>
                <Field
                  data-testid="interestRate"
                  name="interestRate"
                  type="number"
                  as={Input}
                />
                {errors.interestRate && touched.interestRate ? (
                  <Box
                    data-testid="interestRateError"
                    fontSize="14px"
                    color="red"
                  >
                    {errors.interestRate}
                  </Box>
                ) : (
                  <Box fontSize="14px" visibility="hidden">
                    Required
                  </Box>
                )}
              </Box>

              <Button type="submit">Submit</Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}
