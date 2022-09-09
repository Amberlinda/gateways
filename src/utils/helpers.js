import axios from 'axios'
import {url} from './constants'


export const getName = (part_id,success) => {
    axios.post(`${url}/getName`,{
        part_id:part_id
    })
    .then(resp => {
        // setParticipantName()
        if(resp.status === 200){
            success(resp.data?.name)
            return 
        }
    })
    .catch(error => {
        if(error.response.data){
            alert(error.response?.data?.response);
          }
        return null
    })
}

export const getCollegesHandler = (success) => {
    axios.get(`${url}/getColleges`)
    .then(resp => {
        success(resp.data)
    })
    .catch(err => {

    })
  }