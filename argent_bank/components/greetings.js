import styles from '../styles/Greetings.module.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selecedtUser, setUser,  setToken} from '../features/userSlice'
import { updateUserProfile , getUserProfile} from '../pages/api/login'

export default function Greetings () {
    const [editFormIsOpen, setEditFormIsOpen] = useState(false)
    const [newFirstName, setNewFirstName] = useState('') 
    const [newLastName, setNewLastName] = useState('')
    const dispatch = useDispatch()
    const user = useSelector(selecedtUser)
    console.log(user)
    const token = user.token
    
    const handleUpdate = (e) => {
        e.preventDefault()
        updateUserProfile({
            token : token,
            firstName : newFirstName,
            lastName : newLastName,
        }).then(() => {
            dispatch(setToken({token}))
            getUserProfile({token : token}).then(() =>{
                const firstName = newFirstName
                const lastName = newLastName
                const email = user.email
                const id = user.id
                dispatch(setUser({firstName, lastName, email, id}))
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
                            <label htmlFor="firstName">First name</label><input type="text" id="username" value={newFirstName} onChange={(e) => setNewFirstName(e.target.value)}/>
                        </div>
                        <div className={styles.wrapper}>
                            <label htmlFor="LastName">Last name</label><input type="text" id="username" value={newLastName} onChange={(e) => setNewLastName(e.target.value)}/>
                        </div>
                        <div className={styles.buttonWrapper}>
                            <button className={styles.button} onClick={handleUpdate}>Update name</button>
                            <button className={styles.button} onClick={handleCancel}>Cancel</button>
                        </div>
                    </form>
                )}
            </div>
        </>
    )
}
