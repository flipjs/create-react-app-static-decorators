class Pagination {
  record_count
  record_total
  record_offset
  page_total
  record_limit
  page_current

  constructor (pagination) {
    Object.assign(this, pagination)
  }
}

export default Pagination

