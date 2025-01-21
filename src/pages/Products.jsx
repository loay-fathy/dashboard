import { productsData, productsGrid } from "../data/dummy";
import { Header } from "../components";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Sort,
  Inject,
  Toolbar,
  Filter,
  ContextMenu,
  Edit,
  Page,
} from "@syncfusion/ej2-react-grids";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Products() {
  const filterSettings = { type: "Excel" };
  const toolbar = ["Add", "Edit", "Delete", "Update", "Cancel"];
  const editSettings = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
  };
  const customeridRule = { required: true, minLength: 5 };
  const orderidRules = { required: true, number: true };
  const freightRules = { required: true, min: 0 };

  const [selectedRecord, setSelectedRecord] = useState(null); // State to store selected row
  const navigate = useNavigate(); // React Router's navigation hook

  // Handle row selection
  const handleRowSelected = (args) => {
    setSelectedRecord(args.data); // Set the selected record data
  };

  // Handle Edit button click
  const handleEditClick = () => {
    if (selectedRecord) {
      // Navigate to Edit Product page with the selected product ID
      navigate(`/edit-product/${selectedRecord.OrderID}`);
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-boxdark dark:text-white rounded-3xl">
      <Header category="Page" title="Products" />

      <div className="control-section">
        <GridComponent
          allowPaging
          allowSorting
          allowFiltering
          dataSource={productsData}
          editSettings={editSettings}
          filterSettings={filterSettings}
          toolbar={toolbar}
          selectionSettings={{ type: "Single" }}
          rowSelected={handleRowSelected}
        >
          <ColumnsDirective>
            {productsGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
            <ColumnDirective
              field="OrderID"
              headerText="Order ID"
              width="120"
              textAlign="center"
              validationRules={orderidRules}
              isPrimaryKey={true}
            ></ColumnDirective>
            <ColumnDirective
              field="CustomerName"
              headerText="Customer Name"
              width="150"
              validationRules={customeridRule}
            ></ColumnDirective>
            <ColumnDirective
              field="Freight"
              headerText="Freight"
              width="120"
              format="C2"
              textAlign="center"
              validationRules={freightRules}
              editType="numericedit"
            />
          </ColumnsDirective>
          <Inject services={[Sort, ContextMenu, Page, Toolbar, Filter, Edit]} />
        </GridComponent>
        {/* Edit Button */}
        <button
          onClick={handleEditClick}
          disabled={!selectedRecord} // Disable if no row is selected
          style={{ marginTop: "20px" }}
        >
          edit
        </button>
      </div>
    </div>
  );
}

export default Products;
