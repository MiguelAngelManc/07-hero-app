import { mount } from "enzyme"
import { AuthContext } from "../../auth/AuthContext"
import { AppRouter } from "../../routers/AppRouter"

describe('Pruebas de AppRouter', () => {

    const contextValue = {
        dispatch:jest.fn(),
        user:{
            logged:false
        }
    }

    
    test('Mostrar login cuando no autentificado', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        )

        expect(wrapper).toMatchSnapshot();
        
    })
    
    test('Debe mostrar marvel si esta autentificado', () => {
        const wrapper = mount(
            <AuthContext.Provider value={{user:{logged:true,name:"miguel"}}}>
                <AppRouter />
            </AuthContext.Provider>
        )

        expect(wrapper.find('.navbar').exists()).toBe(true)

    })
    


})
