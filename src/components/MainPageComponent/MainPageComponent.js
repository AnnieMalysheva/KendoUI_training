import React from 'react'
import { Grid, GridColumn, GridCell } from '@progress/kendo-react-grid'

import data from '../../data.json'

class CustomCell extends GridCell {
    render() {
        return(
            (this.props.dataItem[this.props.field])
            ?
            <td className="k-icon k-i-minus"/>
            :
            <td />
        )
    }
}

class MainPageComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            gridData: data
        }
    }
    render() {
        return(
            <div className="main-container">
                <h3>Kendo UI Example</h3>
                <Grid style={{height: '600px'}} data={this.state.gridData}>
                    <GridColumn field="ProductID" title="ID" width="100px"/>
                    <GridColumn field="ProductName" title="Name"/>
                    <GridColumn field="Category.CategoryName" title="CategoryName" width="150px"/>
                    <GridColumn field="UnitPrice" title="Price " width="150px"/>
                    <GridColumn field="UnitsInStock" title="In stock" width="150px"/>
                    <GridColumn field="Discontinued" title="Discontinued" width="100px" cell={CustomCell}/>
                </Grid>
            </div>
        )
    }
}

export default MainPageComponent;