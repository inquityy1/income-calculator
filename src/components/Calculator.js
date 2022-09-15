import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { calculateIncome } from "../utils/calculateIncome";
import { Header } from "./Header";
import { Navbar } from "./Navbar";

export default function Calculator() {
  const [income, setIncome] = useState(0);
  const [frequency, setFrequency] = useState("weekly");
  const [incomeType, setIncomeType] = useState(undefined);
  const [incomeTypeError, setIncomeTypeError] = useState("");
  const navigate = useNavigate();

  const onClickSubmit = (e) => {
    e.preventDefault();

    if (incomeType === "grossIncome" || incomeType === "netIncome") {
      grossNetTaxCalc();
      navigate("/income-details");
    } else {
      setIncomeTypeError("Please choose the income type");
    }
  };

  const grossNetTaxCalc = () => {
    let salaryTotal = {};
    salaryTotal.frequency = frequency;
    salaryTotal.incomeType = incomeType;
    salaryTotal.income = income;

    let weeklyIncome;
    let fortnightlyIncome;
    let monthlyIncome;
    let annuallyIncome;

    switch (frequency) {
      case "weekly":
        weeklyIncome = income;
        fortnightlyIncome = income * 2;
        monthlyIncome = income * 4 + income * (2.5 / 100);
        annuallyIncome = weeklyIncome * 12;

        salaryTotal.weeklyIncome = calculateIncome(incomeType, weeklyIncome);
        salaryTotal.fortnightlyIncome = calculateIncome(
          incomeType,
          fortnightlyIncome
        );
        salaryTotal.monthlyIncome = calculateIncome(incomeType, monthlyIncome);
        salaryTotal.annuallyIncome = calculateIncome(
          incomeType,
          annuallyIncome
        );

        break;
      case "fortnightly":
        weeklyIncome = income / 2;
        fortnightlyIncome = income;
        monthlyIncome = weeklyIncome * 4 + weeklyIncome * (2.5 / 100);
        annuallyIncome = weeklyIncome * 12;

        salaryTotal.weeklyIncome = calculateIncome(incomeType, weeklyIncome);
        salaryTotal.fortnightlyIncome = calculateIncome(
          incomeType,
          fortnightlyIncome
        );
        salaryTotal.monthlyIncome = calculateIncome(incomeType, monthlyIncome);
        salaryTotal.annuallyIncome = calculateIncome(
          incomeType,
          annuallyIncome
        );
        break;
      case "monthly":
        weeklyIncome = income / 4 + 0.3;
        fortnightlyIncome = income / 2 + 0.3;
        monthlyIncome = income;
        annuallyIncome = income * 12;

        salaryTotal.weeklyIncome = calculateIncome(incomeType, weeklyIncome);
        salaryTotal.fortnightlyIncome = calculateIncome(
          incomeType,
          fortnightlyIncome
        );
        salaryTotal.monthlyIncome = calculateIncome(incomeType, monthlyIncome);
        salaryTotal.annuallyIncome = calculateIncome(
          incomeType,
          annuallyIncome
        );
        break;
      case "annually":
        weeklyIncome = income / 12 / 4 + 0.3;
        fortnightlyIncome = income / 12 / 2 + 0.3;
        monthlyIncome = income / 12;
        annuallyIncome = income;

        salaryTotal.weeklyIncome = calculateIncome(incomeType, weeklyIncome);
        salaryTotal.fortnightlyIncome = calculateIncome(
          incomeType,
          fortnightlyIncome
        );
        salaryTotal.monthlyIncome = calculateIncome(incomeType, monthlyIncome);
        salaryTotal.annuallyIncome = calculateIncome(
          incomeType,
          annuallyIncome
        );
        break;
      default:
        salaryTotal = {};
    }
    window.localStorage.setItem("salaryTotal", JSON.stringify(salaryTotal));
    salaryTotal = {};
  };

  const clear = (e) => {
    e.preventDefault();
    localStorage.clear();

    setIncome(0);
  };

  return (
    <div className="w-screen h-screen p-12 flex items-center justify-center bg-gradient-to-r from-pink-400 to-purple-600">
      <div className="flex flex-col justify-center">
        <Navbar />
        <form
          onSubmit={onClickSubmit}
          className="w-full p-6 max-w-xl mx-auto bg-white rounded-xl shadow-lg flex flex-col "
        >
          <div className="flex justify-end">
            <button
              className="flex justify-center bg-red-500 w-20 text-primary py-3 mb-4 rounded-xl transition delay-50 shadow-xl"
              onClick={clear}
            >
              Clear
            </button>
          </div>
          <Header />
          <h3 className="mt-5">What is your total income?</h3>

          <div className="relative mt-3 mb-3 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-400 sm:text-sm">$</span>
            </div>
            <input
              className="block w-full h-10 rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              type="text"
              name="income"
              id="income"
              placeholder="0.00"
              onChange={(e) => setIncome(Number(e.target.value))}
              value={income}
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <select
                defaultValue={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                className="h-full rounded-md border-transparent bg-purple-300 hover:bg-purple-400 py-0 pl-2 pr-7 text-gray-800 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option defaultValue value="weekly" className="option">
                  Weekly
                </option>
                <option value="fortnightly" className="option">
                  Fortnightly
                </option>
                <option value="monthly" className="option">
                  Monthly
                </option>
                <option value="annually" className="option">
                  Annually
                </option>
              </select>
            </div>
          </div>

          <h3 htmlFor="price" className="">
            Please Choose the income type
          </h3>

          <div className="flex md:flex-row w-dull py-2 space-x-2 flex-col centered_inputs">
            <div className="relative mb-2 mt-2  ">
              <input
                type="radio"
                name="incomeType"
                id="gross"
                className="hidden peer"
                value={"grossIncome"}
                onClick={() => setIncomeType("grossIncome")}
              />
              <label
                htmlFor="gross"
                className="flex justify-center gap-4 p-4 px-16 rounded-xl bg-lime-400 bg-opacity-90 backdrop-blur-2xl shadow-xl hover:bg-opacity-75 peer-checked:bg-purple-900 peer-checked:text-white cursor-pointer transition"
              >
                <h1>Gross income</h1>
              </label>
              <div className="flex absolute top-0 right-4 bottom-0 w-7 h-7 my-auto rounded-full bg-purple-700 scale-0 peer-checked:scale-100 transition delay-100"></div>
            </div>
            <div className="relative mt-2 ">
              <input
                type="radio"
                name="incomeType"
                id="net"
                className="hidden peer"
                value={"netIncome"}
                onClick={() => setIncomeType("netIncome")}
              />
              <label
                htmlFor="net"
                className="flex justify-center gap-4 p-4 px-16 rounded-xl bg-lime-400 bg-opacity-90 backdrop-blur-2xl shadow-xl hover:bg-opacity-75 peer-checked:bg-purple-900 peer-checked:text-white cursor-pointer transition"
              >
                <h1>Net income</h1>
              </label>
              <div className="flex absolute top-0 right-4 bottom-0 w-7 h-7 my-auto rounded-full bg-purple-700 scale-0 peer-checked:scale-100 transition delay-100"></div>
            </div>
          </div>
          <div className="h-1 text-red-600 text-center">{incomeTypeError}</div>

          <div className="flex flex-col my-4 mt-10 ">
            <button className="bg-btnbg hover:bg-indigo-800 text-primary px-8 py-3 mb-4 rounded-xl transition delay-50 shadow-xl">
              Calculate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
