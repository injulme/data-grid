import { useMemo, useState } from "react";
import "./App.css";

function App() {
  // commit test
  const [data, setData] = useState(initialData);
  const [isAsc, setIsAsc] = useState(false);
  const onSorting = (field) => {
    const clone = [...data];
    const sorting = clone.sort((a, b) =>
      isAsc ? a[field] - b[field] : b[field] - a[field]
    );

    setData(sorting);
    setIsAsc(!isAsc);
  };

  const memoData = useMemo(() => {
    return data.map((v, i) => {
      return (
        <tr key={i}>
          <td>{v.name}</td>
          <td>{v.age}</td>
          <td>{v.gender === "M" ? "남" : "여"}</td>
        </tr>
      );
    });
  }, [data]);

  return (
    <table>
      <thead>
        <tr>
          {columns.map((v, i) => {
            return (
              <th key={i} onClick={() => onSorting(v.field)}>
                {v.label} {isAsc ? "^" : "v"}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>{memoData}</tbody>
    </table>
  );
}

const columns = [
  {
    field: "name",
    label: "이름",
  },
  {
    field: "age",
    label: "나이",
  },
  {
    field: "gender",
    label: "성별",
  },
];
const initialData = [
  {
    name: "김미정",
    age: 30,
    gender: "W",
  },
  {
    name: "정효진",
    age: 25,
    gender: "W",
  },
  {
    name: "김아영",
    age: 22,
    gender: "W",
  },
  {
    name: "김태열",
    age: 27,
    gender: "M",
  },
  {
    name: "지수림",
    age: 25,
    gender: "W",
  },
  {
    name: "홍성재",
    age: 27,
    gender: "M",
  },
];

export default App;
