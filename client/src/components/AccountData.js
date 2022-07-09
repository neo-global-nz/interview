const AccountData = ({ accountData }) => {
  return !accountData ? (
    <h2>No Account Data</h2>
  ) : (
    <>
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
            { id, accountName, accountType, availableBalance, currentBalance },
            index
          ) => (
            <tr key={id}>
              <td>{accountName}</td>
              <td>{accountType}</td>
              <td>${availableBalance}</td>
              <td>${currentBalance}</td>
            </tr>
          )
        )}
      </tbody>
    </>
  );
};
export default AccountData;
