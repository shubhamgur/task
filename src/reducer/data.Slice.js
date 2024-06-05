import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: [],
  arr:[],
  pro:[]
}

export const dataSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addon: (state,action) => {
       // console.log(action.payload)
        state.value.push(action.payload)
    },
    deletes: (state,action) => {
        // console.log(action.payload)
         state.value[action.payload].del=true;
     },
     addonsub: (state,action) => {
        // console.log(action.payload)
         state.arr.push(action.payload)
     },
     subdeletes: (state,action) => {
        // console.log(action.payload)
         state.arr[action.payload].del=true;
     },
      edits: (state,action) => {
        for(let i=0;i<state.value.length;i++){
          if(state.value[i].id===action.payload.id){
            state.value[i].cName=action.payload.cName
            state.value[i].img=action.payload.img
            state.value[i].del=action.payload.del
          }
        }
   },
   editpro: (state,action) => {
    for(let i=0;i<state.pro.length;i++){
      if(state.pro[i].id===action.payload.id){
        state.pro[i].product=action.payload.product
        state.pro[i].subc=action.payload.subc
        state.pro[i].del=action.payload.del
        state.pro[i].cat=action.payload.cat
      }
    }
},
   subedit:(state,action) => {
    for(let i=0;i<state.arr.length;i++){
      if(state.arr[i].id===action.payload.id){
        state.arr[i].subc=action.payload.subc
        state.arr[i].img=action.payload.img
        state.arr[i].del=action.payload.del
        state.arr[i].cat=action.payload.cat
      }
    }
},
 proaddon: (state,action) => {
  // console.log(action.payload)
   state.pro.push(action.payload)
},
deletespro: (state,action) => {
  // console.log(action.payload)
   state.pro[action.payload].del=true;
}
  },
 

})

/**/


export const { addon,deletes,addonsub,subdeletes,edits,subedit,proaddon,deletespro,editpro} = dataSlice.actions

export default dataSlice.reducer