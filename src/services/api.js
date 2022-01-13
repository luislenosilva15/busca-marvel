import axios from "axios"
import md5 from "react-native-md5"

const publicKey = '62f7fd4871b006d836c8378f673a50ac'
const privateKey = '6472aec765f6affe171bac4f8cf4d69ca1e33288'
const timestamp = Date.now()
const md5Key = md5.hex_md5(timestamp + privateKey + publicKey)
const limit = 4
const api = axios.create({
    baseURL: `http://gateway.marvel.com/v1/public`,
})

export async function ListCharacters(offset) {
    return api.get(`/characters?`, {
        params: {
            ts: timestamp,
            apikey: publicKey,
            hash: md5Key,
            offset,
            limit
        }
    })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error

        })
}