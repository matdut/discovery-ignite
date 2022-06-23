import { gql, useQuery } from "@apollo/client";
import { Lessons } from "./Lessons";

const GET_LESSONS_QUERY = gql`
  query  {
    lessons {
      id
      lessonType
      title
      slug
      availableAt
    }
  }
`
interface GetLessonsQueryResponse {
  lessons: {
    id: string
    title: string
    slug: string 
    availableAt: Date
    lessonType: 'live' | 'class'
  }[]
  
}

export function SideBar( ) {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);

  console.log(data);

  return (
  <aside className="w-[348px] p-6 border-l border-gray-600">
     <span className="font-bold text-2xl pb-6 mb-6  border-r-gray-500 block">Cronograma de Aulas</span>
      
      <div className="flex flex-1 gap-8">
          {
          data?.lessons.map(lesson => {
            return (
                <Lessons 
                key={lesson.id}
                title= {lesson.title}
                slung={lesson.slug}
                avaliableAt={new Date(lesson.availableAt)}
                type={lesson.lessonType}
                />
            )
          })
        } 
      </div>
  </aside>
  )
}