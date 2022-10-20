interface IService<T> {
  create(obj:unknown):Promise<T>,
  readOne(_id:string):Promise<T>,
  read():Promise<T[]>,
}

export default IService;
