import { ordersData, ordersGrid } from "../data/dummy";
import { Header } from "../components";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Sort,
  Inject,
  Toolbar,
  Filter,
  Edit,
} from "@syncfusion/ej2-react-grids";

function Orders() {
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
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-boxdark rounded-3xl">
      <Header category="Page" title="Orders" />
      <div className="control-section">
        <GridComponent
          style={{ backgroundColor: "black" }}
          dataSource={ordersData}
          allowSorting={true}
          editSettings={editSettings}
          allowFiltering={true}
          filterSettings={filterSettings}
          toolbar={toolbar}
        >
          <ColumnsDirective style={{backgroundColor: "black"}}>
            {ordersGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Sort, Toolbar, Filter, Edit]} />
        </GridComponent>
      </div>
    </div>
  );
}

export default Orders;
