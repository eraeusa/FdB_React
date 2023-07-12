import React from "react";
// import { useTable } from 'react-table'
import moment from "moment";
import styled from "styled-components";
import summary from "./SearchResult1.json";
import hourreport from "./SearchResult2.json";

import "./App.css";

const Cell = styled.td`
  background-color: ${(props) =>
    props.value > 99
      ? "limegreen "
      : props.value < 100 && props.value > 90
      ? "orange"
      : props.value < 90 && props.value > 0
      ? "red"
      : "white"};
`;
// const CellHr= styled.td `
// background-color:  ${props =>
//   props.value > 99
//     ? "darksealightgreen"
//     : props.value < 100 && props.value > 90
//     ? "orange"
//     : props.value < 90 && props.value > 0
//     ? "red"
//   : "#282c34" };
//   `

const shift = ["1st", "2nd"];
const tables = [0, 1];
// const cols = ["1-1","1-2","2-1","2-2","3-1","3-2","4-1","4-2","5-1","5-2","6-1","6-2","A-1","A-2","B-1","B-2","C-1","C-2"];
const delay = 6000;

function App() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setIndex((prevTable) => (prevTable === 0 ? 1 : 0)),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  var date = moment().utcOffset("+20:00").format("YYYY-MM-DD hh:mm:ss a");
  
  // console.log(len(json))
  // const [items, setItems] = useState([])

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((res) => res.json())
  //     .then((resJson) => {
  //       const data = JSON.parse(resJson)
  //       setItems(data)
  //   })
  // }, [])
  const columns = React.useMemo(
    () => [
      {
        Header: "1st",
        accessor: "1-1",
        Cell: ({ row }) =>
          row.original.Columns["1-1"] ? row.original.Columns["1-1"] : "-",
      },
      {
        Header: "2nd",
        accessor: "1-2",
        Cell: ({ row }) =>
          row.original.Columns["1-2"] ? row.original.Columns["1-2"] : "-",
      },
      {
        Header: "1st",
        accessor: "2-1",
        Cell: ({ row }) =>
          row.original.Columns["2-1"] ? row.original.Columns["2-1"] : "-",
      },
      {
        Header: "2nd",
        accessor: "2-2",
        Cell: ({ row }) =>
          row.original.Columns["2-2"] ? row.original.Columns["2-2"] : "-",
      },
      {
        Header: "1st",
        accessor: "3-1",
        Cell: ({ row }) =>
          row.original.Columns["3-1"] ? row.original.Columns["3-1"] : "-",
      },
      {
        Header: "2nd",
        accessor: "3-2",
        Cell: ({ row }) =>
          row.original.Columns["3-2"] ? row.original.Columns["3-2"] : "-",
      },
      {
        Header: "1st",
        accessor: "4-1",
        Cell: ({ row }) =>
          row.original.Columns["4-1"] ? row.original.Columns["4-1"] : "-",
      },
      {
        Header: "2nd",
        accessor: "4-2",
        Cell: ({ row }) =>
          row.original.Columns["4-2"] ? row.original.Columns["4-2"] : "-",
      },
      {
        Header: "1st",
        accessor: "5-1",
        Cell: ({ row }) =>
          row.original.Columns["5-1"] ? row.original.Columns["5-1"] : "-",
      },
      {
        Header: "2nd",
        accessor: "5-2",
        Cell: ({ row }) =>
          row.original.Columns["5-2"] ? row.original.Columns["5-2"] : "-",
      },
      {
        Header: "1st",
        accessor: "6-1",
        Cell: ({ row }) =>
          row.original.Columns["6-1"] ? row.original.Columns["6-1"] : "-",
      },
      {
        Header: "2nd",
        accessor: "6-2",
        Cell: ({ row }) =>
          row.original.Columns["6-2"] ? row.original.Columns["6-2"] : "-",
      },
      {
        Header: "1st",
        accessor: "A-1",
        Cell: ({ row }) =>
          row.original.Columns["A-1"] ? row.original.Columns["A-1"] : "-",
      },
      {
        Header: "2nd",
        accessor: "A-2",
        Cell: ({ row }) =>
          row.original.Columns["A-2"] ? row.original.Columns["A-2"] : "-",
      },
      {
        Header: "1st",
        accessor: "B-1",
        Cell: ({ row }) =>
          row.original.Columns["B-1"] ? row.original.Columns["B-1"] : "-",
      },
      {
        Header: "2nd",
        accessor: "B-2",
        Cell: ({ row }) =>
          row.original.Columns["B-2"] ? row.original.Columns["B-2"] : "-",
      },
      {
        Header: "1st",
        accessor: "C-1",
        Cell: ({ row }) =>
          row.original.Columns["C-1"] ? row.original.Columns["C-1"] : "-",
      },
      {
        Header: "2nd",
        accessor: "C-2",
        Cell: ({ row }) =>
          row.original.Columns["C-2"] ? row.original.Columns["C-2"] : "-",
      },
    ],
    []
  );

  // const data = React.useMemo(() => hourreport.Results, []);
  // // const data2 = React.useMemo(() => hourreport.Results2, []);
  // const {
  //   // getTableProps,
  //   getTableBodyProps,
  //   // headerGroups,
  //   rows,
  //   prepareRow,
  // } = useTable({ columns, data })
  var total = 0;
  var tmp = [];
  var tmp2 = [];
  var dict = {};
  return (
    <div className="App">
      <div className="slideshowDots">
        {tables.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          //style = {{transform:  'translateX(-0%)'}}
        >
          <header className="App-header">
            <div className="big">
              <table className="tb" title="Production Status">
                <caption>Production Status</caption>
                <thead>
                  <tr key={"header"}>
                    <th>Date</th>
                    <th>Shift</th>
                    <th>Line</th>
                    {summary.Results2.map((part, i) => {
                      return (
                        <th key={i}>
                          {part.LineName} {part.Part}
                        </th>
                      );
                    })}
                    <th>Total</th>
                    <th>Avg</th>
                  </tr>
                </thead>
                <tbody>

{/*                  
                  {(() => {
                      for (let i = 0; i < summary.Results.length; i+=2) {
                        var dateofsum = moment(summary.Results[i].WORK_DT.toString()).format("MM/DD");
                        tmp.push(<tr><td rowSpan={2}>{dateofsum}</td> <td  rowSpan={2}>{summary.Results[i].TITLE}</td></tr>)
                   
                      }
                      return tmp
                      })()}
                */}
                  {summary.Results.map((data, index) => {
                    var counter = 1;
                    return (
                      <tr key={index}>
                          {(() => {
                          if (index % 2 === 0) {
                            var dateofsum = moment(data.WORK_DT.toString()).format("MM/DD");    
                            console.log(dateofsum)
                          return (
                            <td rowSpan={2} style={{ backgroundColor: "#f0f0f0" }} key={data.WORK_DT}>{dateofsum}</td>
                          ) 
                        }
                          })()}
                              {(() => {
                          if (index % 2 === 0) {
                          return (
                            <td rowSpan={2} style={{ backgroundColor: "#f0f0f0" }} key={data.WORK_DT}>{data.TITLE}</td>
                          ) 
                        }})()}
                        <td style={{ backgroundColor: "#f0f0f0" }} key={data.GB}>{data.GB}</td>
                        <Cell
                          value={
                            data.Line1.endsWith("%")
                              ? Number(data.Line1.slice(0, -1))
                              : ""
                          }
                        >
                          {data.Line1}
                        </Cell>
                        <Cell
                          value={
                            data.Line2.endsWith("%")
                              ? Number(data.Line2.slice(0, -1))
                              : ""
                          }
                        >
                          {data.Line2}
                        </Cell>
                        <Cell
                          value={
                            data.Line3.endsWith("%")
                              ? Number(data.Line3.slice(0, -1))
                              : ""
                          }
                        >
                          {data.Line3}
                        </Cell>
                        <Cell
                          value={
                            data.Line4.endsWith("%")
                              ? Number(data.Line4.slice(0, -1))
                              : ""
                          }
                        >
                          {data.Line4}
                        </Cell>
                        <Cell
                          value={
                            data.Line5.endsWith("%")
                              ? Number(data.Line5.slice(0, -1))
                              : ""
                          }
                        >
                          {data.Line5}
                        </Cell>
                        <Cell
                          value={
                            data.Line6.endsWith("%")
                              ? Number(data.Line6.slice(0, -1))
                              : ""
                          }
                        >
                          {data.Line6}
                        </Cell>
                        <Cell
                          value={
                            data.A.endsWith("%")
                              ? Number(data.A.slice(0, -1))
                              : ""
                          }
                        >
                          {data.A}
                        </Cell>
                        <Cell
                          value={
                            data.B.endsWith("%")
                              ? Number(data.B.slice(0, -1))
                              : ""
                          }
                        >
                          {data.B}
                        </Cell>
                        <Cell
                          value={
                            data.C.endsWith("%")
                              ? Number(data.C.slice(0, -1))
                              : ""
                          }
                        >
                          {data.C}
                        </Cell>
                        {/* <td>{data.A}</td>
                    <td>{data.B}</td>
                    <td>{data.C}</td> */}
                        {(() => {
                          if (data.GB.toString() === "Actual") {
                            return (
                              <td key={"total"} rowSpan={2}>
                                {Number(data.Line1) +
                                  Number(data.Line2) +
                                  Number(data.Line3) +
                                  Number(data.Line4) +
                                  Number(data.Line5) +
                                  Number(data.Line6) +
                                  Number(data.A) +
                                  Number(data.B) +
                                  Number(data.C)}
                              </td>
                            );
                          }
                        })()}
                        {(() => {
                          if (data.GB.toString() === "Actual") {
                            if (data.Line1 !== "") {
                              counter += 1;
                            }
                            if (data.Line2 !== "") {
                              counter += 1;
                            }
                            if (data.Line3 !== "") {
                              counter += 1;
                            }
                            if (data.Line4 !== "") {
                              counter += 1;
                            }
                            if (data.Line5 !== "") {
                              counter += 1;
                            }
                            if (data.A !== "") {
                              counter += 1;
                            }
                            if (data.B !== "") {
                              counter += 1;
                            }
                            if (data.C !== "") {
                              counter += 1;
                            }
                            return (
                              <Cell key={"avgcnt"} rowSpan={1}>
                                {
                                  // counter
                                  Math.round(
                                    (Number(data.Line1) +
                                      Number(data.Line2) +
                                      Number(data.Line3) +
                                      Number(data.Line4) +
                                      Number(data.Line5) +
                                      Number(data.Line6) +
                                      Number(data.A) +
                                      Number(data.B) +
                                      Number(data.C)) /
                                      counter
                                  )
                                }
                              </Cell>
                            );
                          }
                        })()}
                        {(() => {
                          if (data.GB.toString().startsWith("%")) {
                            if (data.Line1 !== "") {
                              counter += 1;
                            }
                            if (data.Line2 !== "") {
                              counter += 1;
                            }
                            if (data.Line3 !== "") {
                              counter += 1;
                            }
                            if (data.Line4 !== "") {
                              counter += 1;
                            }
                            if (data.Line5 !== "") {
                              counter += 1;
                            }
                            if (data.A !== "") {
                              counter += 1;
                            }
                            if (data.B !== "") {
                              counter += 1;
                            }
                            if (data.C !== "") {
                              counter += 1;
                            }
                            var avg = Math.round(
                              (Number(data.Line1.slice(0, -1)) +
                                Number(data.Line2.slice(0, -1)) +
                                Number(data.Line3.slice(0, -1)) +
                                Number(data.Line4.slice(0, -1)) +
                                Number(data.Line5.slice(0, -1)) +
                                Number(data.Line6.slice(0, -1)) +
                                Number(data.A.slice(0, -1)) +
                                Number(data.B.slice(0, -1)) +
                                Number(data.C.slice(0, -1))) /
                                counter
                            );
                            return (
                              <Cell key={"avg%"} rowSpan={1} value={avg}>
                                {
                                  // counter
                                  avg + "%"
                                }
                              </Cell>
                            );
                          }
                        })()}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="font-8">Last Update: {date}</div>
            </div>

              <div className="padding-left ">
                <table className="tb">
                  <caption>Production Status (Hourly)</caption>
                  <thead>
                    <tr>
                      <th key="date" rowSpan={2}>
                        Hourly
                      </th>
                      {summary.Results2.map((part, i) => {
                        return (
                          <th key={i} colSpan={2}>
                            {part.LineName}
                          </th>
                        );
                      })}
                    </tr>
                    <tr>
                      {(() => {
                        for (let i = 0; i < 9; i++) {
                          tmp.push(<th>{shift[0]}</th>);
                          tmp.push(<th>{shift[1]}</th>);
                        }
                        return tmp;
                      })()}
                    </tr>

                    {/*                         
              {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th 
                                    {...column.getHeaderProps()}                       
                                >
                                    {column.render('Header')}
                                </th>
                            ))}
                          
                        </tr>
                    ))} */}
                  </thead>
                  {/* <tbody {...getTableBodyProps()} > */}
                  <tbody>
                    {hourreport.Results2.map((target, i) => {
                      total = 0;
                      dict[target.TimeHour + "-" + target.Shift] =
                        target.TargetQty;
                      return <></>;
                    })}
                    {hourreport.Results.map((hour, i) => {
                      total = 0;
                      return (
                        <tr key={i}>
                          <td style={{ backgroundColor: "#e8f5ff" }}>{hour.Columns.ByHour}</td>
                          {columns.map((header, i) => {
                            var char = header.accessor.slice(0, 1);
                            if (
                              dict[
                                hour.Columns.ByHour +
                                  "-" +
                                  header.accessor.slice(-1)
                              ] < hour.Columns[header.accessor]
                            ) {
                              return (
                                <td style={{ backgroundColor: "lightgreen" }}>
                                  {" "}
                                  {hour.Columns[header.accessor]}
                                </td>
                              );
                            } else {
                              if (
                                char === "2" ||
                                char === "4" ||
                                char === "6" ||
                                char === "B"
                              ) {
                                return (
                                  <td style={{ backgroundColor: "lightgray" }}>
                                    {hour.Columns[header.accessor]}
                                  </td>
                                );
                              } else {
                                return (
                                  <td
                                    key={
                                      header.accessor +
                                      "-" +
                                      hour.Columns.ByHour
                                    }
                                  >
                                    {hour.Columns[header.accessor]}
                                  </td>
                                );
                              }
                            }
                          })}
                        </tr>
                      );
                    })}
                    <tr>
                      <th>Total</th>

                      {columns.map((header, i) => {
                        total = 0; // eslint-disable-next-line
                        {
                          hourreport.Results.map((hour) => {
                            // eslint-disable-next-line
                            {
                              Object.keys(hour.Columns).map((key) => {
                                if (key && key === header.accessor) {
                                  total = total + hour.Columns[key];
                                }
                                return <></>;
                              });
                            }
                            return <></>;
                          });
                        }
                        return (
                          <td
                            key={header.accessor + "-"}
                            style={{ backgroundColor: "#e8f5ff" }}
                          >
                            {total}
                          </td>
                        );
                      })}
                    </tr>
                    {/* {rows.map((row) => {
                      prepareRow(row)
                    
                      return (     
                        <tr {...row.getRowProps()}>
                        
                            {columns.map((header, i) => {
                                total = 0;
                                if ( Number(row.original.Columns[header.accessor])) {
                                  total = total + Number(row.original.Columns[header.accessor])
                                  // console.log(row.original.Columns[header.accessor])
                                }
                                return (
                                  <td key={header.accessor + '-' + row.original.Columns.ByHour}>{row.original.Columns[header.accessor]}</td>
                              )})}
                              <td>{row.original.Columns['ByHour']}</td>
                              {row.cells.map( (cell) => {
                                console.log(cell.row.original.Columns.ByHour + '-' + cell.column.id.slice(-1))
                                console.log(dict[cell.row.original.Columns.ByHour + '-' + cell.column.id.slice(-1)])
                                console.log(cell.column.id.slice(-1) === target.shift)
                                console.log()
                                  return  <td {...cell.getCellProps()} style={{}}> {cell.render('Cell')}</td>
                                  if(dict[cell.row.original.Columns.ByHour + '-' + cell.column.id.slice(-1)].type == String){
                                    return <td  {...cell.getCellProps()} style={{backgroundColor:"lightgreen"}}> {cell.render("Cell")}</td>;
                                    }
                                  else if(cell.type != String){
                                    return <td  {...cell.getCellProps()} style={{backgroundColor:"red"}}> {cell.render("Cell")}</td>;
                                  }
                                  else{
                                    return <td  {...cell.getCellProps()}> {cell.render("Cell")}</td>;
                                  }
                              })}
                         
                          </tr>
                      )
                    })} */}
                  </tbody>
                </table>
                <div className="font-8">Last Update: {date}</div>
              </div>{" "}
              {/* end of second table */}
          </header>
        </div>
      </div>
    </div>
  );
}

export default App;
