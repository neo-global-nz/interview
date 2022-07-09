const AccountData = ({ accountData }) => {
  console.log("props", accountData);
  return !accountData ? (
    <h2>No Account Data</h2>
  ) : (
    <>
      <div className="tableclass">
        <h3>Accounts Summary</h3>
        <thead>
          <tr>
            <td>Account Name</td>
            <td>Account Type</td>
            <td>Available Balance</td>
            <td>Current Balance</td>
          </tr>
        </thead>
        <tbody>
          {accountData.map(
            (
              { accountName, accountType, availableBalance, currentBalance },
              index
            ) => (
              <tr key={index}>
                <td>{accountName}</td>
                <td>{accountType}</td>
                <td>${availableBalance}</td>
                <td>${currentBalance}</td>
              </tr>
            )
          )}
        </tbody>
      </div>
    </>
  );
};
export default AccountData;
