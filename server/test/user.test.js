import server from "../../index";
import chai, { should } from "chai";
import model from '../models/user'
import chaiHttp from "chai-http";
import mocha from "mocha";
const { it, describe } = mocha;
chai.should();
chai.use(chaiHttp);


const mockUser = {
    email:'blaisee@gmail.com',
    password: 'bernard12'
}

describe('sign a user', async () => {
    beforeEach(async()=>{
       await model.deleteOne(
            
            {email:mockUser.email}
        )
    })
    it('should signup a user', async  () => {
        const res = await chai.request(server).post('/alex/signup').send(mockUser)
        res.should.have.status(201)
    })

    it('should not signin a user', async () => {
        const mockuser = {
            email:'blaise@gmail.com',
            password: 'bernarrd'
        }
        const res = await chai.request(server).post('/alex/signup').send(mockuser)
        res.should.have.status(409)
    })

    it('server error', async () => {
        const res = await chai.request(server).post('/alex/signup').send()
        res.should.have.status(500)
    })
})


