import Navbar from './components/Navbar'
import "./Profil.css";
import Card from './components/Card';

export default function Profil(){
    return (

        <div className='container'>
            <Navbar />

            <nav className='navParametre'>
                <ul className='boite'>
                    <label>Paramètres Utilisateur</label>
                        <li><a href='#'>Mon compte</a></li>
                        <li><a href='#'>Confidentialité et Securité</a></li>
                        <li><a href='#'>Connexions</a></li>
                        <li><a href='#'>General</a></li>
                </ul>

                <ul className='boite'>
                    <label>Paramètres de L'Appli</label>
                        <li><a href='#'>Apparence</a></li>
                        <li><a href='#'>Voix et Video</a></li>
                        <li><a href='#'>Notifications</a></li>
                        <li><a href='#'>Langue</a></li>
                </ul>

                <ul className='boite'>
                    <label>Paramètres d'Activité</label>
                        <li><a href='#'>Jeux enregisté</a></li>
                        <li><a href='#'>Overlay en jeu</a></li>
                        <li><a href='#'>Nouveautés</a></li>
                </ul>
            </nav>

            <h1>Mon Profil</h1>
            <h6>Gérez les paramètres de votre profil</h6>
            <Card />
            
        </div>
    )
    }


