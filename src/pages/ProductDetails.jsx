import React, { useState } from "react";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  Toolbar,
  RichTextEditorComponent,
} from "@syncfusion/ej2-react-richtexteditor";
import { Header } from "../components";
import ImageUploader from "../components/ImageUploader";
import Variants from "../components/Variants";

const ProductDetails = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-boxdark dark:text-white rounded-3xl">
      <Header category="Page" title="Add Product" />
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <div className="dark:border-[#555] border-2 rounded-xl shadow-1">
            <h1 className="text-lg font-semibold border-b-2 dark:border-[#555] px-6 py-3">
              Product information
            </h1>
            <form className="px-6 py-3 flex flex-col gap-7">
              <div className="flex flex-col gap-2">
                <label>Title</label>
                <input
                  type="text"
                  placeholder="Title of the product"
                  className="p-2 border-2 border-gray-100 rounded-md dark:border-gray-600 dark:placeholder:text-gray-300 dark:bg-boxdark focus:shadow-6"
                />
              </div>
              <div className="flex flex-row gap-7 justify-between">
                <div className="flex flex-col gap-2 w-full">
                  <label>SKU</label>
                  <input
                    type="text"
                    placeholder="eg. 348123956"
                    className="p-2 border-2 border-gray-100 rounded-md dark:border-gray-600 dark:placeholder:text-gray-300 dark:bg-boxdark focus:shadow-6"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label>Price</label>
                  <input
                    type="text"
                    placeholder="0.0"
                    className="p-2 border-2 border-gray-100 rounded-md dark:border-gray-600 dark:placeholder:text-gray-300 dark:bg-boxdark focus:shadow-6"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full pb-3">
                <label>Description</label>
                <RichTextEditorComponent
                  height={400}
                  className="rounded-md overflow-hidden"
                >
                  <Inject
                    services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]}
                  />
                </RichTextEditorComponent>
              </div>
            </form>
          </div>
          <div className="border-2 dark:border-[#555] rounded-xl shadow-1 mt-10">
            <h1 className="text-lg font-semibold border-b-2 dark:border-[#555] px-6 py-3">
              Product Images
            </h1>
            <ImageUploader />
          </div>
          <div className="border-2 dark:border-[#555] rounded-xl shadow-1 mt-10">
            <h1 className="text-lg font-semibold border-b-2 dark:border-[#555] px-6 py-3">
              Variants
            </h1>
            <Variants />
          </div>
        </div>
        <div className="col-span-1">
          <div className="border-2 dark:border-[#555] rounded-xl shadow-1">
            <h1 className="text-lg font-semibold border-b-2 dark:border-[#555] px-6 py-3">
              Product information
            </h1>
            <div className="px-6 py-3 flex flex-col gap-7">
              <div className="flex flex-col gap-2 w-full">
                <label>Vendor</label>
                <input
                  type="text"
                  placeholder="eg. Nike"
                  className="p-2 border-2 border-gray-100 rounded-md dark:border-gray-600 dark:placeholder:text-gray-300 dark:bg-boxdark focus:shadow-6"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label>Category</label>
                {/* Select Button */}
                <div>
                  <button
                    onClick={toggleDropdown}
                    className="inline-flex justify-between items-center w-60 px-4 py-2 text-sm font-medium rounded-md border-2 dark:border-[#555] focus:outline-none focus:ring-1"
                  >
                    <span>{selectedOption || "Select an option"}</span>
                    <svg
                      className={`ml-2.5 h-5 w-5 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {isOpen && (
                    <div className="origin-top-right absolute w-75 mt-2 rounded-md shadow-lg ring-1 ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {options.map((option) => (
                          <div
                            key={option}
                            onClick={() => handleOptionClick(option)}
                            className="block px-4 py-2 text-sm bg-white hover:bg-slate-200 focus:bg-slate-500 cursor-pointer"
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label>Price</label>
                <input
                  type="text"
                  placeholder="0.0"
                  className="p-2 border-2 border-gray-100 rounded-md dark:border-gray-600 dark:placeholder:text-gray-300 dark:bg-boxdark focus:shadow-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
