import { productsData, productsGrid } from "../data/dummy";
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

function Variants() {
  const filterSettings = { type: "Excel" };
  const toolbar = ["Add", "Edit", "Delete", "Update", "Cancel"];
  const editSettings = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
  };
  return (
    <GridComponent
      allowSorting
      allowFiltering
      dataSource={productsData}
      editSettings={editSettings}
      filterSettings={filterSettings}
      toolbar={toolbar}
      selectionSettings={{ type: "Single" }}
      height={500}
      gridLines="Both"
    >
      <ColumnsDirective>
        <ColumnDirective
          field="Sizes"
          headerText="sizes"
          format="C2"
          textAlign="Center"
          width="150"
        ></ColumnDirective>
        <ColumnDirective
          field="color"
          headerText="color"
          format="C2"
          textAlign="Center"
          width="150"
        ></ColumnDirective>
        <ColumnDirective
          field="stock"
          headerText="Stock"
          format="C2"
          textAlign="center"
          width="120"
        ></ColumnDirective>
      </ColumnsDirective>
      <Inject services={[Sort, ContextMenu, Toolbar, Filter, Edit]} />
    </GridComponent>
  );
}
export default Variants;
