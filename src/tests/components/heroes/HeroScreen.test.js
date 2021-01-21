import { mount } from "enzyme"
import { MemoryRouter, Route } from "react-router-dom"
import { HeroScreen } from "../../../Components/heroes/HeroScreen"

describe('Pruebas en HeroScreen', () => {

    //'

    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn(),
    }

    

    test('Match con snapshot', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen 
                    history
                />)
            </MemoryRouter>
        )

        expect(wrapper.find('Redirect').exists()).toBe(true);

    })
    
    test('Debe mostrar un heroe si el parametro existe y se encuentr', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/dc-batman']}>
                <Route 
                    path="/hero/:heroeId" 
                    component={(props)=><HeroScreen history={history}/>}   
                    />
            </MemoryRouter>
        )

        expect(wrapper.find('.row').exists()).toBe(true)
        
    })

    test('Debe regresar a la pantalla anterior con push', () => {

        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn(),
        }

        const wrapper = mount(
        <MemoryRouter initialEntries={['/hero/dc-batman']}>
            <Route 
                path="/hero/:heroeId" 
                component={(props)=><HeroScreen history={history}/>}   
                />
        </MemoryRouter>
        )

        wrapper.find('button').prop('onClick')()

        expect(history.push).toHaveBeenCalledWith('/')
        expect(history.goBack).not.toHaveBeenCalled()

        
    })

    test('Debe regresar a la pantalla anterior con goBack', () => {

        const history = {
            length: 10,
            push: jest.fn(),
            goBack: jest.fn(),
        }

        const wrapper = mount(
        <MemoryRouter initialEntries={['/hero/dc-batman']}>
            <Route 
                path="/hero/:heroeId" 
                component={(props)=><HeroScreen history={history}/>}   
                />
        </MemoryRouter>
        )

        wrapper.find('button').prop('onClick')()

        expect(history.push).not.toHaveBeenCalled()
        expect(history.goBack).toHaveBeenCalled()

        
    })

    test('Debe redireccionar cuando no existe', () => {

        const history = {
            length: 10,
            push: jest.fn(),
            goBack: jest.fn(),
        }

        const wrapper = mount(
        <MemoryRouter initialEntries={['/hero/dcasdasdasn']}>
            <Route 
                path="/hero/:heroeId" 
                component={(props)=><HeroScreen history={history}/>}   
                />
        </MemoryRouter>
        )

        expect(wrapper.html()).toBe('')
        
    })
    
    
    

    
})
