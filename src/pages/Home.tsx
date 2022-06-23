import { gql, useQuery } from "@apollo/client";
import { Header } from "../components/Header";
import { Lessons } from "../components/Lessons";
import { SideBar } from "../components/SideBar";
import { Video } from "../components/Video";


const GET_LESSONS_QUERY = gql`
  query lessons {
    lessons {
      id
      title
    }
  }
`

interface lessons {
  id: string
  title: string
}
function Home() {

  const { data } = useQuery<{lessons:lessons[]}>(GET_LESSONS_QUERY);

  return (
    <div className="flex flex-col min-h-screen"> 
      <Header  />
     <main className="flex flex-1">
         <Video />     
         <SideBar />        
       </main>
     
    </div>
  )
}

export default Home;