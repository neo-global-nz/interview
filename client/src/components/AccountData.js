import "./table.css";
const AccountData = ({ accountData }) => {
  return !accountData ? (
    <h3>No Account Data</h3>
  ) : (
    <>
      <h3>Accounts Summary</h3>
      <table className="table">
        <tbody>
          <tr className="tablehead">
            <td>Account Name</td>
            <td>Account Type</td>
            <td>Available </td>
            <td>Current </td>
          </tr>

          {accountData.map(
            (
              {
                id,
                accountName,
                accountType,
                availableBalance,
                currentBalance,
              },
              index
            ) => (
              <tr key={id} className="tablerow">
                <td>{accountName}</td>
                <td>{accountType}</td>
                <td>${availableBalance}</td>
                <td>${currentBalance}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
};
export default AccountData;
