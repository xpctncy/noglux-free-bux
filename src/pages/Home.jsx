import { useState } from "react";

export default function Home() {

  const [submittedBux, setSubmittedBux] = useState(null);

  async function FormHandler(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = formData.get("username");
    const bux = formData.get("bux-amount");

    if (user?.length && bux?.length > 0) {
      setSubmittedBux(bux);
    } else {
      console.log("Invalid details");
    }
  }

  return (
    <>
    <h1 className="bux-title">Noglux bux generator</h1>
    <div className="bux-container">
        <form onSubmit={FormHandler} className="bux-form">
            <input type="text" name="username" placeholder="Username" className="bux-input"></input>
            <input type="number" name="bux-amount" placeholder="Bux Amount" min="1" max="1000000" className="bux-input"></input>
            <p className="bux-sign">FREE 🤑🤑🤑</p>
            <input type="submit" value="Receive" className="bux-submit"></input>
        </form>
    </div>
    {submittedBux && (
    <div className="submit-notification">
        <button className="submit-close" onClick={() => setSubmittedBux(null)}>x</button>
        <p className="notification-header">Success!</p>
        <img src={process.env.PUBLIC_URL + "/assets/images/noglux-bux.png"}></img>
        <p className="notification-text">
        <span className="bux-highlight">
            {submittedBux}
        </span>{" "}
        Bux have been deposited to your Noglux account!
        </p>
    </div>  
    )}
    <h6 className="site-warning">Obviously this is a joke website, you will not get free bux. </h6>
    </>
  );
}