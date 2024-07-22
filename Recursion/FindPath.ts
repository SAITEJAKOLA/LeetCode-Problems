function findPath( obj : any, value: number,  path: string[] = []): string | null{
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            const currentPath = path.concat(key);
            if(obj[key]===value){
                return currentPath.join(',');
            }
            else if(typeof(obj[key]) === 'object' && obj[key]!== null){
                const result = findPath(obj[key], value, currentPath);
                if(result){
                    return result;
                }
            }
        }
    }
    return null;
}
// Example usage
const obj: any = {
  x: {
    y:{
        z:
        {
            a:5

        }
    }
  },
    z: {
        a:{
            b:10
        },
    }
};

const pathOfObj: string|null = findPath(obj, 10);

console.log(pathOfObj); // Output: "x,y"
