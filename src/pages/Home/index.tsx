/* eslint-disable prettier/prettier */
import { useWeb3React } from '@web3-react/core'
import styled from 'styled-components/macro'
import "./css/worp.css"
import BoxLoading from '../../components/BoxLoad'
import ListBox from '../../components/ListBox'
import { useFundsState } from '../../state/funds/hook'
import LeftMenu from "../../components/compent/left/index"
import Editingtwo from "../../components/compent/Editing/NTF-Trendings"
import The_calenda from "../../components/compent/Data/The_calendar"


const DashbordTitle = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 16px;
  color: #222222;
  font-weight: 500;
`
const DashbordBox = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
`
export default function Home() {
  const { active } = useWeb3React()

  return (
    <>
    
        <div className='worp'>
             <ul>
               <li>
                 <LeftMenu />
               </li>
               <li>
                 <div>
                 <The_calenda/>
                 </div>
                 <div>
                   people
                 </div>
               </li>
               <li>
                    <div>
                       
                    </div>
                    <div>
                     <Editingtwo/> 
                    </div>
               </li>
             </ul>
        </div>

    </>
  )
}
