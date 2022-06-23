import {CheckCircle, Lock} from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

interface LessonProps {
  title: string;
  slung: string;
  avaliableAt: Date;
  type: 'live' | 'class';

}

export function Lessons(props: LessonProps ) {

  let isLessonAvailble = isPast(props.avaliableAt);
  let avaliableDateFormat = format(props.avaliableAt, "EEEE '  .  '  d  ' de '  MMMM ' . ' K'h 'mm",{
   locale: ptBR
  }
   )
  return  (
    <a href='*' >
       <span className="text-zinc-700">
              {avaliableDateFormat}
        </span>
        
        <div className="rounded border border-gray-500 p-4 mt-2 text-zinc-700">
            <header className="flex items-center justify-between text-zinc-700">
                 {
                  isLessonAvailble ?  (
                    <span className="text-sm text-bkue-500 font-medium  flex item-center  grap-2 ">
                    <CheckCircle size={20} />
                        {props.title}
                   </span>
                  ) : 
                 (
                  <span className="text-sm text-orange-500 font-medium flex item-center  grap-2">
                     <Lock size={20} />
                            Em breve
                 </span>
                 )
                 }
         
                 <span className='text-zinc-700'>
                   { props.type == 'live'  ?  ' Ao Vivo'  :  'Aula Prática'   } 
                  </span> 
            </header>
            <strong className='text-zinc-700'>
                {props.title}
            </strong>
        </div>  

    </a>
  )
}