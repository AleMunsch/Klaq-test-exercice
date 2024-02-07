const { getInvoicesMatchingCharacter } = require("../invoice");

const exampleInvoices = [
  {
    id: 1,
    number: "F-001-2022",
    customer: "John Doe",
    issuedOn: "2024-01-15",
    validUntil: "2024-02-15",
    status: "accepted",
    products: [
      {
        name: "Product A",
        desc: "Description for Product A",
        price: 50,
        tax: 10,
        quantity: 1,
      },
      {
        name: "Product B",
        desc: "Description for Product B",
        price: 30,
        tax: 20,
        quantity: 1,
      },
    ],
  },
  {
    id: 2,
    number: "F-002-2022",
    customer: "Jane Smith",
    issuedOn: "2023-02-01",
    validUntil: "2023-03-01",
    status: "pending",
    products: [
      {
        name: "Product C",
        desc: "Description for Product C",
        price: 75,
        tax: 20,
        quantity: 2,
      },
      {
        name: "Product C",
        desc: "Description for Product C",
        price: 75,
        tax: 20,
        quantity: 1,
      },
    ],
  },
  {
    id: 3,
    number: "F-003-2022",
    customer: "Bob Johnson",
    issuedOn: "2024-03-10",
    validUntil: "2024-04-10",
    status: "rejected",
    products: [
      {
        name: "Product D",
        desc: "Description for Product D",
        price: 40,
        tax: 20,
        quantity: 1,
      },
      {
        name: "Product E",
        desc: "Description for Product E",
        price: 60,
        tax: 10,
        quantity: 2,
      },
      {
        name: "Product E",
        desc: "Description for Product E",
        price: 60,
        tax: 10,
        quantity: 3,
      },
    ],
  },
  {
    id: 4,
    number: "F-004-2022",
    customer: "Alice Brown",
    issuedOn: "2023-04-05",
    validUntil: "2023-05-05",
    status: "accepted",
    products: [
      {
        name: "Product E",
        desc: "Description for Product E",
        price: 60,
        tax: 10,
        quantity: 1,
      },
      {
        name: "Product F",
        desc: "Description for Product F",
        price: 25,
        tax: 20,
        quantity: 1,
      },
    ],
  },
  {
    id: 5,
    number: "F-005-2022",
    customer: "Charlie White",
    issuedOn: "2024-05-20",
    validUntil: "2024-06-20",
    status: "pending",
    products: [
      {
        name: "Product G",
        desc: "Description for Product G",
        price: 55,
        tax: 20,
        quantity: 7,
      },
      {
        name: "Product H",
        desc: "Description for Product H",
        price: 30,
        tax: 20,
        quantity: 2,
      },
    ],
  },
  {
    id: 6,
    number: "F-006-2022",
    customer: "Eva Davis",
    issuedOn: "2023-06-12",
    validUntil: "2023-07-12",
    status: "accepted",
    products: [
      {
        name: "Product I",
        desc: "Description for Product I",
        price: 45,
        tax: 20,
        quantity: 1,
      },
    ],
  },
  {
    id: 7,
    number: "F-007-2022",
    customer: "Samuel Miller",
    issuedOn: "2022-07-08",
    validUntil: "2022-08-08",
    status: "pending",
    products: [
      {
        name: "Product J",
        desc: "Description for Product J",
        price: 65,
        tax: 20,
        quantity: 1,
      },
      {
        name: "Product K",
        desc: "Description for Product K",
        price: 20,
        tax: 20,
        quantity: 5,
      },
    ],
  },
  {
    id: 8,
    number: "F-008-2022",
    customer: "Linda Taylor",
    issuedOn: "2022-08-25",
    validUntil: "2022-09-25",
    status: "rejected",
    products: [
      {
        name: "Product L",
        desc: "Description for Product L",
        price: 35,
        tax: 20,
        quantity: 3,
      },
      {
        name: "Product M",
        desc: "Description for Product M",
        price: 50,
        tax: 5,
        quantity: 2,
      },
    ],
  },
  {
    id: 9,
    number: "F-009-2022",
    customer: "John Wilson",
    issuedOn: "2022-09-18",
    validUntil: "2022-10-18",
    status: "accepted",
    products: [
      {
        name: "Product N",
        desc: "Description for Product N",
        price: 70,
        tax: 20,
        quantity: 1,
      },
    ],
  },
  {
    id: 10,
    number: "F-010-2022",
    customer: "Olivia Moore",
    issuedOn: "2022-10-10",
    validUntil: "2022-11-10",
    status: "pending",
    products: [
      {
        name: "Product O",
        desc: "Description for Product O",
        price: 40,
        tax: 5,
        quantity: 1,
      },
      {
        name: "Product P",
        desc: "Description for Product P",
        price: 60,
        tax: 10,
        quantity: 1,
      },
    ],
  },
];

describe("getInvoicesMatchingCustomer", () => {
  describe("given test cases", () => {
    const invoicesList = [
      {
        id: 1,
        number: "INV001",
        customer: "John Doe",
        // other properties...
      },
      {
        id: 2,
        number: "INV002",
        customer: "John Smith",
        // other properties...
      },
      {
        id: 3,
        number: "INV002",
        customer: "Jane Monroe",
        // other properties...
      },
      // Add more invoices as needed
    ];

    it("returns the list of invoices matching the customer", () => {
      const matchingInvoices = getInvoicesMatchingCharacter(
        invoicesList,
        "John Doe"
      );
      expect(matchingInvoices.length).toBe(1);
      const matchingInvoices2 = getInvoicesMatchingCharacter(
        invoicesList,
        "John Smith"
      );
      expect(matchingInvoices2.length).toBe(1);

      const matchingInvoices3 = getInvoicesMatchingCharacter(
        invoicesList,
        "Jane Johnson"
      );
      expect(matchingInvoices3.length).toBe(0);
    });
  });

  describe("all tests cases", () => {
    const expectedResult = [4, 7, 1, 3, 1, 0, 1, 1, 1, 1, 1, 0];
    const lowerCases = [
      "j",
      "a",
      "jane",
      "john",
      "john doe",
      "john smith",
      "jane smith",
      "bob johnson",
      "alice brown",
      "charlie white",
      "eva davis",
      "rene cotty",
    ];
    const upperCases = [
      "J",
      "A",
      "Jane",
      "John",
      "John Doe",
      "John Smith",
      "Jane Smith",
      "Bob Johnson",
      "Alice Brown",
      "Charlie White",
      "Eva Davis",
      "Rene Cotty",
    ];
    for (const testCase of lowerCases) {
      it(`[LOWERCASE] returns the list of invoices matching the customer ${testCase}`, () => {
        expect(
          getInvoicesMatchingCharacter(exampleInvoices, testCase).length
        ).toBe(expectedResult[lowerCases.indexOf(testCase)]);
      });
    }
    for (const testCase of upperCases) {
      it(`[UPPERCASE] returns the list of invoices matching the customer ${testCase}`, () => {
        expect(
          getInvoicesMatchingCharacter(exampleInvoices, testCase).length
        ).toBe(expectedResult[upperCases.indexOf(testCase)]);
      });
    }
  });
});
