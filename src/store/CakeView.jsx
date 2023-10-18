import { useDispatch, useSelector } from "react-redux";
import { order, reStoced } from "../featchers/cake/CakeSlice";

function CakeView() {
  const cakenum = useSelector((state) => state.cake.numberOfCake);
  const despatch = useDispatch();
  return (
    <>
      <div>number of cake - {cakenum}</div>
      <button onClick={() => despatch(order())}>Order cake</button>
      <button onClick={() => despatch(reStoced(5))}>Restock cakes</button>
    </>
  );
}

export default CakeView;
