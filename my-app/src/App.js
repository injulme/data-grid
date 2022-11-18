import "./App.css";

function App() {
  return (
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>나이</th>
          <th>성별</th>
        </tr>
      </thead>
      <tbody>
        {data.map((v, i) => {
          return (
            <tr key={i}>
              <td>{v.name}</td>
              <td>{v.age}</td>
              <td>{v.gender === "M" ? "남" : "여"}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

const data = [
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
    name: "홍성재",
    age: 27,
    gender: "M",
  },
];

export default App;
