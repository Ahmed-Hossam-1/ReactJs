import { useDispatch, useSelector } from "react-redux";
import { order, reStoced } from "../featchers/icecream/icecram";
import { useState } from "react";

function IcecreamView() {
  const [quantity, setQuantity] = useState(1);
  const icenum = useSelector((state) => state.icecream.numberOfIccream);
  const despatch = useDispatch();
  return (
    <>
      <div>number of icecream - {icenum}</div>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={() => despatch(order(quantity))}>Order icecream</button>
      <button onClick={() => despatch(reStoced(5))}>Restock icecream</button>
    </>
  );
}

export default IcecreamView;
