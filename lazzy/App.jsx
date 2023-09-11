import { lazy, Suspense } from "react";
import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ToApi = lazy(() => import("./ToApi"));


export  const App = () => {
  
  return (
    <>
    <div> 
      <Suspense fallback={<Spinner color="primary" />}>
        <ToApi />
      </Suspense>
    </div>  
    </>
  );
}
