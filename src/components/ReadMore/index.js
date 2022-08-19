// Write your code here
import {useState} from 'react'
import {
  BgCont,
  Heading,
  Para,
  CustomButton,
  Image,
  ParaDiv,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  console.log(reactHooksDescription)
  const [showMore, setShowMore] = useState(false)

  const toggleButton = () => {
    setShowMore(!showMore)
  }
  return (
    <BgCont>
      <Heading>React Hooks</Heading>
      <Para>Hooks are a new addition to React</Para>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <ParaDiv>
        <Para>
          {showMore
            ? reactHooksDescription
            : reactHooksDescription.slice(0, 170)}
        </Para>
      </ParaDiv>
      <CustomButton
        onClick={() => {
          setShowMore(prevState => !prevState)
        }}
      >
        {showMore ? 'Read Less' : 'Read More'}
      </CustomButton>
    </BgCont>
  )
}
export default ReadMore
