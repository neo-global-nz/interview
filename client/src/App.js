import "./App.css";
import { useEffect, useState } from "react";
import AccountData from "./components/AccountData";
import DecisionData from "./components/DecisionData";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [accountData, setAccountData] = useState({});
  const [decisionData, setDecisionData] = useState({});

  useEffect(() => {
    // I used AbortController (https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
    // to clean up so that I don’t introduce a memory leak
    // (https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup)
    // I may also look to refactor this to use the new React 18 'lazy load' and 'suspense' functionality.
    const abortController = new AbortController();

    // fetch and store account and transaction speific data
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const result = await fetch("http://localhost:5000/api/transactions");
        if (!result.ok) {
          throw new Error("API Error");
        }
        const data = await result.json();
        if (data && !abortController.signal.aborted) {
          const {
            banks: [{ bankAccounts }],
            decisionMetrics,
          } = data;
          setAccountData(bankAccounts);
          setDecisionData(decisionMetrics);
        }
      } catch (error) {
        if (!abortController.signal.aborted) {
          setError(true);
        }
      } finally {
        if (!abortController.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    // return () => abortController.abort();
  }, []);

  if (loading) {
    return (
      <main className="App">
        <header className="App-header">
          <h1>loading....</h1>;
        </header>
      </main>
    );
  }

  if (error) {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Error fetching Bank Data! </h1>;
        </header>
      </main>
    );
  }
  return (
    <main className="App">
      <header className="App-header">
        <h1>Bank Summary</h1>
        <AccountData accountData={accountData} />
        <DecisionData decisionData={decisionData} />
      </header>
    </main>
  );
}

export default App;
