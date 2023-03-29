import "../styles/globals.css";
import { LayOut } from "../components";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";
function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <LayOut>
        <Toaster />
        <Component {...pageProps} />
      </LayOut>
    </StateContext>
  );
}

export default MyApp;
