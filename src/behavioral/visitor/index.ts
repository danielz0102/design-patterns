import { Book } from './products/Book'
import { Clothing } from './products/Clothing'
import { Electronics } from './products/Electronics'
import { DiscountVisitor } from './visitors/DiscountVisitor'
import { ReportVisitor } from './visitors/ReportVisitor'

const products = [
  new Book('The Great Gatsby', 'F. Scott Fitzgerald', 10.99),
  new Clothing('T-Shirt', 'M', 19.99),
  new Electronics('Samsung', 'Galaxy S21', 299.99)
]

const discountVisitor = new DiscountVisitor()
const categoryReportVisitor = new ReportVisitor()

products.forEach((product) => {
  product.accept(categoryReportVisitor)
  product.accept(discountVisitor)
  console.log()
})
