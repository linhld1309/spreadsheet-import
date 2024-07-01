export const productsFields = [
  {
    label: "Code",
    key: "code",
    alternateMatches: ["code", "在庫ID"],
    fieldType: {
      type: "input",
    },
    example: "URL",
  },
  {
    label: "Name",
    key: "name",
    alternateMatches: ["first name", "first", "品名"],
    fieldType: {
      type: "input",
    },
    example: "Stephanie",
    validations: [
      {
        rule: "required",
        errorMessage: "Name is required",
        level: "error",
      },
    ],
  },
  {
    label: "Description",
    key: "description",
    alternateMatches: ["description", "chi tiết", "スペック"],
    fieldType: {
      type: "input",
    },
    example: "Sản phầm của Apple",
  },
  {
    label: "Input price",
    key: "input_price",
    alternateMatches: ["Input price", "giá mua", "仕入"],
    fieldType: {
      type: "input",
    },
    example: "1000",
    validations: [
      {
        rule: "required",
        errorMessage: "Input price is required",
        level: "error",
      },
    ],
  },
  {
    label: "Sale price",
    key: "sale_price",
    alternateMatches: ["Sale price", "giá bán", "売上希望", "売上"],
    fieldType: {
      type: "input",
    },
    example: "1500",
    validations: [  
      {
        rule: "required",
        errorMessage: "Sale price is required",
        level: "error",
      },
    ],
  },
  {
    label: "profits",
    key: "profits",
    alternateMatches: ["profits", "利益"],
    fieldType: {
      type: "input",
    },
    example: "500",
  },
  {
    label: "condition",
    key: "condition",
    alternateMatches: ["condition", "状態"],
    fieldType: {
      type: "input",
    },
    example: "売却済み",
  },
  {
    label: "quality",
    key: "quality",
    alternateMatches: ["quality", "品質"],
    fieldType: {
      type: "input",
    },
    example: "S.新品",
  },
  {
    label: "Receipt date",
    key: "receipt_date",
    alternateMatches: ["Receipt date", "入庫日"],
    fieldType: {
      type: "input",
    },
    example: "2023/10/12",
  },
  {
    label: "Sales date",
    key: "sales_date",
    alternateMatches: ["Sales date", "売上日"],
    fieldType: {
      type: "input",
    },
    example: "2023/10/20",
  },
  {
    label: "Image url",
    key: "image_url",
    alternateMatches: ["image", "link ảnh"],
    fieldType: {
      type: "input",
    },
    example: "URL",
  },
] as const
