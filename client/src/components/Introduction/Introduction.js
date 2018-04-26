import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react';
import location from "../icons/png/location.png";
import calendar from "../icons/png/calendar.png";
import search from "../icons/png/search.png";
import post from "../icons/png/post.png";
import security from "../icons/png/security.png";
import message from "../icons/png/message.png";
import cloudinary from "../icons/png/cloudinary.png";
import react from "../icons/png/react.png";

const style={
    column: {
        paddingBottom: "2%"
    },
    iconImg: {
        maxWidth: "50%",
        maxHeight: "50%",
    },
}

class Introduction extends Component {
    render(){
        return(
            <div className="introContatiner">
            <Container>
                <Grid style={{marginTop: "50px", paddingBottom: "50px"}}>
                    <div class="ui stackable four grid">
                        <div className="ui center aligned four wide column" style={style.column}>
                            <img alt="locator" src={location} style={style.iconImg} />
                            <h3 style={{fontFamily: "'Alegreya Sans', sans-serif", color: "black"}}>Automatic Locator</h3>
                            <p style={{fontFamily: "'Open Sans', sans-serif"}}></p>
                        </div>
                        <div className="ui center aligned four wide column" style={style.column}>
                            <img alt="login" src={security} style={style.iconImg} />
                            <h3 style={{fontFamily: "'Alegreya Sans', sans-serif", color: "black"}}>User Authentication</h3>
                            <p style={{fontFamily: "'Open Sans', sans-serif"}}> </p>
                        </div>
                        <div className="ui center aligned four wide column" style={style.column}>
                            <img alt="search" src={search} style={style.iconImg} />
                            <h3 style={{fontFamily: "'Alegreya Sans', sans-serif", color: "black"}}>Search</h3>
                            <p style={{fontFamily: "'Open Sans', sans-serif"}}> </p>
                        </div>
                        <div className="ui center aligned four wide column" style={style.column}>
                            <img alt="msg" src={message} style={style.iconImg} />
                            <h3 style={{fontFamily: "'Alegreya Sans', sans-serif", color: "black"}}>Message</h3>
                            <p style={{fontFamily: "'Open Sans', sans-serif"}}> </p>
                        </div>
                        <div className="ui center aligned four wide column" style={style.column}>
                            <img alt="post" src={post} style={style.iconImg} />
                            <h3 style={{fontFamily: "'Alegreya Sans', sans-serif", color: "black"}}>Post & Delete</h3>
                            <p style={{fontFamily: "'Open Sans', sans-serif"}}> </p>
                        </div>
                        <div className="ui center aligned four wide column" style={style.column}>
                            <img alt="cloudinary" src={cloudinary} style={style.iconImg} />
                            <h3 style={{fontFamily: "'Alegreya Sans', sans-serif", color: "black"}}>Cloudinary</h3>
                            <p style={{fontFamily: "'Open Sans', sans-serif"}}> </p>
                        </div>
                        <div className="ui center aligned four wide column" style={style.column}>
                            <img alt="calendar" src={calendar} style={style.iconImg} />
                            <h3 style={{fontFamily: "'Alegreya Sans', sans-serif", color: "black"}}>Calendar</h3>
                            <p style={{fontFamily: "'Open Sans', sans-serif"}}> </p>
                        </div>
                        <div className="ui center aligned four wide column" style={style.column}>
                            <img alt="react" src={react} style={style.iconImg} />
                            <h3 style={{fontFamily: "'Alegreya Sans', sans-serif", color: "black"}}>React Native</h3>
                            <p style={{fontFamily: "'Open Sans', sans-serif"}}> </p>
                        </div>
                    </div>
                </Grid>
            </Container>
            </div>
        )
    }

}


export default Introduction;