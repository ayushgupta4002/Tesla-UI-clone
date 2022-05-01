import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
  return (
    <Container>
         <Section title="Model S"
             description="Order Online for Touchless Delivery"
             backgroundImg="model-s.jpg"
             leftbuttontxt="Custom order"
             rightbuttontxt="Existing Inventory"

         />
         <Section title="Model Y"
             description="Order Online for Touchless Delivery"
             backgroundImg="model-y.jpg"
             leftbuttontxt="Custom order"
             rightbuttontxt="Existing Inventory"


         />
         <Section title="Model X"
             description="Order Online for Touchless Delivery"
             backgroundImg="model-x.jpg"
             leftbuttontxt="Custom order"
             rightbuttontxt="Existing Inventory"

         />
         <Section title="Model 3"
             description="Order Online for Touchless Delivery"
             backgroundImg="model-3.jpg"
             leftbuttontxt="Custom order"
             rightbuttontxt="Existing Inventory"

         />
    </Container>
  )
}

export default Home

const Container=styled.div`
 height:100vh;
`
