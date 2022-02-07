import React, { Component} from "react";
// import "./FilterableProductTable.css";

class SearchBar extends Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    return (
      <form>
        <input 
          type="text" 
          placeholder="Search..." 
          value={filterText}
          onChange={this.props.handleFilterTextChange}/>
        <p>
          <input 
            type="checkbox" 
            checked={inStockOnly}
            onChange={this.props.handleInStockChange}/>
          {' '}
          Only show products in stock
        </p>
      </form>
    )
  }
}

class ProductCategoryRow extends Component {
  render() {
    const category = this.props.category;
    return (
      <tr><th colSpan="2">{category}</th></tr>
    )
  }
}

class ProductRow extends Component {
  render() {
    const product = this.props.product;
    const name = (product.stocked)
      ? product.name
      : <span style={{color: 'red'}}>{product.name}</span>
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    )
  }
}

class ProductTable extends Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    const rows = [];
    let lastCategory = null;

    this.props.products
      .filter((product) => !inStockOnly || product.stocked)
      .filter((product) => !filterText || product.name.indexOf(filterText) !== -1)
      .forEach((product) => {
        if (product.category !== lastCategory) {
          rows.push(
            <ProductCategoryRow 
              category={product.category}
              key={product.category}/>
          )
        }

        rows.push(
          <ProductRow 
            product={product}
            key={product.name}/>
        )

        lastCategory = product.category;
      })
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inStockOnly: false, 
      filterText: ''
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(event) {
    this.setState({
      ...this.state,
      filterText: event.target.value
    })
  }

  handleInStockChange(event) {
    this.setState({
      ...this.state,
      inStockOnly: event.target.checked
    })
  }

  render() {
    return(
      <div className="FilterableProductTable">
        <SearchBar 
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          handleFilterTextChange={this.handleFilterTextChange}
          handleInStockChange={this.handleInStockChange}/>
        <ProductTable 
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}/>
      </div>
    );
  }
}

export default FilterableProductTable;