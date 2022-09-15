import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { Navbar } from "./Navbar";

export default function Table() {
  const [tableInfo, setTableInfo] = useState(null);
  const [pickedFrequency, setPickedFrequency] = useState(null);
  const navigate = useNavigate();

  const onFrequencyChange = useCallback((e) => {
    const frequency = e.target.value;
    setTableInfo((prevState) => {
      return { ...prevState, frequency };
    });
  }, []);

  useEffect(() => {
    setTableInfo(JSON.parse(localStorage.getItem("salaryTotal")));
    setPickedFrequency(tableInfo?.frequency);
  }, [tableInfo, setTableInfo, setPickedFrequency]);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-pink-400 to-purple-600">
      <div className="flex flex-col justify-center">
        <Navbar />
        <div className="w-full h-2/3 p-6 bg-white rounded-xl shadow-lg flex flex-col">
          <Header />
          {tableInfo !== null && pickedFrequency !== null ? (
            <div className="bg-purple-100 mt-3 p-4 rounded-lg overflow-auto shadow">
              <div className="flex">
                <div className="bg-blue-200 rounded-lg p-2 mb-2">
                  {tableInfo.frequency === "weekly"
                    ? tableInfo.weeklyIncome.net
                    : tableInfo.frequency === "fortnightly"
                    ? tableInfo.fortnightlyIncome.net
                    : tableInfo.frequency === "monthly"
                    ? tableInfo.monthlyIncome.net
                    : tableInfo.frequency === "annually"
                    ? tableInfo.annuallyIncome.net
                    : 0}
                  $
                </div>
                <div className="text-center flex p-2">
                  your net
                  <select
                    defaultValue={tableInfo?.frequency}
                    onChange={onFrequencyChange}
                    className="h-full text-center border-b-4 border-b-violet-300 bg-transparent hover:bg-purple-200 text-gray-800 focus:ring-indigo-500 mx-2 sm:text-sm"
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
                  </select>{" "}
                  - income
                </div>
              </div>

              <table className="w-full">
                <thead className="bg-white border-2 border-gray-300">
                  <tr>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">
                      Frequency
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">
                      Gross income
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">
                      Tax
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">
                      Net income
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y">
                  <tr className="bg-gray-200 border-2 border-gray-300 hover:bg-violet-200">
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-teal-700 bg-teal-200 rounded-lg bg-opacity-50">
                        Weekly
                      </span>
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {tableInfo.weeklyIncome.gross}$
                    </td>
                    <td className="p-3 text-sm text-red-500 whitespace-nowrap">
                      {tableInfo.weeklyIncome.tax}$
                    </td>
                    <td className="p-3 text-sm text-green-500  whitespace-nowrap">
                      {tableInfo?.weeklyIncome.net}$
                    </td>
                  </tr>
                  <tr className="bg-white border-2 border-gray-300 hover:bg-violet-200">
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-blue-800 bg-blue-400 rounded-lg bg-opacity-50">
                        Fortnightly
                      </span>
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {tableInfo.fortnightlyIncome.gross}$
                    </td>
                    <td className="p-3 text-sm text-red-500 whitespace-nowrap">
                      {tableInfo.fortnightlyIncome.tax}$
                    </td>
                    <td className="p-3 text-sm text-green-500  whitespace-nowrap">
                      {tableInfo.fortnightlyIncome.net}$
                    </td>
                  </tr>
                  <tr className="bg-gray-200 border-2 border-gray-300 hover:bg-violet-200">
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-fuchsia-700 bg-fuchsia-500 rounded-lg bg-opacity-40">
                        Monthly
                      </span>
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {tableInfo.monthlyIncome.gross}$
                    </td>
                    <td className="p-3 text-sm text-red-500 whitespace-nowrap">
                      {tableInfo.monthlyIncome.tax}$
                    </td>
                    <td className="p-3 text-sm text-green-500  whitespace-nowrap">
                      {tableInfo.monthlyIncome.net}$
                    </td>
                  </tr>
                  <tr className="bg-white border-2 border-gray-300 hover:bg-violet-200">
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-purple-700 bg-purple-600 rounded-lg bg-opacity-30">
                        Annually
                      </span>
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {tableInfo.annuallyIncome.gross}$
                    </td>
                    <td className="p-3 text-sm text-red-500 whitespace-nowrap">
                      {tableInfo.annuallyIncome.tax}$
                    </td>
                    <td className="p-3 text-sm text-green-500 whitespace-nowrap">
                      {tableInfo.annuallyIncome.net}$
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="w-full h-2/3 p-6 bg-white rounded-xl shadow-lg flex flex-col">
              <h1>Please use the calculator from previous tab</h1>
            </div>
          )}
          <div
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
            className="flex flex-col my-4 mt-10 "
          >
            <button className="bg-btnbg hover:bg-indigo-800 text-primary px-8 py-3 mb-4 rounded-xl transition delay-50 shadow-xl">
              Go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
