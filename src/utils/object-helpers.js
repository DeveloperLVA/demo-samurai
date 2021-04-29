
export const updateObjectInArray = ( items, itemId, objPropName, newObjProps ) => {
   return items.map(u => {   // для отработки КОНКРЕТного юзера .map  -возвращает //
    // НОВЫЙ массив на основе СТАРГО массива //
    if (u[objPropName] === itemId) {
        return {...u, ...newObjProps}
    }
    return u;
})

}

