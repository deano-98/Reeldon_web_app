export const quoteHref = (product?: string) =>
  product
    ? `/get-a-quote?product=${encodeURIComponent(product)}`
    : "/get-a-quote";
