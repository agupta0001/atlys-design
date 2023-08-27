import MainLayout from "@/components/MainLayout"
import { ReactElement } from "react"

const Home = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">Hello Atlys</div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

export default Home;