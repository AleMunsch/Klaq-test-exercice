# Recruitment exercise

Contact Paul for any question: paul@klaq.io

## Objectives

The objective of this exercise is to test you on developing a fullstack project.

You are evaluated on :

- Having a working project ! 🙂
- Code structure & quality 🤩
- Understanding of the problem 🤓

PS: There's no need to feel pressured; our intention is not to set a trap. The objective is for you to thrive and succeed. The aim is to assess your current level and your programming methodology, so that you can make the best possible adjustments to your future missions.

## Delivery instructions

Clone the repository and add all the functions in the specified files. Send us by email (paul@klaq.io) a zip of your project before the due date (indicated in the email). Your project must be containing all the files, cleaned of any working files.

## Description of the problem

### Introduction

At Klaq, we've got a billing tool. Yeah, we've got to juggle creating, finding, editing, and sending invoices for our clients. This exercise is kind of like a dive into the deep end, a taste of what you might get into during your internship here. Various problems can arise: VAT issues, date problems, invoices that are overdue. Today you're going to put yourself in the shoes of a Klaq fullstack developer. You'll be solving problems we've already had to deal with (in simpler ways, of course). Your mission, should you choose to accept it, is to implement different tricks in JavaScript. We'll give you more details just below. We're excited to see how you'll tackle these challenges and how you'll jazz up our billing tool at Klaq! 😎

### Guidelines

You have to use JavaScript, with any libraries or tool you need. if you don't succeed in an exercise, don't hesitate to move on to the next one and leave a comment about your thoughts on the problem. Keep it simple!

## Problem

We are dealing with an array of invoice objects, and the task is to extract crucial information from this array. Each invoice object consists of various properties such as id, number, customer, issuedOn, validUntil, status, and products. Within each product, there are properties like price, tax, desc, quantity and name.

```json
[
  {
    "id": 1,
    "number": "F-001-2022",
    "customer": "John Doe",
    "issuedOn": "2022-01-15",
    "validUntil": "2022-02-15",
    "status": "accepted",
    "products": [
      {
        "name": "Product A",
        "desc": "Description for Product A",
        "price": 50,
        "vta": 10,
        "quantity": 1
      },
      {
        "name": "Product B",
        "desc": "Description for Product B",
        "price": 30,
        "vta": 20,
        "quantity": 1
      }
    ]
  },
  {
    "id": 2,
    "number": "F-002-2022",
    "customer": "Jane Smith",
    "issuedOn": "2022-02-01",
    "validUntil": "2022-03-01",
    "status": "pending",
    "products": [
      {
        "name": "Product C",
        "desc": "Description for Product C",
        "price": 75,
        "vta": 5,
        "quantity": 1
      }
    ]
  }
]
```

### \* Task 1

In the `invoice.js` file, develop a function named `getInvoiceSubtotal`. This function should take an invoice object as a parameter and return the total amount for that specific invoice.

```javascript
// invoice.js
function getInvoiceSubtotal(invoice) {
  // Take an invoice object as a parameter
  // Find the subtotal
  // Return the result
}
```

#### Example

```javascript
// Example invoice object
const exampleInvoice = {
  id: 2,
  number: "F-002-2022",
  customer: "Jane Smith",
  issuedOn: "2022-02-01",
  validUntil: "2022-03-01",
  status: "pending",
  products: [
    {
      name: "Product A",
      desc: "Description for Product A",
      price: 75,
      tax: 5,
      quantity: 1,
    },
    {
      name: "Product B",
      desc: "Description for Product B",
      price: 30,
      tax: 5,
      quantity: 1,
    },
  ],
};

// Call the function with the example invoice object
const invoiceSubtotal = getInvoiceSubtotal(exampleInvoice);

// Log the result
console.log(`Invoice Subtotal: ${invoiceSubtotal}€`);
// => Invoice Subtotal: 105€
```

### \* Task 2

