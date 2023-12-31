import TopComponent from "./components/TopComponent"
import MiddleComponent from "./components/MiddleComponent"
import BotComponent from "./components/BotComponent"

export default function Services() {
    return (
      <div className="bg-gradient-to-r from-serviceBG to-white">
        <div className="container mx-auto p-8">
          <TopComponent />
          <MiddleComponent />
          <BotComponent />
        </div>
      </div>
    )
  }