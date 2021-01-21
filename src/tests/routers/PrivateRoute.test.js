
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom"
import { PrivateRoute } from "../../routers/PrivateRoute"


describe('Pruebas en PrivateRoute', () => {
    
    const props = {
        location:{
            pathname:"testpruebas"
        }
    }

    Storage.prototype.setItem = jest.fn();

    test('Muestra el compoentne si esta autenticado y guarda en localsotrage', () => {
        
        const wrapper = mount(
        <MemoryRouter>
            <PrivateRoute 
                isAuth={true}
                component={ () => <span>hola</span>}
                {...props}
            />
        </MemoryRouter>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('span').exists()).toBe(true)
        expect(localStorage.setItem).toHaveBeenCalledWith('lastpath','testpruebas')
        
    })

    test('Probar el componente si no esta autenticado',()=>{

        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuth={false}
                    component={ () => <span>hola</span>}
                    {...props}
                />
            </MemoryRouter>);

        expect(wrapper.html()).toBe('')

    })
    

})
