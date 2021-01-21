
import { authReducer } from "../auth/authReducer"
import { types } from "../types/types"

describe('Pruebas de authReducer', () => {
    

    test('Debe de retornar el valor por defecto', () => {
        const state = authReducer({},{})

        expect(state).toEqual({})
    })

    test('Debe de autenticar y colocar el nombre usuario', () => {
        
        const action ={
            type:types.login,
            payload:{
                name:'Miguel'
            }
        }

        const state = authReducer({},action)

        
        console.log(state)

        expect(state.name).toBe('Miguel')
        expect(state.logged).toBe(true)

    })

    test('Debe de borrar el nombre depsues de hacer logout', () => {

        const action ={
            type:types.login,
            payload:{
                name:'Miguel'
            }
        }

        
        authReducer({},action)

        
        const state = authReducer({},{type:types.logout})


        expect(state.name).toBe(undefined)
        expect(state.logged).toBe(false)
    })
    
    
    

})
