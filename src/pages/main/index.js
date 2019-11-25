import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';


export default class Main extends Component {
    state = {
        profile: [],
        contacts: []
    };

    componentDidMount() {
        this.loadProfile();
    }

    loadProfile = async () => {
        const response = await api.get();

        //console.log(response.data.profile);

        const { contact, ...profile } = response.data.profile;  //captura o profile
        //const { contacts } = response.data.profile.contact;
        //console.log(contacts);



        this.setState({ contacts: contact, profile });   //salva no state

    }


    render() {
        const { profile, contacts } = this.state;
        console.log(profile)
        console.log(contacts)



        // {this.state.contacts && this.state.contacts.map
        return (
            <div className="profile-page">
                <div className="profile-profile">
                    <img src={profile.image} alt="" ></img>

                    <h1 className="profile-name"> {profile.name}  </h1>
                    <p className="profile-profession"> {profile.profession} </p>
                    <h5 className="profile-subtitles">PROFILE</h5>
                    <p> {profile.description} </p>
                    <h5 className="profile-subtitles">CONTACT</h5>
                    <p> {contacts.tel} <br></br>{contacts.cel} </p>
                    <p> {contacts.address} </p>
                    <p> {contacts.website} <br></br> {contacts.mail} </p>
                    <h5 className="profile-subtitles">SKILLS</h5>
                    {profile.skills && profile.skills.map(skill => (
                        <article>
                            <p className="profile-skill-name"> {skill.name}</p>
                            <div style={{ border: '1px solid #fff', backgroundColor: '#333' }}>
                                <div style={{ height: '24px', width: `${skill.value}`, backgroundColor: 'white' }}></div>
                            </div>



                        </article>
                    ))}
                </div>


                <div className="profile-experience">

                    <h5 className="profile-experience-titles">work experience</h5>
                    {profile.experience && profile.experience.map(exp => (
                        <article>
                            <h5 className="">{exp.name}</h5>
                            <p>{exp.date}</p>
                            <p>{exp.description}</p>

                        </article>

                    ))}

                    <h5 className="profile-experience-titles">education</h5>
                    {profile.education && profile.education.map(ed => (
                        <article>
                            <h5 className="">{ed.name}</h5>
                            <p>{ed.date}</p>
                            <p>{ed.description}</p>

                        </article>

                    ))}


                </div>


            </div>
        );
    }
}
