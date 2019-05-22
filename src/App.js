import React from 'react';
import './App.css';

const App = ()=> (<PersonList />)

const PersonList = ()=> {
  const people = [
    {
      img: 22, 
      name: "john",
      job: "developer" 
    },
    {
      img: 34, 
      name: 'bob',
      job: "designer" 
    },
    {
      img: 56, 
      name: "peter",
      job: "artist" 
    }
  ]

  return(
  <section>
     <Person person={people[0]}>
      Certainty listening no no behaviour existence assurance situation is. 
      Because add why not esteems amiable him. Interested the unaffected mrs law friendship add principles. 
      Indeed on people do merits to. Court heard which up above hoped grave do. 
      Answer living law things either sir bed length. Looked before we an on merely. 
      These no death he at share alone. Yet outward the him compass hearted are tedious. 
     </Person>
     <Person person={people[1]}> 
      Remain valley who mrs uneasy remove wooded him you. Her questions favourite him concealed. 
      We to wife face took he. The taste begin early old why since dried can first. Prepared as or humoured formerly. 
      Evil mrs true get post. Express village evening prudent my as ye hundred forming. 
      Thoughts she why not directly reserved packages you. Winter an silent favour of am tended mutual. 
     </Person>
     <Person person={people[2]}> 
      Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. 
      Be it reserved contempt rendered smallest. Studied to passage it mention calling believe an. 
      Get ten horrible remember pleasure two vicinity. Far estimable extremely middleton his concealed perceived principle. 
      Any nay pleasure entrance prepared her. 
     </Person>
  </section>
  )
}

const Person = (props)=> {
  const {img, name, job} = props.person
  const {children} = props
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
  
  return (<div className="person">
  <img src={url} alt=""/>
    <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}
    </div>
  </div>)
}





export default App;
