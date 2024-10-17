import { Component as Wrapper } from '../components/wrapper'
import { Component as Header } from '../components/header'
import { Component as Footer } from '../components/footer'
import { Component as Content } from '../components/content'
import { Component as Item } from '../components/item'

export default function Home() {
  return (
    <Wrapper>
        <Header>
            <h2>Header</h2>
        </Header>
        <Content>
            <div></div>
            <div>
                <div>
                    <Item initialPosition='odd' index={0} />
                </div>
                <div>
                    <Item initialPosition='even' index={1} />
                </div>
                <div>
                    <Item initialPosition='odd' index={2} />
                </div>
            </div>
        </Content>
        <Footer>
            <h2>Footer</h2>
        </Footer>
    </Wrapper>
  )
}
