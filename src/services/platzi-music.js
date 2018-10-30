// importar libreria trae
import trae from 'trae'
// importar config
import configService from './config'
// instanciar una nueva instacioa de trae
const platziMusicService = trae.create({
  baseUrl: configService.apiUrl
})

export default platziMusicService
