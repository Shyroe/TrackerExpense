import React from "react";

const TransactionItem = props => {
  const { transaction, removeTransaction, formatMoney } = props;
  const sign = transaction.value > 0 ? "+" : "-";
  return (
    <div className={"group-items " + transaction.type}>
      <button
        onClick={() => removeTransaction(transaction.id)}
        className="group-items__close"
      >
        X
      </button>
      <li className="group-items__item ">
        <span className="history__item">{transaction.desc}</span>
        <span className="history__value">
          {sign} {formatMoney(Math.abs(transaction.value))}
        </span>
      </li>
    </div>
  );
};

export default TransactionItem;
