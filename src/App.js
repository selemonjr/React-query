import Characters from "./Characters.js"
import {QueryClientProvider,QueryClient} from "react-query";
import Navigation from "./components/Navigation";
const queryClient = new QueryClient()
const App = () => {
  return (
    <>
    <div>
      <Navigation/>
     <QueryClientProvider client={queryClient}>
     <Characters/>
     </QueryClientProvider> 
    </div>
    </>
  )
}
export default App;