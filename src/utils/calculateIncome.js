const DEDUCTIBLE = 25;

export function calculateIncome(type, income) {
  let gross;
  let net;
  let tax;
  let num = 100;
  if (type === "grossIncome") {
    gross = income;
    net = (gross - (gross / num) * DEDUCTIBLE).toFixed(2);
    tax = (gross - net).toFixed(2);
    gross = gross.toFixed(2);

    return {
      gross,
      net,
      tax,
    };
  } else if (type === "netIncome") {
    net = income;
    gross = (net + (net / num) * DEDUCTIBLE).toFixed(2);
    tax = (gross - net).toFixed(2);
    net = net.toFixed(2);

    return {
      gross,
      net,
      tax,
    };
  }
  throw Error("wrong type of income");
}
