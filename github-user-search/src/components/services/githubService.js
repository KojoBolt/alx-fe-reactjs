import React from 'react'
import axios from 'axios'

const fetchUserData = async () => {
    try{
        const response = await axios.get('https://api.github.com/users/{username}')
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

export const githubService = () => {
  return (
    <div>githubService</div>
  )
}
