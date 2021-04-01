export default function StatusIcon(orderStatus) {
  return (
    <div className="StatusIcon">
      {orderStatus === "order-info-received" && true}
      {orderStatus === "on-the-way" && true}
      {orderStatus === "delivered" && true}
      {orderStatus === "ready-for-pickup" && true}
    </div>
  );
}
