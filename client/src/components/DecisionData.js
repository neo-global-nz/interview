import "./table.css";
const DecisionData = ({ decisionData }) => {
  return !decisionData ? (
    <h3>No Decision Data</h3>
  ) : (
    <>
      <h3>Grouped Transactions</h3>
      <table className="table">
        <tbody>
          <tr className="tablehead">
            <td>Transaction Type</td>
            <td>Value</td>
          </tr>

          {decisionData.map(({ id, name, value }) => (
            <tr key={id} className="tablerow">
              <td>{name}</td>
              <td>${value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default DecisionData;
