// Klaq - recruitment exercices

// Task 1
function getInvoiceSubtotal(exampleInvoices) {
  // Take an invoice object as a parameter
  // Find the subtotal
  // Return the result
  const subtotal = exampleInvoices.products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  return subtotal;
}

// Task 2
function getInvoiceTaxes(exampleInvoices) {
  // Take an invoice object as a parameter
  // Find the taxes amount
  // Return the result
  const taxes = exampleInvoices.products.reduce(
    (acc, product) => acc + (product.price * product.tax * product.quantity) / 100,
    0
  );
  return taxes;
}

// Task 3
function getInvoiceTotal(exampleInvoices) {
  // Take an invoice object as a parameter
  // Find the total amount
  // Return the result
  const subtotal = getInvoiceSubtotal(exampleInvoices);
  const taxes = getInvoiceTaxes(exampleInvoices);
  const total = subtotal + taxes;
  return total;
}

// Task 4
function getInvoicesOverdue(exampleInvoices, date) {
  // Take an invoice object list as a parameter
  // Find the overdue invoices
  // Return the result
  const overdueInvoices = exampleInvoices.filter(
    (exampleInvoices) => new Date(exampleInvoices.validUntil) < new Date(date)
  );
  return overdueInvoices;
}

// Task 5
function getInvoicesMatchingCharacter(exampleInvoices, string) {
  // Take an invoice object list as a parameter
  // Find the invoices matching the customer property
  // Return the result
  const matchingInvoices = exampleInvoices.filter((exampleInvoices) =>
    exampleInvoices.customer.toLowerCase().includes(string.toLowerCase())
  );
  return matchingInvoices;
}

// Task 6
function getInvoicesOrderedByStatus(exampleInvoices) {
  // Take an invoice object list as a parameter
  // Find the invoices ordered by status accepted, pending, rejected
  // Return the result
  const statusOrder = ["accepted", "pending", "rejected"];
  const sortedInvoices = exampleInvoices.sort((a, b) =>
    statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status)
  );
  return sortedInvoices;
}

// Task 7
async function getInvoices() {
  try {
    // fetch the invoices from the "https://api.klaq.io/api/v1/intern/invoices" url
    // return the data
    const response = await fetch("https://api.klaq.io/api/v1/intern/invoices");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}


// DO NOT TOUCH THE FOLLOWING LINES
module.exports = {
  getInvoiceSubtotal,
  getInvoiceTaxes,
  getInvoiceTotal,
  getInvoicesOverdue,
  getInvoicesMatchingCharacter,
  getInvoicesOrderedByStatus,
  getInvoices,
};
