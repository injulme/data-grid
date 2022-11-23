import { useMemo, useState } from "react";
import { faker } from '@faker-js/faker';
import "./App.css";

function App() {
  faker.locale = 'ko';

  const [data, setData] = useState([]);
  const [isAsc, setIsAsc] = useState(false);

  const createRandom = () => {
    return {id: faker.datatype.uuid(), name: faker.name.firstName() + faker.name.lastName(), age: Math.floor(Math.random() * 100), gender: 'M'};
  }
  Array.from ({length: 30}).forEach(() => {
    data.push(createRandom())
  })


  const onSorting = (field) => {
    const clone = [...data];
    const sorting = clone.sort((a, b) =>
      isAsc ? a[field] - b[field] : b[field] - a[field]
    );

    setData(sorting);
    setIsAsc(!isAsc);
  };

  const memoData = useMemo(() => {
    return data.map((v,) => {
      return (
        <tr key={v.id}>
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

export default App;
