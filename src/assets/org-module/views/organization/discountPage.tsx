/* eslint-disable @typescript-eslint/no-explicit-any */
export const DISCOUNT_TABLE_MEMO = [
  {
    Header: "",
    id: "discount_table",
    isVisible: false,
    hideHeader: false,
    columns: [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Discount Type",
        accessor: "discount_name",
      },
      {
        Header: "Time",
        accessor: "time",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Discount",
        accessor: "discount",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Actions",
        accessor: "actions",
      },
    ],
  },
];

export const DISCOUNT_TABLE_DATA = [
  {
    id: 1,
    discount_name: "Sample Discount",

    type: "20",
    status: "Active",
    discount_type: "FXD",
    discount_value: 10,
    product_type: "Laptop",
    product: "Dell Inspiron 5000",
    start_date: "2023-01-01",
    end_date: "2023-09-01",
    start_time: "01:13:00",
    end_time: "16:13:00",
    // discount: getDiscountValue(item.discount_value, item.discount_type),
  },
  {
    id: 2,
    discount_name: "Discount 2",
    time: "",
    type: "15",
    status: "Active",
    discount_type: "PER",
    discount_value: 8,
    product_type: "Smartphone",
    product: "iPhone 13",
    start_date: "2023-02-15",
    start_time: "12:13:00",
    end_date: "2023-10-15",
    end_time: "16:13:00",
  },
  {
    id: 3,
    discount_name: "Promo Deal",
    time: "",
    type: "25",
    status: "Inactive",
    discount_type: "PER",
    discount_value: 15,
    product_type: "Tablet",
    product: "Samsung Galaxy Tab S7",
    start_date: "2023-03-10",
    start_time: "12:13:00",
    end_date: "2023-11-10",
    end_time: "16:13:00",
  },
  {
    id: 4,
    discount_name: "Special Offer",
    time: "",
    type: "10",
    status: "Active",
    discount_type: "PER",
    discount_value: 5,
    product_type: "Desktop",
    product: "HP Pavilion 27",
    start_date: "2023-04-05",
    start_time: "12:13:00",
    end_date: "2023-12-05",
    end_time: "16:13:00",
  },
  {
    id: 5,
    discount_name: "Tech Sale",
    time: "",
    type: "18",
    status: "Active",
    discount_type: "PER",
    discount_value: 12,
    product_type: "Headphones",
    product: "Sony WH-1000XM4",
    start_date: "2023-05-20",
    start_time: "12:13:00",
    end_date: "2023-01-20",
    end_time: "16:13:00",
  },
  {
    id: 6,
    discount_name: "Gadget Discount",
    time: "",
    type: "22",
    status: "Inactive",
    discount_type: "PER",
    discount_value: 18,
    product_type: "Camera",
    product: "Canon EOS R5",
    start_date: "2023-06-15",
    start_time: "12:13:00",
    end_date: "2023-02-15",
    end_time: "16:13:00",
  },
  {
    id: 7,
    discount_name: "Electronics Sale",
    time: "",
    type: "15",
    status: "Active",
    discount_type: "PER",
    discount_value: 10,
    product_type: "Smartwatch",
    product: "Apple Watch Series 7",
    start_date: "2023-07-01",
    start_time: "12:13:00",
    end_date: "2023-03-01",
    end_time: "16:13:00",
  },
  {
    id: 8,
    discount_name: "Summer Tech",
    time: "",
    type: "30",
    status: "Active",
    discount_type: "PER",
    discount_value: 20,
    product_type: "Speaker",
    product: "Bose SoundLink Revolve+",
    date: "2023-08-15",
    start_time: "12:13:00",
    start_date: "2023-04-15",

    end_date: "2023-04-15",
    end_time: "16:13:00",
  },
];

// export const formInputs: any = [
//   {
//     username: "kalyan",
//     label: "Select example",
//     type: "select",
//     options: [
//       { label: "Option 123213123", value: "optione_1" },
//       { label: "Option 2", value: "option_2" },
//       { label: "Option 3", value: "option_2" },
//     ],
//   },
//   { username: "name", type: "text" },
//   { username: "contact", type: "text" },
//   {
//     username: "role",
//     label: "Choose an option",
//     type: "select",
//     options: [
//       { label: "Option 1", value: "option_1" },
//       { label: "Option 2", value: "option_2" },
//     ],
//   },
//   { username: "title", type: "text" },
//   { username: "status", label: "Status", type: "checkbox", status: true },
// ];
