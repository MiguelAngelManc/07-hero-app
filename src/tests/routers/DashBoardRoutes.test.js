import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../auth/AuthContext"
import { DashBoardRoutes } from "../../routers/DashBoardRoutes"


describe('Pruebas con DashBoardRoutes', () => {
    
    const contextValue = {
        dispatch:jest.fn(),
        user:{
            logged:true,
            name:'Miguel'
        }
    }

    test('Match snapshot', () => {
        
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashBoardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Miguel')
    })
    

})