In the `invoice.js` file, develop a function named `getInvoiceTax`. This function should take an invoice object as a parameter and return the total tax amount for that invoice. Note that the tax properties in the product objects within the invoice correspond to a percentage.
💡 For instance, if a product's price is 100€ and the tax is 20%, the calculated tax amount would be 20€.

```javascript
// invoice.js
function getInvoiceTaxes(invoice) {
  // Take an invoice object as a parameter
  // Find the taxes amount
  // Return the result
}
```

#### Example

```javascript
// Example invoice object
const exampleInvoice = {
  id: 2,
  number: "F-002-2022",
  customer: "Jane Smith",
  issuedOn: "2022-02-01",
  validUntil: "2022-03-01",
  status: "pending",
  products: [
    {
      name: "Product A",
      desc: "Description for Product A",
      price: 75,
      tax: 20,
      quantity: 1,
    },
    {
      name: "Product B",
      desc: "Description for Product B",
      price: 30,
      tax: 10,
      quantity: 1,
    },
  ],
};

// Call the function with the example invoice object
const invoiceTaxes = getInvoiceTaxes(exampleInvoice);

// Log the result
console.log(`Invoice Taxes: ${invoiceTaxes}€`);
// => Invoice Taxes: 18€
```

### \* Task 3

In the `invoice.js` file, create a function named `getInvoiceTotal` that accepts an invoice object as a parameter and returns the total amount for that invoice.

```javascript
// invoice.js
function getInvoiceTotal(invoice) {
  // Take an invoice object as a parameter
  // Find the total amount
  // Return the result
}
```

#### Example

```javascript
// Example invoice object
const exampleInvoice = {
  id: 2,
  number: "F-002-2022",
  customer: "Jane Smith",
  issuedOn: "2022-02-01",
  validUntil: "2022-03-01",
  status: "pending",
  products: [
    {
      name: "Product A",
      desc: "Description for Product A",
      price: 75,
      tax: 20,
      quantity: 1,
    },
    {
      name: "Product B",
      desc: "Description for Product B",
      price: 30,
      tax: 10,
      quantity: 1,
    },
  ],
};

// Call the function with the example invoice object
const invoiceTotal = getInvoiceTotal(exampleInvoice);

// Log the result
console.log(`Invoice Total: ${invoiceTotal}€`);
// => Invoice Total: 123€
```

### \* Task 4

In the `invoice.js` file, establish a function called `getInvoicesOverdue`. This function should take a list of invoice object and a date as a parameter and provide a list of overdue invoices.
💡 An overdue invoice is one where the validUntil date has already passed the date parameter.

```javascript
// invoice.js
function getInvoicesOverdue(invoices, date) {
  // Take an invoice object list as a parameter
  // Find the overdue invoices
  // Return the result
}
```

#### Example

```javascript
// Example usage
const invoicesList = [
  {
    id: 1,
    number: "INV001",
    validUntil: "2022-02-01",
    // other properties...
  },
  {
    id: 2,
    number: "INV002",
    validUntil: "2022-01-15",
    // other properties...
  },
  // Add more invoices as needed
];

const overdueInvoices = getInvoicesOverdue(invoicesList, "2022-02-01");
console.log("Overdue Invoices:", overdueInvoices.length);
// => Overdue Invoices: 1

const overdueInvoices2 = getInvoicesOverdue(invoicesList, "2022-03-19");
console.log("Overdue Invoices:", overdueInvoices2.length);
// => Overdue Invoices: 2

const overdueInvoices3 = getInvoicesOverdue(invoicesList, "2021-03-19");
console.log("Overdue Invoices:", overdueInvoices3.length);
// => Overdue Invoices: 0
```

### \* Task 5

In the `invoice.js` file, create a function named `getInvoicesMatchingCharacter`. This function should take a list of invoice objects and a string as parameters, it should check if the string is included based on the specified customer property of each invoice and returning a list of invoice objects.

```javascript
// invoice.js
function getInvoicesMatchingCharacter(invoices, string) {
  // Take an invoice object list as a parameter
  // Find the invoices matching the customer property
  // Return the result
}
```

#### Example

