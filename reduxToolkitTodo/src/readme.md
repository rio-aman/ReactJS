# STEPS FOR REDUX TOOL KIT USING IN TODO PROJECT

never mutate your state ye sab redux me phle se hojata hai 

## step 1 - creating store firstly usually their is only one store for every application but exception is every where so possible of more but in interview say only one store possible which we call as "single source of truth"

## step 2 - store ko reducers kaha pr hai voo bhi ise btana pdega kuyki store hr taraf se reducers allow nahi karat means ek dataflow nahi hai isleyia 

## step 3 - creating in features(also call as Slices) as TodoSlicing (form by using createSlice) for creating slices we need three thing " name , initialState and all reducers " 

reducers(which is object in which all key value pair functions are added)

In reducers me function me do value milti hai ek state(we get updated state value of store) or action(we get in this action.payload)

## step 4 export all reducers and main source of all reducers for sending we use useDispatch and for getting or selecting we use useSelector as we get from state  

## step 5 removeTodo for this happening we use useDispatch bcz we have to send the id for removing the todo