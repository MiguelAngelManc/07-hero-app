import { mount } from "enzyme"
import { MemoryRouter, Route } from "react-router-dom"
import { SearchScreen } from "../../../Components/search/SearchScreen"

describe('Pruebas en SearchScreen', () => {
    
    const mockHistory = {
        push:jest.fn()
    }

    test('Prueba con snapshot', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={["/search"]}>
                <Route path="/search" component={(props)=><SearchScreen  history={mockHistory}/>}/>
            </MemoryRouter>
        )

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert').text().trim()).toBe('Search a hero...')
    })
    

    test('Debe de mostrar a batman y input con query string', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/search?q=batman"]}>
                <Route path="/search" component={(props)=><SearchScreen  history={mockHistory}/>}/>
            </MemoryRouter>

        )
        
        expect(wrapper.find('input').prop('value')).toBe('batman')
        expect(wrapper).toMatchSnapshot();

    })

    test('Debe mostrar error si no encuentra al heroe', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={["/search?q=sdfsdf"]}>
                <Route path="/search" component={(props)=><SearchScreen  history={mockHistory}/>}/>
            </MemoryRouter>


        )
            
        expect(wrapper.find('.alert-danger').exists()).toBe(true)
        expect(wrapper).toMatchSnapshot();
    })
    
    test('Hace el push', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={["/search?q=sdfsdf"]}>
                <Route path="/search" component={(props)=><SearchScreen  history={mockHistory}/>}/>
            </MemoryRouter>
        )

        wrapper.find('input').simulate('change', {
            target:{
                name:'search',
                value:'batman'
            }
        })

        wrapper.find('form').simulate('submit',{preventDefault(){}})

        expect(mockHistory.push).toHaveBeenCalledWith(`?q=batman`)

    })
    

})
