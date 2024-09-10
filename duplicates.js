function Duplicates(arr){
    return[...new Set(arr)]

}
const arrayWithDuplicates=[1,2,2,3,4,4,5,6,6,7]
const arrayWithoutDuplicates= Duplicates(arrayWithDuplicates)
console.log(arrayWithoutDuplicates.join(','));
