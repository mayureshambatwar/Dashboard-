function RecentSalesTable({ items }) {
    const handleStatus = (status) => {
      switch (status) {
        case "Approved":
          return "success";
        case "Pending":
          return "warning";
        case "Rejected":
          return "danger";
        default:
          return "secondary";  
      }
    };
  
    console.log("Items:", items);
  
    return (
      <table className="table table-borderless datatable text-decoration-none">
        <thead className="table-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Customer</th>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody className="text-decoration-none">
          {items && items.length > 0 ? (
            items.map((item) => (
              <tr key={item.id}>
                <th scope="row">
                  <a href="#" className="text-decoration-none">{item.number}</a>
                </th>
                <td>{item.customer}</td>
                <td>
                  <a href="#" className="text-primary text-decoration-none">
                    {item.product}
                  </a>
                </td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <span className={`badge bg-${handleStatus(item.status)}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No recent sales available</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
  
  export default RecentSalesTable;
  