import React from 'react';

const products = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

function ProductRow(props) {
    return (
        <div className={props.stocked ? 'ProductRow' : 'ProductRow ProductRow-red'}>
            <div>{props.name}</div>
            <div>{props.price}</div>
        </div>
    )
}

function ProductCategoryRow(props) {
    return (
        <div className="ProductCategoryRow">
            {props.category}
        </div>
    )
}

function ProductTable(props) {
    return (
        <div>
            <div className="ProductTable">
                <div>Name</div>
                <div>Price</div>
            </div>
            {
                props.categories.map(category => {
                    return (
                        <div key={category}>
                            <ProductCategoryRow key={category} category={category} />
                            {
                                props.filteredProducts.map(product => {
                                    if (product.category === category) {
                                        return (
                                            <ProductRow
                                                key={product.name}
                                                stocked={product.stocked} name={product.name}
                                                price={product.price} />
                                        )
                                    } else {
                                        return null;
                                    }
                                })
                            }
                        </div>
                    )

                })
            }
            {/* <ProductRow stocked={true} name={'Football'} price={'49.99'} />
            <ProductRow stocked={false} name={'Basketball'} price={'29.99'} />
            <ProductCategoryRow category="Electronics" />
            <ProductRow stocked={true} name={'iPod Touch'} price={'99.99'} /> */}
        </div>
    )
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     searchStr: '',
        //     isShowStocked: false
        // };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        // const value = event.target.name === 'searchStr' ? event.target.value : event.target.checked;
        // const name = event.target.name;
        // this.setState({
        //     [name]: value
        // });
        this.props.onFilterChange(event);
    }

    render() {
        const filterText = this.props.filterText;
        const isStockOnly = this.props.isStockOnly;
        return (
            <form className="SearchBar">
                <label>
                    <input type="text" placeholder="Search..." name="filterText" value={filterText} onChange={this.handleChange} />
                </label>
                <label>
                    <input type="checkbox" name="isStockOnly" checked={isStockOnly} onChange={this.handleChange} />
                    Only show products in stock
                </label>
            </form>
        )
    }
}

// function FilterableProductTable(props) {
//     return (
//         <div>
//             <SearchBar />
//             <ProductTable />
//         </div>
//     )
// }

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            isStockOnly: false
        }
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    handleFilterChange(event) {
        const value = event.target.name === 'filterText' ? event.target.value : event.target.checked;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        const products = this.props.products;
        const filterText = this.state.filterText;
        const isStockOnly = this.state.isStockOnly;
        let categories = [];
        let filteredProducts = [];
        products.forEach(product => {
            if (product.category && (categories.indexOf(product.category) === -1)) {
                categories.push(product.category);
            }
            let willContain = false;
            if (isStockOnly) {
                if (product.name && (product.name.indexOf(filterText) !== -1) && product.stocked) {
                    willContain = true;
                }
            } else {
                if (product.name && (product.name.indexOf(filterText) !== -1)) {
                    willContain = true;
                }
            }
            if (willContain) {
                filteredProducts.push(product);
            }
        });
        return (
            <div>
                <SearchBar
                    filterText={filterText}
                    isStockOnly={isStockOnly}
                    onFilterChange={this.handleFilterChange} />
                <ProductTable
                    categories={categories}
                    filteredProducts={filteredProducts} />
            </div>
        );
    }
}

export { FilterableProductTable, products };