export function formatPrice(valueInCents: number) {
  const valueInCentsInt = Math.round(valueInCents * 100);

  if (valueInCentsInt % 100 === 0) {
    return (valueInCentsInt / 100)
      .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
      .replace(",00", "");
  } else {
    return (valueInCentsInt / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
}
