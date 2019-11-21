import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';


export default class Main extends Component{
    state={
        profile: [ ],
        contacts: [ ]
    };

    componentDidMount(){
        this.loadProfile();
    }

    loadProfile = async () => {
        const response = await api.get();

        //console.log(response.data.profile);

        const  { contact, ...profile} = response.data.profile;  //captura o profile
        //const { contacts } = response.data.profile.contact;
        //console.log(contacts);

        

        this.setState({ contacts: contact, profile });   //salva no state

    }


    render(){
        const { profile, contacts } = this.state;
        console.log(profile)
        console.log(contacts)
       


       // {this.state.contacts && this.state.contacts.map
       return (
       <div className="profile-page">
           <div className="profile-profile">
               <img src={ profile.image } alt="" ></img>
                <h1> { profile.name}  </h1>
                <p> { profile.profession } </p>
                <p> { profile.description } </p>
                <p> { contacts.tel } </p>
                <p> { contacts.cel } </p>
                <p> { contacts.address } </p>
                <p> { contacts.website } </p>
                <p> { contacts.mail } </p>
                
                {profile.skills && profile.skills.map(skill => (
                    <article>
                      <h3>{ skill.name }: { skill.value }</h3>               

                    </article>

                ))}
               
           </div>
           

           <div className="profile-experience">
                {profile.experience && profile.experience.map(exp => (
                    <article>
                      <h3>{ exp.name }</h3>
                      <p>{ exp.date }</p>
                      <p>{ exp.description }</p>                 

                    </article>

                ))}
            </div>

           
       </div> 
       );
        }
}