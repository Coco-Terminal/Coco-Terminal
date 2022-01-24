import { useWeb3React } from '@web3-react/core'
import styled from 'styled-components/macro'

import BoxLoading from '../../components/BoxLoad'
import ListBox from '../../components/ListBox'
import { useFundsState } from '../../state/funds/hook'

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
      <ListBox title="DashBord">
        <div></div>
      </ListBox>
    </>
  )
}
