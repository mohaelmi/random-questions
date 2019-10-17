import React, { Component } from 'react'
import { Textfield, IconButton, Card, CardTitle, CardActions, Button } from 'react-mdl';
//import { Link } from 'react-router-dom';

var studentsArray = [ 'Hamza', 'Abdallah', 'Naser', 'Aisha', 'Nazar', 'Fatema', 'Jamal', 'Ahmed Jordan', 'Mohamed Dali', 'Sara', 'Mohamed Hussien', 'Clear', 'Maya', 'Tarekh', 'Nour', 'Ahmed Syria']
var questions = [ 
    "when was the las time you slept more than nine hours ?",
    "what was your recent lie ?",
    "what was the last song you sang ?",
    "do you think that aliens exists ?",
    "what is your favorite sport ?",
    "what are yor current worring about ?",
    "if magic was real what spell would you try to learn first",
    "if you given 5 million to open museum what kind of museum would you open ?",
    "what food have you never eaten but would realy like to try",
    "if you were moving to another country but could only pack one carry on sized bag, what would you pack",
    "who created mickey mouse",
    "what is your favorite sports",
    "what langauge do you wish could be your native language",
    "how do you make your slef sleep when you can't seem to get to sleep",
    "what habit you have now that you wish you started much earlier",
    "if you get chance to meet one famous artist who would be",
    "what is the recent things that you google it",
    "what was the most important appoinment or deadline you missed",
    "what is most favorite qoute even from movie or book",
    "19 what movie, picture, video always makes you lough no matter how often watch it ?"

 ]
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: Math.floor(Math.random() * 16) + 0,
          type: '',
          background: 'url(https://i.ytimg.com/vi/q41AIk3gPKQ/hqdefault.jpg) center / cover',
          question: 'no question',
          number: -1,
          h: false
        };
        this.handleclick = this.handleclick.bind(this);
        this.handlechange = this.handlechange.bind(this);
        this.genQuestion = this.genQuestion.bind(this);
        this.handlechange2 = this.handlechange2.bind(this);
        this.genQuestion2 = this.genQuestion2.bind(this);
      }

    handlechange(e) {
        this.setState({type: e.target.value});
        
    }
    handlechange2(e){
        this.setState({number: e.target.value}); 
    }
    handleclick(event) {
        event.preventDefault();
        var random = Math.floor(Math.random() * 15) + 0;
        this.setState({ value: random});
        console.log(studentsArray[this.state.value]);
        console.log(this.state.type)
        if(this.state.type === "sad"){
            this.setState({ background: "url(https://i.gifer.com/42YE.gif) center / cover" }) 
        }else if(this.state.type === "angry"){
            this.setState( { background: "url(https://thumbs.gfycat.com/DimwittedSociableKob-max-1mb.gif) center / cover" } )
        }else if(this.state.type === "smart"){
            this.setState( { background: "url(https://spectrum.ieee.org/image/MjkzMDUzMA.gif) center / cover" } )
        }else if(this.state.type === "lucky"){
            this.setState( { background: "url(http://i.imgur.com/mT5S7Ep.gif) center / cover" } )
        }else if(this.state.type === "stupid"){
            this.setState( { background: "url(https://i0.wp.com/www.twm.news/wp-content/uploads/2019/02/vb171A.gif?w=1000) center / cover" } )
        }else if(this.state.type === "shortest"){
            this.setState( { background: "url(https://thumbs.gfycat.com/UnfortunateLivelyHoneyeater-size_restricted.gif) center / cover" } )
        }else if(this.state.type === "love coffee and break"){
            this.setState( { background: "url(https://media.giphy.com/media/q4UBaAHqNWHn2/giphy.gif) center / cover" } )
        }else if(this.state.type === "talks more"){
            this.setState( { background: "url(https://media0.giphy.com/media/GDqc7M5bxx6sU/source.gif) center / cover" } )
        }else if(this.state.type === "tallest"){
            this.setState( { background: "url(https://media.giphy.com/media/ezKJXTzjvIJws/giphy.gif) center / cover" } )
        }else if(this.state.type === "crazy"){
            this.setState( { background: "url(https://i.pinimg.com/originals/25/80/46/258046bd6bced6d29f04650efeccb6a3.gif) center / cover" } )
        }else if(this.state.type === "cool"){
            this.setState( { background: "url(http://www.mtv.com/news/wp-content/uploads/style/2014/05/They-Dont-Care-About-Us-After.gif) center / cover" } )
        }else if(this.state.type === "happy"){
            this.setState( { background: "url(http://giphygifs.s3.amazonaws.com/media/bTzFnjHPuVvva/giphy.gif) center / cover" } )
        }
        this.setState({ h:true })     
    }
    
    genQuestion(){
        var random = Math.floor(Math.random() * 20) + 0;
        if(this.genQuestion2() === false){
        this.setState({ question: random })
        console.log(this.state.number)
        }

    }
    genQuestion2(){
        if(this.state.number >= 0){
            console.log(this.state.number)  
            this.setState({ question: this.state.number })
            this.setState({ number: -1 })
            return true
        }else {
            return false
        }

    }

    render() {
        return (
            <div>
                <h3><strong> please don't take it personal JUST FOR FUN!! </strong></h3>


            {/* Expandable Textfield */}
            IN THE CLASS WHO IS<Textfield
                onChange = { this.handlechange }
                label="Expandable Input"
                expandable
                expandableIcon="search"
            />
             
             <IconButton name="mood" onClick={this.handleclick } colored />
            { this.state.h ? 
                
            <div>
                <h4> <strong>{ studentsArray[this.state.value] }</strong> you are always <strong>{ this.state.type }</strong> hhhhh booom! </h4>
                <Card shadow={0} style={{ background: this.state.background, margin: 'auto'}}>
                <CardTitle expand />
                <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                
                </span>
                </CardActions>
                </Card>
                <Textfield
                    onChange = { this.handlechange2 }
                    label="please choose number..."
                    style={{width: '200px'}}
                />
                <Button primary onClick={this.genQuestion2 }>get question</Button>
                <br></br>
                <Button raised colored style={buStyle} onClick={this.genQuestion }>Computer Generate instead of you</Button>
                <h3> { questions[this.state.question] } </h3>
            </div>
            :null }
           

            </div>
        )
    }

}


const buStyle = {
    marginRight: '10px',
    height: '40px',
    width: '100px',
    borderRadius: '10px',
    border: 'none',
    background: 'red',
   
   };


export default Home