```javascript
// Example usage
const invoicesList = [
    {
        "id": 1,
        "number": "INV001",
        "customer": "John Doe",
        // other properties...
    },
    {
        "id": 2,
        "number": "INV002",
        "customer": "John Smith",
        // other properties...
    },
    {
        "id": 3,
        "number": "INV002",
        "customer": "Jane Monroe",
        // other properties...
    },
    // Add more invoices as needed
];

const invoicesForJohn = getInvoicesMatchingCharacter(invoicesList, "John");
console.log("Invoices for John:", invoicesForJohn);
// => Invoices for John: [
    {
        "id": 1,
        "number": "INV001",
        "customer": "John Doe",
        // other properties...
    },
    {
        "id": 3,
        "number": "INV002",
        "customer": "John Smith",
        // other properties...
    }
]
const invoicesForJ = getInvoicesMatchingCharacter(invoicesList, "J");
console.log("Invoices for J:", invoicesForJ);
// => Invoices for J: [
    {
        "id": 1,
        "number": "INV001",
        "customer": "John Doe",
        // other properties...
    },
    {
        "id": 2,
        "number": "INV002",
        "customer": "John Smith",
        // other properties...
    },
    {
        "id": 3,
        "number": "INV002",
        "customer": "John Smith",
        // other properties...
    }
]
```

### \* Task 6

In the `invoice.js` file, create a function named `getInvoicesByStatus`. This function should return the invoices in the following order: accepted -> pending -> rejected.

```javascript
// invoice.js
function getInvoicesOrderedByStatus(invoices) {
  // Take an invoice object list as a parameter
  // Find the invoices ordered by status accepted, pending, rejected
  // Return the result
}
```

#### Example

```javascript
const exampleInvoices = [
  {
    id: 1,
    number: "INV001",
    status: "accepted",
    // other properties...
  },
  {
    id: 2,
    number: "INV002",
    status: "pending",
    // other properties...
  },
  {
    id: 3,
    number: "INV002",
    status: "rejected",
    // other properties...
  },
  {
    id: 4,
    number: "INV002",
    status: "pending",
    // other properties...
  },
];

// Call the function with the example invoice object
const invoicesOrderedByStatus = getInvoicesByStatus(exampleInvoices);
// Log the result
console.log(invoicesOrderedByStatus);
// => [
  {
    id: 1,
    number: "INV001",
    status: "accepted",
  },
  {
    id: 2,
    number: "INV002",
    status: "pending",
  },
  {
    id: 4,
    number: "INV002",
    status: "pending",
  },
  {
    id: 3,
    number: "INV002",
    status: "rejected",
  }
]
```

### \* Task 7

In the `invoice.js` file, create a function named `getInvoices`. This function should return the data from the API call to "https://api.klaq.io/intern/invoices".

```javascript
// invoice.js
async function getInvoices() {
  try {
    // fetch the invoices from the "https://api.klaq.io/intern/invoices" url
    // return the data
  } catch (error) {
    console.error(error);
  }
}
```

### Bonus

Show the invoice list fetched using the `getInvoices` function in a table using any libraries or frameworks, presenting the following details:

| Invoice Number | Customer | Issue Date | Due Date | Taxes (€) | Amount (€) |
| -------------- | -------- | ---------- | -------- | --------- | ---------- |

Additionally, you can include an input field that allows you to type the customer's name for personalized information display.

## How to Test Your Code?

Ensure that you have Node.js installed on your computer. If not, you can download it from https://nodejs.org/en/download/.

### Node Installation Verification

If you're unsure about the installation, confirm it by opening the terminal or command prompt:

To check Node installation, type

```bash
node -v
```

To verify NPM installation, type

```bash
npm -v
```

### Getting Started

Run the following command to install the necessary testing library in the project folder.

```bash
npm i
```

### Test your code

Then, use the following command to test your code:

```bash
npm run test task1
```

Replace the task number with the specific task you want to test.

If you encounter any issues while testing your code, please contact Paul immediately. Timely communication of what you're producing is crucial.
