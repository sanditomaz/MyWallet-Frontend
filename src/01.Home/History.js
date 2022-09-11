import StyledHistory from "../Styles/StyledHistory";
import StatusColor from "../Styles/StatusColor";

export default function History({ userData }) {
  const sum = (a, b) => a + b;
  const balance = userData
    .filter((item) => item.status === "green")
    .map((i) => Number(i.value))
    .reduce(sum, 0);

  const sumOfRed = (a, b) => a + b;
  const negativeBalance = userData
    .filter((item) => item.status === "red")
    .map((i) => Number(i.value))
    .reduce(sumOfRed, 0);

  const totalBalance = balance - negativeBalance;

  return (
    <StyledHistory totalBalance={totalBalance}>
      <main>
        <span>
          {userData.map((item, index) => (
            <ListTransactions
              date={item.date}
              description={item.description}
              value={item.value}
              status={item.status}
              key={index}
            />
          ))}
        </span>

        <section>
          <h3>BALANCE</h3>
          <h4>{totalBalance}</h4>
        </section>
      </main>
    </StyledHistory>
  );
}

function ListTransactions({ date, description, value, status }) {
  return (
    <section>
      <nav>
        <nobr>
          <p>{date}</p>
        </nobr>
        <h1>{description}</h1>
      </nav>
      <StatusColor status={status}> {value} </StatusColor>
    </section>
  );
}
