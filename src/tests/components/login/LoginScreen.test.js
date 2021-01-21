import { mount } from "enzyme"
import { AuthContext } from "../../../auth/AuthContext"
import { LoginScreen } from "../../../Components/login/LoginScreen"
import { types } from "../../../types/types"

describe('Pruebas en LoginScreen', () => {
    
    const history = {
        replace: jest.fn(),
    }

    const contextMock = {
        user:{},
        dispatch: jest.fn(),
    }

    test('Debe mostrarse correctamente', () => {
        
        const wrapper = mount(
            <AuthContext.Provider value={contextMock}>
                <LoginScreen history={history}/>
            </AuthContext.Provider>
        )

        expect(wrapper).toMatchSnapshot();
    })

    test('Debe hacer login y cambiar el usuario y la navegacion', () => {

        const wrapper = mount(
            <AuthContext.Provider value={contextMock}>
                <LoginScreen history={history}/>
            </AuthContext.Provider>
        )

        const handleClick = wrapper.find('button').prop('onClick');

        const action = {
            type:types.login,
            payload:{
                name:''
            }
        }

        handleClick()

        expect(history.replace).toHaveBeenCalledWith('/')
        expect(contextMock.dispatch).toHaveBeenCalledWith(action)

        localStorage.setItem('lastpath','/marvel')
        localStorage.setItem('lastname','Miguel')

        handleClick()

        
        expect(history.replace).toHaveBeenCalledWith('/marvel')

    })
    
    

})
