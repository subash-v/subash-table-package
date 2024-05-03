import React, { useState } from "react";
import "./Table.css";
interface TableProps {
  children: any;
  styles: any;
}
interface HeaderProps {
  children: any;
}
interface CaptionProps {
  children: any;
}
interface SearchProps {
  onSearch?: any;
  value?: any;
  placeholder?: any;
}
interface RowProps {
  children: any;
  highlighter?: any;
  inactive?: any;
  background?: any;
  borderLeft?: any;
  styles?: any;
  border?: any;
  error?: any;
}
interface FooterProps {
  children: any;
  styles: any;
}
export const Table: React.FC<TableProps> = ({ children, styles }) => {
  return (
    <div className="relative w-full" style={styles}>
      <table className="w-full text-sm text-left text-[#363636] sm:rounded-lg overflow-x-auto ">
        {children}
      </table>
    </div>
  );
};

export const Row: React.FC<RowProps> = ({
  children,
  highlighter,
  inactive,
  background,
  borderLeft,
  styles,
  border,
  error,
}) => {
  return (
    <tbody>
      <tr
        className={"hover:bg-[#f5f5f5]"}
        style={{
          backgroundColor:
            (highlighter && !inactive)
              ? "rgb(255 67 94 / 35%)"
              : inactive
              ? "#6666"
              : background
              ? background
              : "#fff",
          borderLeft: borderLeft,
          ...styles,
        }}
      >
        {Array.isArray(children) ? (
          children?.map((child, i) => {
            return (
              child && (
                <Cell
                  key={i}
                  border={border}
                  inactive={inactive}
                  error={error}
                  colSpan={child.props.colSpan}
                  background={child.props.background}
                  width={child.props.width}
                  highlighter={highlighter}
                >
                  {child}
                </Cell>
              )
            );
          })
        ) : (
          <td
            className="px-6 border border-solid border-[#ECEEF0] py-4"
            colSpan={children.props.colSpan}
          >
            {children}
          </td>
        )}
      </tr>
    </tbody>
  );
};
export const Cell = (props) => (
  <td
    style={{
      border: props.border
        ? props.error
          ? "1px solid #ff435e"
          : "1px solid rgba(0,0,0,0.2)"
        : "",
      color: props.inactive ? "#666666" : "",
      padding: props?.children?.props?.padding,
      verticalAlign: props?.children?.props?.verticalAlign,
      maxWidth: props?.width || "",
      backgroundColor:
        props.highlighter && !props.inactive
          ? "rgb(255 67 94 / 35%)"
          : props.inactive
          ? "#6666"
          : props.background
          ? props.background
          : "",
    }}
    className=" border border-solid border-[#ECEEF0] "
    colSpan={props.colSpan}
  >
    {props.children}
  </td>
);
export const Header: React.FC<HeaderProps> = ({ children }) => {
  const [showIcons, setShowIcons] = useState(null);
  return (
    <thead className="text-xs text-[#666] bg-[#f5f5f5]">
      <tr>
        {Array.isArray(children) ? (
          children?.map((child: any, i: number) => {
            // const { sort, onSort, filter, isSorted } = child?.props;
            // console.log(child)
            return (
              child && (
                <th
                  key={i}
                  scope="col"
                  className="border border-solid border-[#ECEEF0] bg-[#f5f5f5]"
                  onMouseEnter={() => showIcons !== i && setShowIcons(i)}
                  onMouseLeave={() => showIcons === i && setShowIcons(null)}
                >
                  <div className="flex items-center justify-between ">
                    <div className="w-[calc(100%-50px)]"> {child}</div>
                    {showIcons === i && (
                      <div className="flex items-center space-x-1">
                        {child?.props?.filter && (
                          <div>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.4996 16.5667C12.533 16.8167 12.4496 17.0833 12.258 17.2583C12.1809 17.3356 12.0893 17.3969 11.9885 17.4387C11.8877 17.4805 11.7796 17.502 11.6705 17.502C11.5613 17.502 11.4532 17.4805 11.3524 17.4387C11.2516 17.3969 11.16 17.3356 11.083 17.2583L7.74129 13.9167C7.6504 13.8278 7.58129 13.7192 7.53937 13.5992C7.49745 13.4792 7.48384 13.3511 7.49962 13.225V8.95833L3.50795 3.85C3.37263 3.67628 3.31157 3.45605 3.33811 3.23744C3.36466 3.01883 3.47665 2.81962 3.64962 2.68333C3.80795 2.56667 3.98295 2.5 4.16629 2.5H15.833C16.0163 2.5 16.1913 2.56667 16.3496 2.68333C16.5226 2.81962 16.6346 3.01883 16.6611 3.23744C16.6877 3.45605 16.6266 3.67628 16.4913 3.85L12.4996 8.95833V16.5667ZM5.86629 4.16667L9.16629 8.38333V12.9833L10.833 14.65V8.375L14.133 4.16667H5.86629Z"
                                fill="#9CA3AF"
                              />
                            </svg>
                          </div>
                        )}

                        {child?.props?.sort && (
                          <div
                            onClick={
                              child?.props?.onSort && child?.props?.onSort
                            }
                            className=" relative"
                          >
                            {child?.props?.isSorted && (
                              <div className=" absolute top-0 right-0 w-2 h-2 rounded-full bg-[#0c9675]" />
                            )}
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.66634 13.3332H3.33301L8.33301 18.3332V1.6665H6.66634V13.3332ZM11.6663 4.1665V18.3332H13.333V6.6665H16.6663L11.6663 1.6665V4.1665Z"
                                fill="#9CA3AF"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </th>
              )
            );
          })
        ) : (
          <th
            scope="col"
            className="border border-solid border-[#ECEEF0] bg-[#f5f5f5]"
          >
            <div className="flex items-center">{children}</div>
          </th>
        )}
      </tr>
    </thead>
  );
};

export const Caption: React.FC<CaptionProps> = ({ children }) => {
  return (
    <caption className="block py-5 text-lg font-semibold text-left text-gray-900 bg-white ">
      {children}
    </caption>
  );
};

export const TableSearch: React.FC<SearchProps> = ({
  onSearch,
  value,
  placeholder,
}) => {
  return (
    <div className="pb-4 bg-white ">
      <label htmlFor="table-search" className="sr-only">
        Search
      </label>
      <div className="relative mt-1">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          id="table-search"
          value={value}
          className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
          placeholder={placeholder ?? "Search for items"}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export const TableFooter: React.FC<FooterProps> = ({ children, styles }) => {
  return (
    <nav
      className="flex items-center justify-between py-2"
      aria-label="Table navigation"
      style={styles}
    >
      {children}
    </nav>
  );
};
