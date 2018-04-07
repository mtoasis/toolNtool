import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Container, Icon } from 'semantic-ui-react'

const mainDivStyle={
  marginTop:"90px",
}

const SignIn = () => (
  <Container style = {mainDivStyle}>
  <div className='login-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' textAlign='center' style={{color: "#5B4DF9"}}>
          {' '}Log-in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button color='violet' fluid size='large'>Login</Button>
            <p style ={{padding: "10px"}}> OR </p>
            <Button href="/auth/google" color="violet" fluid size='large' style={{
              marginTop: "-15px",
            }}><Icon name='google' />Login with Google</Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
  </Container>
)

export default SignIn