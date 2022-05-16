import React from "react";
import "./Dash.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Dash = () => {
  return (
    <main className="dash">
      <section className="dash__sectionOne">
        <article className="dash__sectionOne__articleOne">
          <div className="applicant_card">
            <h3>Thomas Thomas</h3>
            <p>Applicant Credit Score</p>
            <div />
            <p style={{ textAlign: "center" }}>
              Your credit score contains your overall credit history
            </p>
          </div>
          <div className="applicant_card">
            <h3>Bella Thomas</h3>
            <p>Co-Applicant Credit Score</p>
            <div />
            <p style={{ textAlign: "center" }}>
              Your credit score contains your overall credit history
            </p>
          </div>
          <div className="applicant_card" style={{ backgroundColor: "#fff" }}>
            <h3>Home Budget Limit</h3>
            <p>Find a home within this budget</p>
            <div />
            <p style={{ textAlign: "center" }}>
              Your credit score contains your overall credit history
            </p>
          </div>
        </article>
        <article className="dash__sectionOne__articleTwo">
          <div style={{ backgroundColor: "#e9fef6" }}>
            <p>Active Monthly Payment</p>
            <h2>#1,394,053</h2>
          </div>
          <div style={{ backgroundColor: "#f1c52f" }}>
            <p>Investment Returns</p>
            <h2>#500,063</h2>
          </div>
          <div style={{ backgroundColor: "#00f754" }}>
            <p>Home Savings</p>
            <h2>#3,009,063</h2>
          </div>
          <div style={{ backgroundColor: "#c4c4c4" }}>
            <p>Loans</p>
            <h2>#300,063</h2>
          </div>
        </article>
      </section>
      <section className="dash__sectionTwo">
        <h2 style={{ textAlign: "left" }}>Transaction history</h2>
        <div className="ttable">
          <table>
            <thead>
              <tr>
                <td className="arrow"> </td>
                <th>
                  <span>Reciever</span>
                </th>
                <th>
                  <span>Type</span>
                </th>
                <th>
                  <span>Type</span>
                </th>
                <th>
                  <span>Date</span>
                </th>
                <th>
                  <span>Amount</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from(Array(10).keys()).map((i, index) => (
                <tr key={index}>
                  <td className="arrow">
                    <AiOutlineShoppingCart fontSize="14px" />
                  </td>
                  <td>
                    <strong style={{ color: "#404040" }}>Tesco Market</strong>
                  </td>
                  <td>Shopping</td>
                  <td>Shopping</td>
                  <td>13 Dec 2020</td>
                  <td>
                    <strong style={{ color: "#404040" }}>#5,564</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default Dash;
