import RadioButton from "./RadioButton";
import React, { useState } from "react";

const NavItem = () => {
  const [selected, setSelected] = useState("internal");
  const [isChecked, setIsChecked] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLinksOpen, setIsLinksOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isCategory, setIsCategory] = useState(false);
  const options = ["collections", "Option 2", "Option 3", "Option 4"];
  const handleLinkClick = (option) => {
    setSelectedLink(option);
    setIsLinksOpen(false);
    if (option === "collections") {
      setIsCategory(true);
    } else {
      setIsCategory(false);
    }
  };
  const handleCategoryClick = (option) => {
    setSelectedCategory(option);
    setIsCategoriesOpen(false);
  };

  return (
    <section className="border border-[#444] rounded-sm">
      <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-[#2F2F2F]">
        <p className="text-sm">Nav Item 01</p>
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </div>
      </div>
      <div className="p-3">
        <h1 className="text-xl font-semibold mb-3">Link</h1>
        <label className="text-sm">type</label>
        <div className="grid grid-cols-2 gap-y-6 mt-3">
          <div className={`flex gap-3`}>
            <RadioButton
              label="Internal Link"
              value="internal"
              checked={selected}
              onChange={setSelected}
            />
            <RadioButton
              label="External Link"
              value="external"
              checked={selected}
              onChange={setSelected}
            />
          </div>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="hidden"
            />
            <span
              className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                isChecked
                  ? "bg-blue-500 border-blue-500"
                  : "bg-white border-gray-300"
              }`}
            >
              {isChecked && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              )}
            </span>
            <span className="ml-2 text-sm">Open in new tab</span>
          </label>
          <div className={`flex flex-col gap-2 span col-span-2`}>
            <label className="text-sm">
              Label<span className={`text-red-500`}>*</span>
            </label>
            <input
              type="text"
              placeholder="link label"
              className="p-2 border border-gray-100 rounded-md outline-gray-200 focus:shadow-6 dark:bg-transparent dark:placeholder:text-white dark:placeholder:opacity-80 w-6/12"
            />
          </div>
          <div>
            <label className="text-sm">
              Document to link to<span className={`text-red-500`}>*</span>
            </label>
            {/* Select Button */}
            <div className={`mt-2`}>
              <button
                onClick={() => setIsLinksOpen(!isLinksOpen)}
                className="inline-flex justify-between items-center w-60 px-4 py-2 text-sm font-medium rounded-md border focus:outline-none"
              >
                <span>{selectedLink || "Select an option"}</span>
                <svg
                  className={`ml-2.5 h-5 w-5 transition-transform duration-200 ${
                    isLinksOpen ? "rotate-180" : "rotate-0"
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
              {isLinksOpen && (
                <div className="origin-top-right absolute w-75 mt-2 rounded-md shadow-lg dark:bg-transparent focus:outline-none">
                  <div className="py-1">
                    {options.map((option) => (
                      <div
                        key={option}
                        onClick={() => handleLinkClick(option)}
                        className="block px-4 py-2 text-sm bg-white dark:bg-boxdark-2 hover:bg-slate-200 dark:hover:bg-boxdark focus:bg-slate-500 cursor-pointer"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          {isCategory && (
            <div>
              <label className="text-sm">
                Category<span className={`text-red-500`}>*</span>
              </label>
              {/* Select Button */}
              <div className={`mt-2`}>
                <button
                  onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                  className="inline-flex justify-between items-center w-60 px-4 py-2 text-sm font-medium rounded-md border focus:outline-none"
                >
                  <span>{selectedCategory || "Select an option"}</span>
                  <svg
                    className={`ml-2.5 h-5 w-5 transition-transform duration-200 ${
                      isCategoriesOpen ? "rotate-180" : "rotate-0"
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
                {isCategoriesOpen && (
                  <div className="origin-top-right absolute w-75 mt-2 rounded-md shadow-lg dark:bg-transparent focus:outline-none">
                    <div className="py-1">
                      {options.map((option) => (
                        <div
                          key={option}
                          onClick={() => handleCategoryClick(option)}
                          className="block px-4 py-2 text-sm bg-white dark:bg-boxdark-2 hover:bg-slate-200 dark:hover:bg-boxdark focus:bg-slate-500 cursor-pointer"
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default NavItem;
