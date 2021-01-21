import { mount } from "enzyme"
import { MemoryRouter, Router } from "react-router-dom"
import { AuthContext } from "../../../auth/AuthContext"
import { Navbar } from "../../../Components/ui/Navbar"
import { types } from "../../../types/types"
import "@testing-library/jest-dom";

describe('Pruebas en Navbar', () => {
    
    const historyMock = {
        replace:jest.fn(),
        location:{},
        listen:jest.fn(),
        createHref:jest.fn()
    }

    const contextValue = {
        dispatch:jest.fn(),
        user:{
            logged:true,
            name:'Miguel'
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Router history={historyMock}>
                        <Navbar />
                    </Router>
                </MemoryRouter>
        </AuthContext.Provider>
    )

    afterEach(()=>{
        jest.clearAllMocks()
    })

    test('Debe mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Miguel')
        
    })
    

    test('Debe llamar el logout y el history', () => {
        
        wrapper.find('button').prop('onClick')();

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type:types.logout
        })

        expect(historyMock.replace).toHaveBeenCalledWith('/login')

    })
    

})
