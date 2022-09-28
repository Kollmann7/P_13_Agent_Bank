import styles from '../styles/Greetings.module.css'
import axios from 'axios'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selecedtUser, displayUser } from '../features/userSlice'
import { updateUserProfile , getUserProfile} from '../pages/api/login'

export default function Greetings () {
    const [editFormIsOpen, setEditFormIsOpen] = useState(false)
    const [newFirstName, setNewFirstName] = useState('') 
    const [newLastName, setNewLastName] = useState('')

    const dispatch = useDispatch()
    const user = useSelector(selecedtUser)
    const token = user.token

    const handleUpdate = (e) => {
        e.preventDefault()
        updateUserProfile({
            token : token,
            firstName : newFirstName,
            lastName : newLastName
        }).then(() => {
            getUserProfile({token : token}).then((response) =>{
            console.log(response)
            const firstName = newFirstName
            const lastName = newLastName
            dispatch(displayUser({firstName, lastName}))
            })
        handleEdit()
        })
    }

    const handleEdit = () => {
        setEditFormIsOpen(!editFormIsOpen)
    }
    
    const handleCancel = () => {
        setEditFormIsOpen(!editFormIsOpen)
    }

    return (
        <>
            <div className={styles.header}>
                <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>
                {!editFormIsOpen &&(
                    <button className={styles.button} onClick={handleEdit}>Edit Name </button>
                )}
                {editFormIsOpen &&(
                    <form>
                        <div className={styles.wrapper}>
                            <label for="firstName">First name</label><input type="text" id="username" value={newFirstName} onChange={(e) => setNewFirstName(e.target.value)}/>
                        </div>
                        <div className={styles.wrapper}>
                            <label for="LastName">Last name</label><input type="text" id="username" value={newLastName} onChange={(e) => setNewLastName(e.target.value)}/>
                        </div>
                        <div>
                        <button className={styles.button} onClick={handleUpdate}>Update name</button>
                        <button className={styles.button} onClick={handleCancel}>Cancel</button>
                        </div>
                    </form>
                )}
            </div>
        </>
    )
}